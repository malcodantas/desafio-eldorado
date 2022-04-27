import { Category } from './../../../models/category.model';
import { Device } from './../../../models/device.model';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { DeviceService } from 'src/app/services/device.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.css']
})
export class DeviceCreateComponent implements OnInit {
  device:Device={
    name:'',
    color:'',
    partNumber:null,
    categoryId:null
  }
  avaliableCategories:Category[] | undefined =[]

  constructor(
    private route:Router,
    private modelService:DeviceService,
    private categoryService:CategoryService
    ) { }

  ngOnInit(): void {
    this.categoryService.list().subscribe((response)=>{
      if(response.statusCode==200){
        this.avaliableCategories=response.data
        console.log(this.avaliableCategories)
      }else{ 
        console.log('nao entrou')
      }
    })
  }
  cancelOperation(){
    this.route.navigate(['/device'])
  }

  createDevice(){
    this.modelService.create(this.device).subscribe((response)=>{
      //TODO: Verify statuscode and do respective flow
      console.log('device created:',response)
      this.route.navigate(['/device'])
    })
  }
}
