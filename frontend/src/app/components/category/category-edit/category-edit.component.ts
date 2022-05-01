import { environment } from './../../../../environments/environment.prod';
import { Category } from './../../../models/category.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  category:Category={name:''} 
  constructor(
    private router:Router,
    private activeRouter:ActivatedRoute,
    private modelService:CategoryService
    ) { }

  ngOnInit(): void {
    let categoryId=this.activeRouter.snapshot.params['id']
    this.modelService.getOne(`http://${environment.API_DOMAIN}/category/${categoryId}`).subscribe(
      (response)=>{
        if(response.statusCode==200){
          this.category=response.data
        }
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  cancelOperation(){
    this.router.navigate(['/category'])
  }
  
  updateCategory(category:Category){
    this.modelService.update(category.links.endpoint,category).subscribe((response)=>{
      this.router.navigate(['/category'])
    })
    
  }

}
