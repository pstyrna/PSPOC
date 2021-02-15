import { ScrollingModule as ExperimentalScrollingModule } from '@angular/cdk-experimental/scrolling';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { CommentRowComponent } from './comment-row/comment-row.component';
import { SpectatorRoutingModule } from './spectator-routing.module';
import { SpectatorComponent } from './spectator.component';

@NgModule({
    declarations: [SpectatorComponent, CommentRowComponent],
    imports: [
        SpectatorRoutingModule,
        MaterialModule,
        FormsModule,
        CommonModule,
        ScrollingModule,
        ExperimentalScrollingModule,
    ],
    providers: [],
})
export class SpectatorModule {}
