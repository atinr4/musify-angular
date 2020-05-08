import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getCurrentUser(token) {
    return this.httpClient.get(`${environment.apiBaseUrl}/spotify-user-details?access_token=${token}`);
  }

  public getCategories(token) {
    return this.httpClient.get(`${environment.apiBaseUrl}/spotify-categories?access_token=${token}`);
  }

  public getLeaderBoard() {
    return this.httpClient.get(`${environment.apiBaseUrl}/leader-board`);
  }
}
