import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { ListFruitsComponent } from './list-fruits/list-fruits.component';
import { HeaderComponent } from './header/header.component';
import { ViewBooksComponent } from './books/view-books/view-books.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewHttpBooksComponent } from './books/view-http-books/view-http-books.component';
import { EditHttpBookComponent } from './books/edit-http-book/edit-http-book.component';
import { LoginComponent } from './users/login/login.component';
import { LogoutComponent } from './users/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CounterComponent,
    ListFruitsComponent,
    HeaderComponent,
    ViewBooksComponent,
    EditBookComponent,
    ViewHttpBooksComponent,
    EditHttpBookComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
