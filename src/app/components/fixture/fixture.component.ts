import { Component, OnInit, Input } from '@angular/core';
import { Fixture, DB } from 'src/app/models/Fixture';
import { Team } from 'src/app/models/Team';


@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {
  @Input() fixture!: Fixture;

    // temporary team names
    databaseObj:DB = new DB();
    teamNames:Team[] = this.databaseObj.teamNames;


  constructor() { 
  }

  ngOnInit(): void {
  }

  getNameAt(index:string):string{
    return this.teamNames[parseInt(index)-1].name;
  }

  getBadgeAt(index:string):string{
    return this.teamNames[parseInt(index)-1].badge;
  }
}
