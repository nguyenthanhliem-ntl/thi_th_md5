import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  });
  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  submit() {
    const  book = this.bookForm.value;
    this.bookService.saveBook(book).subscribe(() => {
      this.bookForm.reset();
      console.log('ok');
    }, e => {
      console.log(e);
    })
  }

}
