import { Component, OnInit, Input } from '@angular/core';
import { Fixture } from 'src/app/models/Fixture';
import { Team } from 'src/app/models/Team';


@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {
  @Input() fixture!: Fixture;

    // temporary team names
    teamNames: Team[] = [
      {
        id: 1,
        name:'Arsenal',
        badge:'602.png'
      },
      {
        id: 2,
        name:'Aston Villa',
        badge:'603.png'
      },
      {
        id: 3,
        name:'Brighton',
        badge:'618.png'
      },
      {
        id: 4,
        name:'Burnley',
        badge:'622.png'
      },
      {
        id: 5,
        name:'Chelsea',
        badge:'630.png'
      },
      {
        id: 6,
        name:'Crystal Palace',
        badge:'642.png'
      },
      {
        id: 7,
        name:'Everton',
        badge:'650.png'
      },
      {
        id: 8,
        name:'Fulham',
        badge:'654.png'
      },
      {
        id: 9,
        name:'Leicester',
        badge:'673.png'
      },
      {
        id: 11,
        name:'Leeds',
        badge:'671.png'
      },
      {
        id: 12,
        name:'Liverpool',
        badge:'676.png'
      },
      {
        id: 13,
        name:'Manchester City',
        badge:'679.png'
      },
      {
        id: 14,
        name:'Manchester United',
        badge:'680.png'
      },
      {
        id: 15,
        name:'Newcastle',
        badge:'688.png'
      },
      {
        id: 16,
        name:'Sheffield United',
        badge:'708.png'
      },
      {
        id: 17,
        name:'Southampton',
        badge:'713.png'
      },
      {
        id: 18,
        name:'Spurs',
        badge:'728.png'
      },
      {
        id: 19,
        name:'West Brom',
        badge:'734.png'
      },
      {
        id: 20,
        name:'West Ham',
        badge:'735.png'
      },
      {
        id: 21,
        name:'Wolverhampton',
        badge:'740.png'
      }
    // 'Arsenal', 'Aston Villa', 'Brighton', 'Burnley', 'Chelsea', 'Crystal Palace', 'Everton', 'Fullham',  
    // 'Leicester', 'Leeds', 'Liverpool', 'Manchester City', 'Manchester United', 'Newcastle', 'Sheffield United',
    // 'Southampton', 'Spurs', 'West Brom', 'West Ham', 'Wolverhampton'
  ];


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
