import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PlayService} from '../../service/play.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  playForm: FormGroup ;
  id: number;
  constructor(private playService: PlayService,
              private activatedRouter: ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getPlay(this.id);
    });
  }

  ngOnInit() {
  }

  getPlay(id: number) {
    return this.playService.findById(id).subscribe(book => {
      this.playForm = new FormGroup({
        name: new FormControl(book.name),
        champ: new FormControl(book.champ),
        kda: new FormControl(book.kda)
      });
    });
  }

  updatePlay(id: number) {
    const play  = this.playForm.value;
    this.playService.updatePlay(id, play).subscribe(() => {
      console.log('edit');
    }, e => {
      console.log(e);
    });

  }
}
