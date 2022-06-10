import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { EditHttpBookComponent } from './books/edit-http-book/edit-http-book.component';
import { ViewBooksComponent } from './books/view-books/view-books.component';
import { ViewHttpBooksComponent } from './books/view-http-books/view-http-books.component';
import { CounterComponent } from './counter/counter.component';
import { DisplayComponent } from './display/display.component';
import { ListFruitsComponent } from './list-fruits/list-fruits.component';

// specify the route paths of the components here
const routes: Routes = [
  { path: "display", component: DisplayComponent },
  { path: "counter", component: CounterComponent },
  { path: "list-fruits", component: ListFruitsComponent },
  { path: "view-books", component: ViewBooksComponent },
  { path: "edit-book/:bid", component: EditBookComponent },
  { path: "view-http-books", component: ViewHttpBooksComponent },
  { path: "edit-http-book/:bid", component: EditHttpBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
