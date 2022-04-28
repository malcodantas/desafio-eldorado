import { Device } from './../models/device.model';
import { apiResponse } from './../models/apiRespose.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  baseUrl='http://localhost:3000/device'

  constructor(private snackBar:MatSnackBar,private http:HttpClient) { }

  list():Observable<apiResponse>{
    return this.http.get<apiResponse>(this.baseUrl)
  }
  create(device:Device):Observable<Device>{
    return this.http.post<Device>(this.baseUrl,device)
  }
  delete(endpoint:string):Observable<any>{
    return this.http.delete(endpoint)
  }
  showMessage(msg:string,time:number=3000):void{
    this.snackBar.open(msg,'X',{
      duration:time,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }
}
