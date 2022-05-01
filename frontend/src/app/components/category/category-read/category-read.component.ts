import { Router } from '@angular/router';
import { Category } from './../../../models/category.model';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css']
})
export class CategoryReadComponent implements OnInit {
  categories:any//Array<Category> | undefined =[]
  constructor(private modelService:CategoryService,private router:Router) { }

  ngOnInit(): void {
    this.modelService.list().subscribe(response=>{
      if(response.statusCode==200){
        this.categories=response.data
        console.log(this.categories)
      }else{ 
        console.log('nao entrou')
      }
    })
  }

  deleteCategory(endpoint:string,id:number){
    this.modelService.delete(endpoint).subscribe(
      (response) =>{
        if(response.statusCode==204 || response.statusCode==200){
          this.modelService.showMessage('Category excluded.',2500)
          this.categories=this.categories.filter((category: { id: number; })=>{
            return category.id!==id
          })
        }
      },
      (error)=>{
          this.modelService.showMessage('Cannot exclude this categoy. Theres some devices in it.',4500)
      }
      ,
    )
  }
  updateCategory(id:number){
    this.router.navigate(['category',`${id}`,'edit'])
  }
}
