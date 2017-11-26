import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
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

    private handelError(error: Response) {
        return Observable.throw(error.json().errors || 'server error');
    }            
}
