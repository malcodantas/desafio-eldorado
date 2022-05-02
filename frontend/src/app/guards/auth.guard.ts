import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isAuthenticated: boolean = true;

  constructor(private router:Router) { }

  canActivate() {
    const token = localStorage.getItem('token');
    if(token){
      return true
    }else{
      this.router.navigate([''])
      return false
    }
  }

  setAuth(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
  }
}