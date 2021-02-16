import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BroadcastCommentService } from 'src/app/shared/broadcast-comment.service';
import { BrowserPushService } from 'src/app/shared/browser-push.service';
import { anything, instance, mock, verify } from 'ts-mockito';
import { CommentatorComponent } from './commentator.component';

describe('CommentatorComponent', () => {
    let component: CommentatorComponent;
    let fixture: ComponentFixture<CommentatorComponent>;

    let sendCommentServiceMock: BroadcastCommentService;
    let browserPushServiceMock: BrowserPushService;

    beforeEach(() => {
        sendCommentServiceMock = mock(BroadcastCommentService);
        browserPushServiceMock = mock(BrowserPushService);

        TestBed.configureTestingModule({
            declarations: [CommentatorComponent],
            imports: [],
            providers: [
                { provide: BroadcastCommentService, useFactory: () => instance(sendCommentServiceMock) },
                { provide: BrowserPushService, useFactory: () => instance(browserPushServiceMock) },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(CommentatorComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        // Act
        fixture.detectChanges();

        // Assert
        expect(component).toBeTruthy();
    });

    it('on start should call browserPushService send', () => {
        // Arrange
        fixture.detectChanges();

        // Act
        const button = fixture.debugElement.query(By.css('button'));
        button.nativeElement.click();

        // Assert
        verify(browserPushServiceMock.send(anything(), anything())).once();
    });

    it('on send should call sendCommentService send with content', () => {
        // Arrange
        const content = 'test';
        component.isStarted = true;
        component.content = content;
        fixture.detectChanges();

        // Act
        const button = fixture.debugElement.query(By.css('button'));
        button.nativeElement.click();

        // Assert
        verify(sendCommentServiceMock.send(anything(), content)).once();
    });
});
