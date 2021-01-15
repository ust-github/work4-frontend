import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ConfigService} from './service/config.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {OwnersListComponent} from './owner/owners-list.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                OwnersListComponent
            ],
            providers: [
                ConfigService,
                HttpClient,
                HttpHandler
            ]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});
