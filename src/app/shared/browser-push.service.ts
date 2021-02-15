import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PushNotificationsService } from 'ng-push-ivy';

@Injectable({ providedIn: 'root' })
export class BrowserPushService {
    constructor(private pushNotificationsService: PushNotificationsService, private router: Router) {}

    subscribeForPush(): void {
        this.pushNotificationsService.requestPermission();
    }

    send(message: string, url: string): void {
        this.pushNotificationsService.create(message).subscribe((res) => {
            if (res.event.type === 'click') {
                res.notification.close();
                window.open(window.location.origin + url);
            }
        });
    }
}
