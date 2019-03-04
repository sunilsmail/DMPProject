import { DashboardService } from './../services/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  books: any;
  user: any;
  users: any;
  constructor(private service: DashboardService) {
    this.user = {
      name: 'Sunil',
      email: 'Sunil@gmail.com',
      auth: 'admin',
      enabled: true
    }
  }
  ngOnInit() {
    this.service.getData().subscribe(
      (data) => {
        // console.log(data);
      }
    )
  }
}

