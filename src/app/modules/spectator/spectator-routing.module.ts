import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpectatorComponent } from './spectator.component';

const routes: Routes = [
    {
        path: '',
        component: SpectatorComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SpectatorRoutingModule {}
