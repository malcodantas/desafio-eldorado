import { Router } from '@angular/router';
import { DeviceService } from './../../../services/device.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-read',
  templateUrl: './device-read.component.html',
  styleUrls: ['./device-read.component.css']
})
export class DeviceReadComponent implements OnInit {
  devices:any //Array<Device> | undefined =[]
  constructor(private modelService:DeviceService,private router:Router) { }

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
  deleteDevice(endpoint:string,id:number){
    this.modelService.delete(endpoint).subscribe(
      (response) =>{
        if(response.statusCode==204 || response.statusCode==200){
          this.modelService.showMessage('Device excluded.',2500)
          this.devices=this.devices.filter((device: { id: number; })=>{
            return device.id!==id
          })
        }
      },
      (error)=>{
          this.modelService.showMessage('Cannot exclude this device.',4500)
      } 
    )
  }

  updateDevice(id:number){
    this.router.navigate(['device',`${id}`,'edit'])
  }
}
