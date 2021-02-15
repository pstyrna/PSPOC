import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentatorComponent } from './commentator.component';

const routes: Routes = [
    {
        path: '',
        component: CommentatorComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CommentatorRoutingModule {}
