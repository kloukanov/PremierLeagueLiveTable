import { Component, OnInit } from '@angular/core';
import { Fixture, DB  } from '../../models/Fixture';
import { Team } from 'src/app/models/Team';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  databaseObj:DB = new DB();
  teamNames:Team[] = this.databaseObj.teamNames;

  constructor() { }

  ngOnInit(): void {
  }

}
