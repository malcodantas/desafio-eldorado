import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.css']
})
export class DeviceCreateComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  cancelOperation(){
    this.route.navigate(['/device'])
  }
}
