import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  updateBook: Book = {
    id: 0,
    bookTitle: '',
    bookAuthor: '',
    bookGenre: '',
    bookCost: 0,
    bookImage: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

  updateBookInfo(){

  }
}
