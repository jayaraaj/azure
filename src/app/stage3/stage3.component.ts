import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import { Observable } from 'rxjs';
import { CommonService } from '../service/common.service';
import { LeftPanelService } from '../service/left-panel.service';

@Component({
  selector: 'app-stage3',
  templateUrl: './stage3.component.html',
  styleUrls: ['./stage3.component.css']
})
export class Stage3Component implements OnInit {

  

  openPanel = true; 
  $panelMode: Observable<boolean>;
  mod = false;
  mod1 = false;
  mod2 = false;
  mod3=false;
  mod4=false;
  mod5 = false;
  mod6 =false;
  private _album: Array<any> = [];
  copied = false;

  
  moduleNumber: number = 7;
  pageLeft: string;
  pageRight: string;
  pageArray = [
  'test-report-analysis',
  'stage-3', 
  'stage-objectives',
  'pipeline-overview',
  'test-plan-integration',
  'pipeline-Creation-and-Execution',
  'debugging-and-Re-Excution',
  'test-report-analysis',
  'stage-4'
];

lastPageIndex;
showLeftArrow: boolean = true;
showRightArrow : boolean = true;

  constructor(
    private _leftPanelSer: LeftPanelService,
    public router: Router,
    public route: ActivatedRoute,
    private _lightbox: Lightbox,
    private _commonService: CommonService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {

      //sessionStorage.setItem(params.name+this.moduleNumber, String(this.moduleNumber));

     
      if(params.name == this.pageArray[1]) {
        this.mod = true;
        this.mod1 = false;
        this.mod2=false;
        this.mod3=false;
        this.mod4 = false;
        this.mod5 = false;
        this.mod6 = false;
        this.pageLeft = this.pageArray[0];
        this.pageRight = this.pageArray[2];
      }
      else if(params.name ==this.pageArray[2]) {
        this.mod = false;
        this.mod1 = true;
        this.mod2=false;
        this.mod3=false;
        this.mod4 = false;
        this.mod5 = false;
        this.mod6 = false;
        this.pageLeft = this.pageArray[1];
        this.pageRight = this.pageArray[3];
      }else if(params.name ==this.pageArray[3]) {
        this.mod = false;
        this.mod1 = false;
        this.mod2=true;
        this.mod3=false;
        this.mod4 = false;
        this.mod5 = false;
        this.mod6 = false;
        this.pageLeft = this.pageArray[2];
        this.pageRight = this.pageArray[4];
      }
      else if(params.name ==this.pageArray[4]) {
        this.mod = false;
        this.mod1 = false;
        this.mod2=false;
        this.mod3=true;
        this.mod4 = false;
        this.mod5 = false;
        this.mod6 = false;
        this.pageLeft = this.pageArray[3];
        this.pageRight = this.pageArray[5];
      }
      else if(params.name ==this.pageArray[5]) {
        this.mod = false;
        this.mod1 = false;
        this.mod2=false;
        this.mod3 = false;
        this.mod4 = true;
        this.mod5 = false;
        this.mod6 = false;
        this.pageLeft = this.pageArray[4];
        this.pageRight = this.pageArray[6];
      }
      else if(params.name ==this.pageArray[6]) {
        this.mod = false;
        this.mod1 = false;
        this.mod2=false;
        this.mod3 = false;
        this.mod4 = false;
        this.mod5 = true;
        this.mod6 = false;
        this.pageLeft = this.pageArray[5];
        this.pageRight = this.pageArray[7];
      }
      else if(params.name ==this.pageArray[7]) {
        this.mod = false;
        this.mod1 = false;
        this.mod2=false;
        this.mod3 = false;
        this.mod4 = false;
        this.mod5 = false;
        this.mod6 = true;
        this.pageLeft = this.pageArray[6];
        this.pageRight = this.pageArray[8];
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

  openImage(imageSrc) {
    this._album = [];
    let album = {
      src: imageSrc,
     
   };
   this._album.push(album);
   this._lightbox.open(this._album);
    console.log(album);
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
      this.moduleNumber = 6;
    }else {
      this.moduleNumber = 7;
    }
    this._leftPanelSer.clickedCourseLink(this.pageLeft, this.moduleNumber);
    this.router.navigate(['/modules', this.moduleNumber, this.pageLeft]);
    
  }

  moveRight() {
      
    if(this.pageRight == this.pageArray[8]){
      this.moduleNumber = 8;
    }else {
      this.moduleNumber = 7;
    }
    //console.log(this.moduleNumber, 'module for right');
    this._leftPanelSer.clickedCourseLink(this.pageRight, this.moduleNumber);
    this.router.navigate(['/modules', this.moduleNumber, this.pageRight]);
  }

}
