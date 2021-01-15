import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {ConfigService} from './service/config.service';
import {OwnersListComponent} from './owner/owners-list.component';

@NgModule({
    declarations: [
        OwnersListComponent,
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
    ],
    providers: [ConfigService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
