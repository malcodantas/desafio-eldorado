import { Device } from './../../../models/device.model';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { DeviceService } from 'src/app/services/device.service';

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
  constructor(private route:Router,private modelService:DeviceService) { }

  ngOnInit(): void {
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
