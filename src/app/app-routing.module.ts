import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreYouSureComponent } from './components/are-you-sure/are-you-sure.component';
import { WhoYouAreComponent } from './components/who-you-are/who-you-are.component';
import { CommentatorGuard } from './shared/guards/commentator.guard';

const routes: Routes = [
    { path: '', component: WhoYouAreComponent, pathMatch: 'full' },
    {
        path: 'areYouSure',
        component: AreYouSureComponent,
    },
    {
        path: 'commentator',
        loadChildren: () => import('./modules/commentator/commentator.module').then((m) => m.CommentatorModule),
        canActivate: [CommentatorGuard],
    },
    {
        path: 'spectator',
        loadChildren: () => import('./modules/spectator/spectator.module').then((m) => m.SpectatorModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
