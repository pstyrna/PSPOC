import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Comment } from 'src/app/shared/models/comment.model';

@Component({
    selector: 'app-comment-row',
    templateUrl: './comment-row.component.html',
    styleUrls: ['./comment-row.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentRowComponent {
    @Input() comment?: Comment;
}
