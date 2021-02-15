import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, interval, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BrowserPushService } from 'src/app/shared/browser-push.service';
import { newGuid } from 'src/app/shared/guid.generator.function';
import { BroadcastCommentService } from '../../shared/broadcast-comment.service';

@Component({
    selector: 'app-commentator',
    templateUrl: './commentator.component.html',
    styleUrls: ['./commentator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
@UntilDestroy()
export class CommentatorComponent {
    content?: string;
    isSpam = false;
    isStarted = false;
    spamSpeed$ = new BehaviorSubject(1);

    private spamSubscription?: Subscription;
    private commentatorId = newGuid();

    constructor(private sendCommentService: BroadcastCommentService, private browserPushService: BrowserPushService) {}

    onStart(): void {
        this.browserPushService.send('Transmission has started', '/spectator');
        this.isStarted = true;
    }

    onSend(): void {
        if (this.content) {
            this.sendCommentService.send(this.commentatorId, this.content);
            this.content = undefined;
        }
    }

    onSpam(): void {
        if (this.isSpam) {
            this.spamSubscription = this.spamSpeed$
                .pipe(
                    switchMap((s) => interval(10000 / s)),
                    untilDestroyed(this)
                )
                .subscribe(() => {
                    this.sendCommentService.sendSpam(newGuid());
                });
        } else {
            this.spamSubscription?.unsubscribe();
        }
    }
}
