import { identifierModuleUrl } from "@angular/compiler"
import { Team } from "../models/Team"

export class Fixture{
    // id:number | undefined;
    team_h!:string;
    team_a!:string;
    team_h_score:number | undefined;
    team_a_score:number | undefined;
    kickoff_time!:Date;   
    started!:boolean;
    finished!:boolean;
}

export class DB {
    teamNames: Team[];

    constructor(){
        this.teamNames = [
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
              name:'Manchester Utd',
              badge:'680.png'
            },
            {
              id: 15,
              name:'Newcastle',
              badge:'688.png'
            },
            {
              id: 16,
              name:'Sheffield Utd',
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
        ];
    }

}