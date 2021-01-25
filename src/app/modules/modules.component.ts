import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery' 
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { CommonService } from '../service/common.service';
import { LeftPanelService } from '../service/left-panel.service';
import { SlideInOutAnimation } from './menu-animation';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css'],
   animations: [SlideInOutAnimation]
})
export class ModulesComponent implements OnInit, OnDestroy {

  menus: any[] = [];
  openPanel = true; 
  $panelMode: Observable<boolean>;
  // animationState = 'in';
  selectedIndex: number;
  addNumber = 1;
  $number: Subscription;
  $pageSUb: Subscription;
  pageRecived: string;
  pageD: any;
  men: any = {id: 4, pageName: "what-is-a-landing-zone"};

  constructor(
    private _leftPanelSer: LeftPanelService,
    private _router: Router,
    private _commonService: CommonService
  ) { }

  

  ngOnInit(): void {

  

    this.$panelMode =  this._leftPanelSer.panelMode;

    this.$panelMode.subscribe(mode => this.openPanel = mode);   

    this._leftPanelSer.getMenuList().subscribe((data: any)=> {
      this.menus = data.menu;
    });

    // this.$pageSUb =  this._commonService.$pageName.subscribe( page => {
    //   this.pageRecived = page;
     
    //   this.menus.filter(m => m.subMenu.every(s => {
        
    //     if(s.link == this.pageRecived) {
    //       s.checked = true;
    //       console.log("page", this.menus)
    //     }
    //   }));
    //  });

    this.$pageSUb =  this._commonService.$pageName.pipe(map((value)=>{
      console.log(value);
      const id = value;
     
      console.log(id);
    })).subscribe( page => {
     
    //  this.pageD = page;

    //   console.log(this.menus[0].link)
     
     });


  }

  onClickMenuTitle(item: number) { 
   // console.log(item);
    this.menus.map((tog) => {
      tog.toggle = false;
    })
    //this.menus[item].toggle = !this.menus[item].toggle;
    this.menus[item].toggle = true;  
  
    
  }

  onClickPanel() {
    this.openPanel = !this.openPanel;
    this._leftPanelSer.togglePanel(this.openPanel);
    
  }

  checkClick(event, detail, subMenuI, i) {
   // console.log(detail.checked);
    // this.menus.map((menu) => { 
    //   menu.checked = true;
    //   console.log(menu.checked)
    // });

    if(this.menus[i].subMenu[subMenuI].checked == false) {

      this.addNumber+1;
    this._leftPanelSer.increaseCourse(this.addNumber++);  
    this.$number = this._leftPanelSer.coursePercentage.subscribe(val => {
      //console.log(val)
    });

    }
  

    this.menus[i].subMenu[subMenuI].checked = true;
    console.log(this.menus[i].subMenu[subMenuI]); 
   // this.selectedIndex = index;
  }

  private _increaseCourse() {
    
  }


  ngOnDestroy() {
    //this.$number.unsubscribe();
    //this.$pageSUb.unsubscribe();
  }


  }

