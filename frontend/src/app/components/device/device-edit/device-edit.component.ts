import { environment } from './../../../../environments/environment.prod';
import { CategoryService } from 'src/app/services/category.service';
import { DeviceService } from 'src/app/services/device.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from './../../../models/category.model';
import { Device } from './../../../models/device.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.css']
})
export class DeviceEditComponent implements OnInit {
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
    private categoryService:CategoryService,
    private activedRouter:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.categoryService.list().subscribe((response)=>{
      console.log(response)
      if(response.statusCode==200){
        this.avaliableCategories=response.data
      }else{ 
        console.log('nao entrou')
      }
    })


    let deviceId=this.activedRouter.snapshot.params['id']
    this.modelService.getOne(`http://${environment.API_DOMAIN}/device/${deviceId}`).subscribe(
      (response)=>{
        if(response.statusCode==200){
          this.device=response.data
        }
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  cancelOperation(){
    this.route.navigate(['/device'])
  }

  updateDevice(){
    this.modelService.create(this.device).subscribe((response)=>{
      //TODO: Verify statuscode and do respective flow
      console.log('device created:',response)
      this.route.navigate(['/device'])
    })
  }
  changeCategory(value:number) {
    this.device.categoryId=value
  }
}
