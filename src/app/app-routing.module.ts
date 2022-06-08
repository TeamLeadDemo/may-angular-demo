import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewBooksComponent } from './books/view-books/view-books.component';
import { CounterComponent } from './counter/counter.component';
import { DisplayComponent } from './display/display.component';
import { ListFruitsComponent } from './list-fruits/list-fruits.component';

// specify the route paths of the components here
const routes: Routes = [
  { path: "display", component: DisplayComponent },
  { path: "counter", component: CounterComponent },
  { path: "list-fruits", component: ListFruitsComponent },
  { path: "view-books", component: ViewBooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
