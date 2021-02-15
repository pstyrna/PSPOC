import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-who-you-are',
    templateUrl: './who-you-are.component.html',
    styleUrls: ['./who-you-are.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhoYouAreComponent {}
