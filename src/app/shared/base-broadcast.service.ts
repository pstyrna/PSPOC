import { NgZone } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export abstract class BaseBroadcastService<T> {
    private messageSubjectMap = new Map<string, Subject<T>>();

    constructor(protected ngZone: NgZone) {}

    protected sendMessage(channel: string, message: T): void {
        new BroadcastChannel(channel).postMessage(message);
    }

    protected receiveMessage(channel: string): Observable<T> {
        if (this.messageSubjectMap.has(channel)) {
            return this.messageSubjectMap.get(channel)!.asObservable();
        }
        const sub = new Subject<T>();
        this.messageSubjectMap.set(channel, sub);
        new BroadcastChannel(channel).onmessage = (messageEvent: MessageEvent<T>) => {
            this.ngZone.run(() => sub.next(messageEvent.data));
        };
        return sub.asObservable();
    }
}
