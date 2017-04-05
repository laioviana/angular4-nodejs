import { UserService } from './../core/service/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: string;
  private password: string;

  constructor(private router:Router,
              private userService:UserService) { }

  ngOnInit() {
  }

  validarLogin(){
    if(this.username && this.password){
      if(this.username == 'timoteojorge@gmail.com' && this.password == '123456'){
        this.userService.loggedUser = "TIMOTEO";
        this.router.navigate(['home']);
      }else{
        console.log('Login Inválido');
      }
    }
  }


}
