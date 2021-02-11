import { Component, OnInit } from '@angular/core';
import { Fixture } from '../../models/Fixture';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {

  fixtures: Fixture[];

  constructor() {
    this.fixtures = [];
   }

  ngOnInit(): void {
    this.fixtures = [
      {
        id: 1,
        team1: "Manchester United",
        team2: "Chelsea",
        t1Score: 2,
        t2Score: 0,
        time:"15:00" 
      },
      {
        id: 2,
        team1: "Everton",
        team2: "Crystal Palice",
        t1Score: 1,
        t2Score: 1,
        time:"10:00" 
      },
      {
        id: 3,
        team1: "Liverpool",
        team2: "Leeds United",
        t1Score: 4,
        t2Score: 3,
        time:"7:30" 
      }
    ];
  }

}
