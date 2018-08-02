import { Http } from '@angular/http';
import { Injectable } from '../../node_modules/@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

  size = 8;

  setSize(size) {
    this.size = size;
  }

  constructor(private http: Http) {
    this.http = http;
  }

  getUsers() {
    return this.http.get(`https://randomuser.me/api/?inc=gender,name,picture,location&results=${this.size}&nat=gb`).pipe(
      map(response => response.json())).pipe(
        map(response => response.results)).pipe(
          map(users => {
            return users.map(u => {
              return {
                name: u.name.first + ' ' + u.name.last,
                image: u.picture.large,
                geo: u.location.city + ' ' + u.location.state + ' ' + u.location.street
              };
            });
          })
        );
  }
}

