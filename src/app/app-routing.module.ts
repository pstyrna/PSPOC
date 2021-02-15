import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhoYouAreComponent } from './components/who-you-are/who-you-are.component';

const routes: Routes = [
    { path: '', component: WhoYouAreComponent, pathMatch: 'full' },
    {
        path: 'commentator',
        loadChildren: () => import('./modules/commentator/commentator.module').then((m) => m.CommentatorModule),
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
