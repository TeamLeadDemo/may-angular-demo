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

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CounterComponent,
    ListFruitsComponent,
    HeaderComponent,
    ViewBooksComponent,
    EditBookComponent
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
