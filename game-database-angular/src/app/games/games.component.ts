import { Component, OnInit } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Game[] = [
    {
      title: 'A Short Hike',
      platform: 'PC',
      completed_date: '2020-09-03',
      time_taken: '1:00:00'
    },
    {
      title: 'Astral Chain',
      platform: 'Switch',
      completed_date: '2019-09-11',
      time_taken: '17:24:19'

    },
    {
      title: 'The Last of Us',
      platform: 'PlayStation 3',
      completed_date: '2020-08-01',
      time_taken: '20:00:00'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
