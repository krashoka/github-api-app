import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(public http: HttpClient) {}

  // getUsers function takes username as argument and return user details
  getUsers(username: string) {
    return this.http.get(`https://api.github.com/users/${username}`);
  }

  // getRepository function takes username as argument and return user repository
  getRepository(username: string) {
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }
}
