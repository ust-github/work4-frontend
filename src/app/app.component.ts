import {Component, OnDestroy, OnInit} from '@angular/core';
import {ConfigService, IOwner} from './service/config.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'clean-ng-cli813';

    subscription = Subscription.EMPTY;

    data: IOwner[];
    error = false;

    constructor(private configService: ConfigService) {
    }

    ngOnInit() {
        this.subscription = this.configService.getGreeting().subscribe(
            (data: any) => (this.data = data),
            (error) => {
                error = true;
                console.error(error);
            }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
