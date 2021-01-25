import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 
import { LeftPanelService } from '../service/left-panel.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  constructor(
    private _leftPanelService: LeftPanelService
  ) { }

  ngOnInit(): void {

  //   console.log("adasd");

  //   this._leftPanelService.getMenuList().subscribe( (data:any) => {
  //     console.log(data);
  //   })
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
