import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {TransactionsComponent} from './transactions/transactions.component';
import {NewsComponent} from './news/news.component';
import {EventsComponent} from './events/events.component';
import { AddEventFormComponent } from './add-event-form/add-event-form.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        TransactionsComponent,
        NewsComponent,
        EventsComponent,
        AddEventFormComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
