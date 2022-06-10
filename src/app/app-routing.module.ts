import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { EditHttpBookComponent } from './books/edit-http-book/edit-http-book.component';
import { ViewBooksComponent } from './books/view-books/view-books.component';
import { ViewHttpBooksComponent } from './books/view-http-books/view-http-books.component';
import { CounterComponent } from './counter/counter.component';
import { DisplayComponent } from './display/display.component';
import { ListFruitsComponent } from './list-fruits/list-fruits.component';
import { AuthenticationGuard } from './users/authentication.guard';
import { LoginComponent } from './users/login/login.component';
import { LogoutComponent } from './users/logout/logout.component';

// specify the route paths of the components here
const routes: Routes = [
  { path: "display", component: DisplayComponent, canActivate:[AuthenticationGuard] },
  { path: "counter", component: CounterComponent, canActivate:[AuthenticationGuard] },
  { path: "list-fruits", component: ListFruitsComponent, canActivate:[AuthenticationGuard] },
  { path: "view-books", component: ViewBooksComponent, canActivate:[AuthenticationGuard] },
  { path: "edit-book/:bid", component: EditBookComponent, canActivate:[AuthenticationGuard] },
  { path: "view-http-books", component: ViewHttpBooksComponent, canActivate:[AuthenticationGuard] },
  { path: "edit-http-book/:bid", component: EditHttpBookComponent, canActivate:[AuthenticationGuard] },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
