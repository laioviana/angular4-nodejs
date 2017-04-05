import { Injectable, Optional } from '@angular/core';

export class UserServiceConfig {
  userName = 'Philip Marlowe';
}

@Injectable()
export class UserService {
  private _userName = 'Sherlock Holmes';

	
  private _logged : boolean = false;

  constructor() {
  }

  get userName() {
    return this._userName;
  }
  public get logged(): boolean  {
		return this._logged;
	}

	public set logged(value: boolean ) {
		this._logged = value;
	}

}
