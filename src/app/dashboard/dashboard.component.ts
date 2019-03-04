import { DashboardService } from './../services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  books: any;
  user: any;
  users: any;
  constructor(private service: DashboardService, private svcService: ApiService) {
    this.user = {
      name: 'Sunil',
      email: 'Sunil@gmail.com',
      auth: 'admin',
      enabled: true
    }
  }
  ngOnInit() {


    this.svcService.getBooks().subscribe(data => {
      console.log(data);
      this.books = data;
    });
    this.svcService.postUser(this.user).subscribe((data) => {
       
      console.log(data);
      console.log(data);
    })
    this.svcService.getUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    });


    this.service.getData().subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
}

