import { DashboardService } from './../services/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
    constructor(private service: DashboardService) {

    }
    ngOnInit() {
      this.service.getData().subscribe(
        (data)=>{
          console.log(data);
        }
      )
    }
}

