import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  bookForm: FormGroup ;
  id: number;
  constructor(private bookService: BookService,
              private activatedRouter: ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getBook(this.id);
    });
  }

  ngOnInit() {
  }

  getBook(id: number) {
    return this.bookService.findById(id).subscribe(book => {
      this.bookForm = new FormGroup({
        title: new FormControl(book.title),
        author: new FormControl(book.author),
        description: new FormControl(book.description)
      });
    });
  }

  updateBook(id: number) {
    const book  = this.bookForm.value;
    this.bookService.updateBook(id, book).subscribe(() => {
      console.log('edit');
    }, e => {
      console.log(e);
    });

  }
}
