import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  constructor(private service:AuthService) { }

  ngOnInit() {
  }

  onClick(name,pass){
    console.log(`username:${name},password:${pass}`);
    console.log('auth result is : '+this.service.loginTest(name,pass))
  }

  onClick2(){
    console.log('username:'+this.username+' password:'+this.password);
    console.log('auth result is : '+this.service.loginTest(this.username,this.password))
    
  }

  onSubmit(val){
    console.log(val);
    console.log('username:'+val.username+' password:'+val.password);
    console.log('auth result is : '+this.service.loginTest(val.username,val.password))
  }

}
