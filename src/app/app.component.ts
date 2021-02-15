import { Component, OnInit } from '@angular/core';
import { BrowserPushService } from './shared/browser-push.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'PS-POC';

    constructor(private browserPushService: BrowserPushService) {}

    ngOnInit(): void {
        this.browserPushService.subscribeForPush();
    }
}
