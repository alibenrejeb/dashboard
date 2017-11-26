import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Team } from './team';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class TeamsService {
    private uri = 'http://127.0.0.1:8000/api/teams';

    constructor(    private http: Http,
                private authenticationService: AuthService
            ) {}

    getTeams(): Observable<any[]> {
        const headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        return this.http.get(this.uri, {headers: headers})
            .map(res => <Team[]> res.json())
            .catch(this.handelError);
    }

    createTeam(team: Team): Observable<number> {
        const headers = new Headers();
        headers.append('content-type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
        return this.http.post(this.uri, this.hydrate(team), {headers: headers})
            .map(success => success.status)
            .catch(this.handelError);
    }

    updateTeam(team: Team): Observable<number> {
        //console.log(team);
        //console.log("id: " + team.id);
        const headers = new Headers();
        headers.append('content-type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
        //console.log(headers);
        //console.log(JSON.stringify(this.hydrate(team)));
        return this.http.put(this.uri + '/' + team.id, this.hydrate(team), {headers: headers})
            .map(success => success.status)
            .catch(this.handelError);
    }

    deleteTeamById(teamId: number): Observable<number> {
        const headers = new Headers();
        headers.append('content-type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
        return this.http.delete(this.uri + "/" + teamId, {headers: headers})
            .map(success => success.status)
            .catch(this.handelError);
    }

    private hydrate(team: Team) {
      return {
        "name" : team.name,
        "code" : team.code,
        "shortName" : team.short_name
      }
    }

    private handelError(error: Response) {
        return Observable.throw(error.json().errors || 'server error');
    }            
}
