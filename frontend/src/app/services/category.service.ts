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
  baseUrl='http://localhost:3000/category'
  constructor(private snackBar:MatSnackBar,private http:HttpClient) { }
  
  list():Observable<apiResponse>{
    return this.http.get<apiResponse>(this.baseUrl)
  }
  
  create(category:Category):Observable<Category>{
    return this.http.post<Category>(this.baseUrl,category)
  }
}
