import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksHttpService {
  // baseurl for the javalin book crud project
  //baseUrl: string = "http://localhost:7474/books";

  // baseurl for the spring rest book crud project
  //baseUrl: string = "http://localhost:5555/api/books";
  
  // baseurl for the spring rest book crud project in ec2
  baseUrl: string = "http://ec2-52-90-78-48.compute-1.amazonaws.com:8484/api/books";
  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]>{
   // here consume the endpoint which fetched all the books from the data base 
   // we need HttpClient api to consume the endpoint, 
   //so lets inject HttpClient in the constructor

   // the get methods returns an Observable which is returned back to the caller
    return this.http.get<Book[]>(this.baseUrl);
  }

  deleteBook(bookId: number): Observable<boolean>{
    return this.http.delete<boolean>(this.baseUrl+'/'+bookId);
  }

  addBook(newBook: Book): Observable<Book>{
    return this.http.post<Book>(this.baseUrl, newBook);
  }

  getABook(bookId: any): Observable<Book>{
    return this.http.get<Book>(this.baseUrl+'/'+bookId);
  }

  updateBook(sentBook: Book): Observable<Book>{
    return this.http.put<Book>(this.baseUrl, sentBook);
  }
}
