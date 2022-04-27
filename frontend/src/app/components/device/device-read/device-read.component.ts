import { DeviceService } from './../../../services/device.service';
import { Device } from './../../../models/device.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-read',
  templateUrl: './device-read.component.html',
  styleUrls: ['./device-read.component.css']
})
export class DeviceReadComponent implements OnInit {
  devices:any //Array<Device> | undefined =[]
  constructor(private modelService:DeviceService) { }

  ngOnInit(): void {
    this.modelService.list().subscribe(response=>{
      if(response.statusCode==200){
        this.devices=response.data
        console.log(this.devices)
      }else{ 
        console.log('nao entrou')
      }
    })
  }

  
}
