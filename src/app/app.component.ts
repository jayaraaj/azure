import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'azure';

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {

   



  //   $(function ($) {

  //     $(".sidebar-dropdown > a").click(function() {
  //   $(".sidebar-submenu").slideUp(200);
  //   if (
  //     $(this)
  //       .parent()
  //       .hasClass("active")
  //   ) {
  //     $(".sidebar-dropdown").removeClass("active");
  //     $(this)
  //       .parent()
  //       .removeClass("active");
  //   } else {
  //     $(".sidebar-dropdown").removeClass("active");
  //     $(this)
  //       .next(".sidebar-submenu")
  //       .slideDown(200);
  //     $(this)
  //       .parent()
  //       .addClass("active");
  //   }
  // });
  
  // $("#close-sidebar").click(function() {
  //   $(".page-wrapper").removeClass("toggled");
  // });
  // $("#show-sidebar").click(function() {
  //   $(".page-wrapper").addClass("toggled");
  // });
        
  //       $("#main-menu").click(function(e){
  //         e.preventDefault;
  //         console.log("asd");
  //     $(".page-wrapper").toggleClass("toggled");
  //   });
  
  
     
     
  // });
  }
}
