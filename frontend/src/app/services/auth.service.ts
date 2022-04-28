import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { auth } from '../models/auth.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl='http://localhost:3000/login'

  constructor(
    private router:Router,
    private http:HttpClient,
    private snackBar:MatSnackBar
    ) { }
  
  login(user:User):Observable<auth>{
    return this.http.post(this.baseUrl,user)
  }
  showMessage(msg:string):void{
    this.snackBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }

}
