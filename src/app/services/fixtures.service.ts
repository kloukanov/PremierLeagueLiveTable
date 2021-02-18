import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fixture } from "../models/Fixture";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FixturesService {

  eventID:number = 25;

  // glacial-castle is a CORS API hosted on heroku. This API enables cross-origin requests to anywhere.
  fixturesURL: string = 'https://glacial-castle-96058.herokuapp.com/https://fantasy.premierleague.com/api/fixtures/?event=';
  interval:any;
  endpointURL:string;


  constructor(private http:HttpClient) { 
    //this.interval = setInterval(this.getFixtures, 5000);
    this.endpointURL = this.fixturesURL + this.eventID;
    this.interval = setInterval(() => this.getFixtures(), 5000);
  }

  getFixtures():Observable<Fixture[]>{
    return this.http.get<Fixture[]>(this.endpointURL);
  }

  getNextWeekFixtures():void{
    this.endpointURL = this.fixturesURL + (++this.eventID);
  }

  getPreviousWeekFixtures():void{
    this.endpointURL = this.fixturesURL + (--this.eventID);
  }

}
