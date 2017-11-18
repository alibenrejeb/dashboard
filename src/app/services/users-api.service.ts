import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersApiService {
  constructor(public http: Http) {
    console.log('Data service connected ...');
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(res => res.json());
  }

  getPlaces() {
    return this.http.get('http://rest-api.dev/api/places')
      .map(res=>res.json());
  }

  getUser() {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    return this.http.get('http://rest-api.dev/api/users/2', { headers: headers })
      .map(res=>res.json());
  }

}
