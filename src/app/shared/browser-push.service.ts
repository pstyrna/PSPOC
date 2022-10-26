import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BrowserPushService {
    private permission: NotificationPermission;
    constructor() {
        this.permission = this.isSupported() ? Notification.permission : 'denied';
    }

    subscribeForPush(): void {
        if ('Notification' in window) {
            Notification.requestPermission((status) => (this.permission = status));
        }
    }

    send(message: string, url: string): void {
        this.create(message).subscribe((res) => {
            if (res.event.type === 'click') {
                res.notification.close();
                window.open(window.location.origin + url);
            }
        });
    }

    private create(title: string): Observable<{ notification: Notification; event: any }> {
        return new Observable((obs: any) => {
            if (!('Notification' in window)) {
                obs.error('Notifications are not available in this environment');
                obs.complete();
            }

            if (this.permission !== 'granted') {
                obs.error(`The user hasn't granted you permission to send push notifications`);
                obs.complete();
            }

            const n = new Notification(title);

            n.onshow = (e: any) => obs.next({ notification: n, event: e });
            n.onclick = (e: any) => obs.next({ notification: n, event: e });
            n.onerror = (e: any) => obs.error({ notification: n, event: e });
            n.onclose = () => obs.complete();
        });
    }

    private isSupported() {
        return 'Notification' in window;
    }
}
