import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userIsAuthenticated = false;
  
  get userIsAuthenticated(){
    return this._userIsAuthenticated;
  }
  constructor() { }

  login(){
    this._userIsAuthenticated = true;
    console.log('User logged in');
  }
  logout(){
    this._userIsAuthenticated = false;
    console.log('User logged out');
  }
}
