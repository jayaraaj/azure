import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  $clikedCourse:Subscription;
  href: string;
  constructor(
    private _leftPanelSer: LeftPanelService,
    private _router: Router,
    private _commonService: CommonService,
    private route: ActivatedRoute
  ) { }

  

  ngOnInit(): void {
    console.log(sessionStorage.length);

   this.href = this._router.url;
   var pathname = this.href.split("/", 3); 

    const currentPageModule = pathname.slice(-1)[0];
    let convertToNumber = parseInt(currentPageModule);
    convertToNumber --;
   // console.log();
  
    //this.menus[0].toggle = true;

    this.$panelMode =  this._leftPanelSer.panelMode;

    this.$panelMode.subscribe(mode => this.openPanel = mode);   

    this._leftPanelSer.getMenuList().subscribe((data: any)=> {
      this.menus = data.menu;
      
      this.menus[convertToNumber].toggle = true;

      this.menus.forEach((element, i) => {
        element.subMenu.forEach((ele, index) => {
          let modifiedLink = ele.link+i; 
          if(sessionStorage.getItem(modifiedLink)) {
            this.menus[i].subMenu[index].checked = true;
            this._leftPanelSer.increaseCourse(sessionStorage.length);
          }       
          
        });
      });

    });


    this.$clikedCourse = this._leftPanelSer.courseLink.subscribe((data:any) => {
      
     
      if(data != null){
        const tt = data[0];
        let con = tt.modNo-1;
        this.menus.forEach((ele, i)=> {
          this.menus[i].toggle = false;
        });
        this.menus[con].toggle = true;
        
        let indexd = this.menus[con].subMenu.findIndex(x => x.link === tt.link);
        if(indexd == -1) {
          
        }else{
          this.menus[con].subMenu[indexd].checked = true;
          this._leftPanelSer.increaseCourse(sessionStorage.length);
        }   

      

      }
      

   });

    


  }

  checkClick(event, detail, subMenuI, i) {
    this.menus[i].subMenu[subMenuI].checked = true;
    this._leftPanelSer.increaseCourse(sessionStorage.length);
    sessionStorage.setItem(detail.link+i, i);
   
  }

  onClickMenuTitle(item: number, menu) { 
    const clickedTopMenu = menu.link+item; 
    console.log(menu.link+item);
    if(sessionStorage.getItem(clickedTopMenu)) {
    }else {
      sessionStorage.setItem(clickedTopMenu, String(item));
      this._leftPanelSer.increaseCourse(sessionStorage.length);
    }
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



  private _increaseCourse() {
    
  }


  ngOnDestroy() {
    //this.$number.unsubscribe();
    //this.$pageSUb.unsubscribe();
    this.$clikedCourse.unsubscribe();
  }


  }

