import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { commentatorChannel, spamChannel } from 'src/app/shared/constants';
import { Comment } from 'src/app/shared/models/comment.model';
import { BaseBroadcastService } from './base-broadcast.service';

@Injectable({ providedIn: 'root' })
export class BroadcastCommentService extends BaseBroadcastService<Comment> {
    constructor(protected ngZone: NgZone) {
        super(ngZone);
    }

    send(commentatorId: string, content: string): void {
        const comment = new Comment(new Date(), commentatorId, content);
        super.sendMessage(commentatorChannel, comment);
    }

    sendSpam(content: string): void {
        const comment = new Comment(new Date(), 'spam', content);
        super.sendMessage(spamChannel, comment);
    }

    receive(): Observable<Comment> {
        return super.receiveMessage(commentatorChannel);
    }

    receiveSpam(): Observable<Comment> {
        return super.receiveMessage(spamChannel);
    }
}
