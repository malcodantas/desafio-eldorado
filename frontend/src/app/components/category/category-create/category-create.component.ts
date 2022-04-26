import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cancelOperation(){
    this.router.navigate(['/category'])
  }
}
