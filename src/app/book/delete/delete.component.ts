import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {PlayService} from '../../service/play.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  playForm: FormGroup;
  id: number;

  constructor(private playService: PlayService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getPlay(this.id);
    });
  }

  ngOnInit() {
  }

  getPlay(id: number) {
    return this.playService.findById(id).subscribe(play => {
      this.playForm = new FormGroup({
        name: new FormControl(play.name),
      });
    });
  }

  deletePlay(id: number) {
    this.playService.deletePlay(id).subscribe(() => {
      this.router.navigate(['/play/list']);
    }, e => {
      console.log(e);
    });
  }
}
