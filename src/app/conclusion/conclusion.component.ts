import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../service/common.service';
import { LeftPanelService } from '../service/left-panel.service';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.css']
})
export class ConclusionComponent implements OnInit {

  
  openPanel = true; 
  $panelMode: Observable<boolean>;
  mod = false;
  mod1 = false;
  mod2 = false;
  mod3=false;
  mod4=false;
  mod5 = false;
  mod6 =false;

  
  moduleNumber: number = 10;
  pageLeft: string;
  pageRight: string;
  pageArray = [
  'test-report-analysis',
  'conclusion', 
  'we-have-accomplished',
  'jargons-ci-glossary', 
  'clean-up', 
];
copied = false;

lastPageIndex;
showLeftArrow: boolean = true;
showRightArrow : boolean = true;

  constructor(
    private _leftPanelSer: LeftPanelService,
    public router: Router,
    public route: ActivatedRoute,
    private _commonService: CommonService,
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {

     // sessionStorage.setItem(params.name, String(this.moduleNumber));
      // if (this.pageArray.indexOf(params.name) == 0) {
      //   this.showLeftArrow = false;
      //  }else{
      //    this.showLeftArrow = true;
      //  }
  
      //  this.lastPageIndex = this.pageArray.indexOf(params.name)+1;
     
  
      //  if (this.pageArray.length == this.lastPageIndex) {
      //    this.showRightArrow = false;
      //   }else{
      //     this.showRightArrow = true;
      //   }

      if(params.name == this.pageArray[1]) {
        this.mod = true;
        this.mod1 = false;
        this.mod2=false;
        this.mod3=false;
        this.pageLeft = this.pageArray[0];
        this.pageRight = this.pageArray[2];
      
      }
      else if(params.name == this.pageArray[2]) {
        this.mod = false;
        this.mod1 = true;
        this.mod2=false;
        this.mod3=false;
        this.pageLeft = this.pageArray[1];
        this.pageRight = this.pageArray[3];
       
      }
      else if(params.name == this.pageArray[3]) {
        this.mod = false;
        this.mod1 = false;
        this.mod2=true;
        this.mod3=false;
        this.pageLeft = this.pageArray[2];
        this.pageRight = this.pageArray[4];
        this.showRightArrow = true;
       
      }
      else if(params.name == this.pageArray[4]) {
        
        this.showRightArrow = false;
        this.mod = false;
        this.mod1 = false;
        this.mod2=false;
        this.mod3 = true;
        this.pageLeft = this.pageArray[3];
        this.pageRight = this.pageArray[5];
      
      }
    
    });
    this.$panelMode =  this._leftPanelSer.panelMode;
    this.$panelMode.subscribe(mode => this.openPanel = mode );
  }

  onClickPanel() {
    console.log(this.openPanel);
    this.openPanel = !this.openPanel;
    this._leftPanelSer.togglePanel(this.openPanel);
    
  }

  copyText(text) {
    console.log('tad')
    this._commonService.copied(text);
    // this._commonService.$copied.subscribe( result => {
    //   this.copied = result;
    // });
  }

  moveLeft(){
   
    //console.log(this.moduleNumber, 'module');
    if(this.pageLeft == this.pageArray[0]){
      this.moduleNumber = 9;
    }else {
      this.moduleNumber = 10;
    }
    this._leftPanelSer.clickedCourseLink(this.pageLeft, this.moduleNumber);
    this.router.navigate(['/modules', this.moduleNumber, this.pageLeft]);
    
  }

  moveRight() {
      
    if(this.pageRight == this.pageArray[5]){
      this.moduleNumber = 10;
    }else {
      this.moduleNumber = 10;
    }
    //console.log(this.moduleNumber, 'module for right');
    this._leftPanelSer.clickedCourseLink(this.pageRight, this.moduleNumber);
    this.router.navigate(['/modules', this.moduleNumber, this.pageRight]);
  }

}
