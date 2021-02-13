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

  constructor(private fixtureService:FixturesService) {
    this.fixtures = [];
   }

  ngOnInit(): void {
     this.fixtureService.getFixtures().subscribe(fixtures => {
      this.fixtures = fixtures;
    });
  }

}
