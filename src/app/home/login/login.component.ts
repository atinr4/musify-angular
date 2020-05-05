import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authEndpoint: string;
  clientId: string;
  redirectUri: string;
  spotifyscopes: string[];

  constructor() { }

  ngOnInit(): void {
    this.authEndpoint = environment.authEndpoint;
    this.clientId = environment.clientId;
    this.redirectUri = environment.redirectUri;
    this.spotifyscopes = environment.scopes;
  }

}
