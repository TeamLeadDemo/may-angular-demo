import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {

// here we are creating a property testBook of type Book
// this enforces the Book structure for the testBook property
// BookPojo pojo = new BookPojo();
// we will not be using testBook in the component
testBook: Book = {
    id: 101,
    bookTitle: 'Harry Potter and the Order of Phoenix',
    bookAuthor: 'J.K.Rowling',
    bookGenre: 'Fiction',
    bookCost: 100,
    bookImage: 'https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
};

allBooks: Book[] = [
  {
    id: 101,
    bookTitle: 'Harry Potter and the Order of Phoenix',
    bookAuthor: 'J.K.Rowling',
    bookGenre: 'Fiction',
    bookCost: 100,
    bookImage: 'https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
  },
  {
    id: 102,
    bookTitle: 'Harry Potter and the Sorcerers Stone',
    bookAuthor: 'J.K.Rowling',
    bookGenre: 'Fiction',
    bookCost: 150,
    bookImage: 'https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
    id: 103,
    bookTitle: 'Harry Potter and the Deathly Hallows',
    bookAuthor: 'J.K.Rowling',
    bookGenre: 'Fiction',
    bookCost: 170,
    bookImage: 'https://images.unsplash.com/photo-1611676279444-5577698aa13c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
