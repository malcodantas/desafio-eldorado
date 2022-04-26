import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-crud',
  templateUrl: './device-crud.component.html',
  styleUrls: ['./device-crud.component.css']
})
export class DeviceCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  createDevice(){
    this.router.navigate(['/device/create'])
  }

}
