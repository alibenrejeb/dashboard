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
    private uri = 'http://127.0.0.1:8000/api/places';

    constructor(    private http: Http,
                    private authenticationService: AuthService
                ) {}
    
    getPlaces(): Observable<any[]> {
        const headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        return this.http.get(this.uri, {headers: headers})
            .map(res => <Place[]> res.json())
            .catch(this.handelError);
    }

    /*this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
      //this.posts = posts;
    });*/

    getPlacesJson(): Observable<any[]> {
        const headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        return this.http.get(this.uri, {headers: headers})
            .map(res => {
                res.json();
                console.log(res);
            })
            .catch(this.handelError);
    }

    private handelError(error: Response) {
        return Observable.throw(error.json().errors || 'server error');
    }
}