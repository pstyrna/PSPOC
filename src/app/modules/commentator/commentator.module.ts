import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { CommentatorRoutingModule } from './commentator-routing.module';
import { CommentatorComponent } from './commentator.component';

@NgModule({
    declarations: [CommentatorComponent],
    imports: [CommentatorRoutingModule, MaterialModule, FormsModule, CommonModule],
    providers: [],
})
export class CommentatorModule {}
