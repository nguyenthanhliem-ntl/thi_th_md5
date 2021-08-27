import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PlayService} from '../../service/play.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  playForm: FormGroup = new FormGroup({
    name: new FormControl(),
    champ: new FormControl(),
    kda: new FormControl(),
    des: new FormControl(),
  });
  constructor(private playService: PlayService) { }

  ngOnInit() {
  }

  submit() {
    const  play = this.playForm.value;
    this.playService.saveBook(play).subscribe(() => {
      this.playForm.reset();
      console.log('ok');
    }, e => {
      console.log(e);
    })
  }

}
