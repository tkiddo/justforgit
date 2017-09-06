import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  loginTest(username:string,password:string):boolean{
    if(username==='admin' && password==='123456')
      return true;
    return false;
  }

}
