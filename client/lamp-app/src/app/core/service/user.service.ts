import { LocalStorageService } from './local-storage.service';
import { Injectable, Optional } from '@angular/core';

export class UserServiceConfig {
  userName = 'Philip Marlowe';
}

@Injectable()
export class UserService {
  private _userName = 'Sherlock Holmes';
  
  constructor(private localStorageService:LocalStorageService) {
   
  }

  get userName() {
    return this._userName;
  }

  set loggedUser(loggedUser){
    if(this.loggedUser){
      this.localStorageService.remove('loggedUser');
    }
    this.localStorageService.set('loggedUser',loggedUser);
  }
  get loggedUser(){
    return this.localStorageService.get('loggedUser');
  }

}
