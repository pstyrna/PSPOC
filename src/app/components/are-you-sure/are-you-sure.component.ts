import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-are-you-sure',
    templateUrl: './are-you-sure.component.html',
    styleUrls: ['./are-you-sure.component.scss'],
})
export class AreYouSureComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}

    onYes(): void {
        sessionStorage.setItem('areYouSure', 'yes');
        this.router.navigate(['commentator']);
    }

    onNo(): void {
        this.router.navigate(['']);
    }
}
