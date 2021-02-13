import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fixture } from "../models/Fixture";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FixturesService {

  // glacial-castle is a CORS API hosted on heroku. This API enables cross-origin requests to anywhere.
  fixturesURL: string = 'https://glacial-castle-96058.herokuapp.com/https://fantasy.premierleague.com/api/fixtures/?event=24';


  constructor(private http:HttpClient) { }

  getFixtures():Observable<Fixture[]>{
    return this.http.get<Fixture[]>(this.fixturesURL);
  }


}
