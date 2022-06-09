import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksHttpService {

  baseUrl: string = "http://localhost:7474/books";
  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]>{
   // here consume the endpoint which fetched all the books from the data base 
   // we need HttpClient api to consume the endpoint, 
   //so lets inject HttpClient in the constructor

   // the get methods returns an Observable which is returned back to the caller
  return this.http.get<Book[]>(this.baseUrl);
  }

  deleteBook(bookId: number): void{
    
  }

  addBook(newBook: Book): void{
    
  }

  getABook(bookId: any): void{
    
  }

  updateBook(sentBook: Book): void{
    
  }
}
