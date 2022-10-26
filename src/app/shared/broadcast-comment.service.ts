import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/shared/models/comment.model';
import { BaseBroadcastService } from './base-broadcast.service';

@Injectable({ providedIn: 'root' })
export class BroadcastCommentService extends BaseBroadcastService<Comment> {
    private commentatorChannel = 'commentatorChannel';
    private spamChannel = 'spamChannel';

    constructor(protected ngZone: NgZone) {
        super(ngZone);
    }

    public send(commentatorId: string, content: string): void {
        const comment = new Comment(new Date(), commentatorId, content);
        super.sendMessage(this.commentatorChannel, comment);
    }

    public sendSpam(content: string): void {
        const comment = new Comment(new Date(), 'spam', content);
        super.sendMessage(this.spamChannel, comment);
    }

    public receive(): Observable<Comment> {
        return super.receiveMessage(this.commentatorChannel);
    }

    public receiveSpam(): Observable<Comment> {
        return super.receiveMessage(this.spamChannel);
    }
}
