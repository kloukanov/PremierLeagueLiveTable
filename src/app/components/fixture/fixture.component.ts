import { Component, OnInit, Input } from '@angular/core';
import { Fixture } from 'src/app/models/Fixture';


@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {
  @Input() fixture!: Fixture;


  constructor() { 
  }

  ngOnInit(): void {
  }

}
