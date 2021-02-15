import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent implements OnInit {
    page$?: Observable<string>;
    isOpen = false;
    constructor(private router: Router) {}

    ngOnInit(): void {
        this.page$ = this.router.events.pipe(
            filter((e): e is NavigationEnd => e instanceof NavigationEnd),
            map((e) => e.url.charAt(1).toUpperCase() + e.url.slice(2))
        );
    }
}
