import { Component, OnInit } from '@angular/core';
import { Fixture } from '../../models/Fixture';
import { FixturesService } from '../../services/fixtures.service';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {

  fixtures: Fixture[];
  interval:any;

  constructor(private fixtureService:FixturesService) {
    this.fixtures = [];
    this.interval = setInterval(() => this.ngOnInit(), 5000);
   }

  ngOnInit(): void {
     this.fixtureService.getFixtures().subscribe(fixtures => {
      this.fixtures = fixtures;
    });
  }

  getNextWeekFixtures():void {
    this.fixtureService.getNextWeekFixtures();
  }

  getPreviousWeekFixtures():void {
    this.fixtureService.getPreviousWeekFixtures();
  }


}
