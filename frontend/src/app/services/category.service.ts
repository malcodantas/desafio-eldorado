import { environment } from './../../environments/environment.prod';
import { Category } from './../models/category.model';
import { apiResponse } from './../models/apiRespose.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl=`http://${environment.API_DOMAIN}/category`

  constructor(private snackBar:MatSnackBar,private http:HttpClient
    ) { }
  
  list():Observable<apiResponse>{
    return this.http.get<apiResponse>(this.baseUrl)
  }
  
  create(category:Category):Observable<Category>{
    return this.http.post<Category>(this.baseUrl,category)
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
