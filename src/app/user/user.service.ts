import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  size: number = 8;

  constructor(private http: Http) {}

  setSize(size: number) {
    this.size = size;
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

