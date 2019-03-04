import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-layout',
  template: `
   <app-menu></app-menu>
   <div id="page-wrapper">
   <router-outlet></router-outlet>
   </div>
    
  `,
  styles: []
})
export class HomeLayoutComponent { 

  ngOnInit() {
  //  $('#side-menu').metisMenu();
  }
}