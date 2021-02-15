import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommentStore } from './comment-store';

@Component({
    selector: 'app-spectator',
    templateUrl: './spectator.component.html',
    styleUrls: ['./spectator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpectatorComponent {
    commentList$ = this.commentStore.getAll();

    constructor(private commentStore: CommentStore) {}
}
