import { Component, OnInit } from '@angular/core';
import {Players} from '../../model/players';
import {PlayService} from '../../service/play.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 plays: Players[] = [];
  constructor(private playService: PlayService ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.playService.getAll().subscribe(plays => {
      this.plays = plays;
    })
  }
}
