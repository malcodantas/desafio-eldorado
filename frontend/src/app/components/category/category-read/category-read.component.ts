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
  constructor(private modelService:CategoryService) { }

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

}
