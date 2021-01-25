import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
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
  'conclusion', 
  'access-cognizants-premium-thought-leadership-content',
  'jargons-ci-glossary', 
  'clean-up', 
];

lastPageIndex;
showLeftArrow: boolean = true;
showRightArrow : boolean = true;

  constructor(
    private _leftPanelSer: LeftPanelService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      if (this.pageArray.indexOf(params.name) == 0) {
        this.showLeftArrow = false;
       }else{
         this.showLeftArrow = true;
       }
  
       this.lastPageIndex = this.pageArray.indexOf(params.name)+1;
     
  
       if (this.pageArray.length == this.lastPageIndex) {
         this.showRightArrow = false;
        }else{
          this.showRightArrow = true;
        }

      if(params.name == this.pageArray[0]) {
        this.mod = true;
        this.mod1 = false;
        this.mod2=false;
        this.mod3=false;
        this.pageLeft = this.pageArray[0];
        this.pageRight = this.pageArray[1];
      
      }
      else if(params.name == this.pageArray[1]) {
        this.mod = false;
        this.mod1 = true;
        this.mod2=false;
        this.mod3=false;
        this.pageLeft = this.pageArray[0];
        this.pageRight = this.pageArray[2];
       
      }
      else if(params.name == this.pageArray[2]) {
        this.mod = false;
        this.mod1 = false;
        this.mod2=true;
        this.mod3=false;
        this.pageLeft = this.pageArray[1];
        this.pageRight = this.pageArray[3];
       
      }
      else if(params.name == this.pageArray[3]) {
        this.mod = false;
        this.mod1 = false;
        this.mod2=false;
        this.mod3 = true;
        this.pageLeft = this.pageArray[2];
        this.pageRight = this.pageArray[4];
      
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

}
