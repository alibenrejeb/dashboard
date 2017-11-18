import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Place } from './place';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class PlacesService {
    private uri = 'http://rest-api.dev:8000/s-api/places';

    constructor(    private http: Http,
                    private authenticationService: AuthService
                ) {}
    
    getPlaces(): Observable<any[]> {
        const headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        return this.http.get(this.uri, {headers: headers})
            .map(res => <Place[]> res.json())
            .catch(this.handelError);
    }

    private handelError(error: Response) {
        return Observable.throw(error.json().errors || 'server error');
    }
}