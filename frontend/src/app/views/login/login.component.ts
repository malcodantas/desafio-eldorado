import { apiResponse } from './../../models/apiRespose.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User={username:'malco',password:'123456'}
  constructor(private router:Router, private authService:AuthService) { }
  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.login(this.user).subscribe(
      (response)=>{
        if(response.token){
          localStorage.setItem('token', response.token);
          this.router.navigate(['/home'])
        }
      },
      (error)=>{
        console.log(error.error);
        this.authService.showMessage('Username or password dont match')
      }
    
    )

  }
}
