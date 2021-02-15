import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({
    providedIn: 'root',
})
export class CommentatorGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(): boolean {
        if (sessionStorage.getItem('areYouSure')) {
            return true;
        }
        this.router.navigate(['areYouSure']);
        return false;
    }
}
