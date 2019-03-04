import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private auth: AuthService){

  }
  logout(){
    this.auth.logout();
  }
  ngOnInit() {
   // $('#side-menu').metisMenu();
    $(window).bind("load resize", function () {
      var topOffset = 50;
      var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
      if (width < 768) {
        $('div.navbar-collapse').addClass('collapse');
        topOffset = 100; // 2-row-menu
      } else {
        $('div.navbar-collapse').removeClass('collapse');
      }

      var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
      height = height - topOffset;
      if (height < 1) height = 1;
      if (height > topOffset) {
        $("#page-wrapper").css("min-height", (height) + "px");
      }
    });
    var url = window.location;
    var element = $('ul.nav a').filter(function () {
      return this.href == url;
    }).addClass('active').parent();

    while (true) {
      if (element.is('li')) {
        element = element.parent().addClass('in').parent();
      } else {
        break;
      }
    }

    $("#sidebarToggle").on('click', function (e) {
      $("#sidebar").toggle();
      if ($("#sidebar").is(":visible")) {
        $("#page-wrapper").css("margin-left", "250px");
      } else {
        $("#page-wrapper").css("margin-left", "0");
      }
    });
  }
}