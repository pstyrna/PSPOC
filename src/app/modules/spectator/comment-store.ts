import { Injectable } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, Observable } from 'rxjs';
import { BroadcastCommentService } from 'src/app/shared/broadcast-comment.service';
import { Comment } from 'src/app/shared/models/comment.model';

@Injectable({ providedIn: 'root' })
@UntilDestroy()
export class CommentStore {
    private commentList$ = new BehaviorSubject<Comment[]>([]);

    constructor(private broadcastCommentService: BroadcastCommentService) {
        this.broadcastCommentService
            .receive()
            .pipe(untilDestroyed(this))
            .subscribe((c) => this.commentList$.next([c, ...this.commentList$.value]));
        this.broadcastCommentService
            .receiveSpam()
            .pipe(untilDestroyed(this))
            .subscribe((c) => this.commentList$.next([c, ...this.commentList$.value]));
    }

    public getAll(): Observable<Comment[]> {
        return this.commentList$.asObservable();
    }
}
