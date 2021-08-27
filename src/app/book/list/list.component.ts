import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../model/book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 books: Book[] = [];
  constructor(private bookService: BookService ) { }

  ngOnInit() {
  }

  getAll() {
    this.bookService.getAll().subscribe(books => {
      this.books = books;
    })
  }
}
