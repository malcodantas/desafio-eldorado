import { Category } from './../../../models/category.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  category:Category = {name:''}
  constructor(private router:Router,private modelService:CategoryService) { }

  ngOnInit(): void {
  }

  cancelOperation(){
    this.router.navigate(['/category'])
  }

  createCategory(){
    this.modelService.create(this.category).subscribe((response)=>{
        //TODO: Verify statuscode 
        console.log('category created:',response)
        this.router.navigate(['/category'])
    })
  }
}
