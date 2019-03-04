import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { AuthService } from '../services/auth.service';
import { SharedService } from '../shared/sharedservice';
import { MenuService } from './menu.service';
import { IMenu } from '../models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {

  public menus: IMenu[];

  constructor(private auth: AuthService, private shared: SharedService, private menusvc: MenuService) {
    this.shared.title = "Dashboard"
  }

  logout() {
    this.auth.logout();
  }

  ngAfterViewInit() {

  }

  ngOnInit() {
    this.getMenus();
    var self = this;
    // $('.nav-item, .nav-link, .parentNav, .nav-link, .collapsed').on('click', function (e) {
    //   self.shared.title = e.target.text;
    //   console.log(e);
    // })

    // Toggle the side navigation
    $('#sidebarToggle, #sidebarToggleTop').on('click', function (e) {
      $('body').toggleClass('sidebar-toggled');
      $('.sidebar').toggleClass('toggled');
      if ($('.sidebar').hasClass('toggled')) {
        $('.sidebar .collapse').collapse('hide');
      }
    });

    // Close any open menu accordions when window is resized below 768px
    $(window).resize(function () {
      if ($(window).width() < 768) {
        $('.sidebar .collapse').collapse('hide');
      };
    });

    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
      if ($(window).width() > 768) {
        var e0 = e.originalEvent,
          delta = e0.wheelDelta || -e0.detail;
        this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
      }
    });

    // Scroll to top button appear
    $(document).on('scroll', function () {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });

    // Smooth scrolling using jQuery easing
    $(document).on('click', 'a.scroll-to-top', function (e) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top)
      }, 1000, 'easeInOutExpo');
      e.preventDefault();
    });
  }

  getMenus(): IMenu[] {
    return this.menusvc.getMenus().subscribe(data => this.menus = data)[0];
  }

  pageHeader(header: any){
    this.shared.title = header;
  }
}
