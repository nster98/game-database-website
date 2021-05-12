import { Component, OnInit } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  game: Game = {
    id: 0,
    name: 'Bad Game Number 50',
    platform: 'PC'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
