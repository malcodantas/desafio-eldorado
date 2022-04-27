import { apiResponse } from './../models/apiRespose.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  baseUrl='http://localhost:3000/devices'

  constructor(private snackBar:MatSnackBar,private http:HttpClient) { }

  list():Observable<apiResponse>{
    return this.http.get<apiResponse>(this.baseUrl)
  }
}
