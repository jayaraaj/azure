import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import { Observable } from 'rxjs';
import { CommonService } from '../service/common.service';
import { LeftPanelService } from '../service/left-panel.service';

@Component({
  selector: 'app-stage4',
  templateUrl: './stage4.component.html',
  styleUrls: ['./stage4.component.css']
})
export class Stage4Component implements OnInit {

 

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

  
  
  moduleNumber: number = 8;
  pageLeft: string;
  pageRight: string;
  pageArray = [
  'stage-4', 
  'stage-objectives',
  'pipeline-overview',
  'build-and-execute',
  'pipeline-Creation-and-Execution',
  'debugging-and-Re-Excution',
  'test-report-analysis' 
];

lastPageIndex;
showLeftArrow: boolean = true;
showRightArrow : boolean = true;
copied = false;


  constructor(
    private _leftPanelSer: LeftPanelService,
    public router: Router,
    public route: ActivatedRoute,
    private _lightbox: Lightbox,
    private _commonService: CommonService,
    
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
          this.mod4 = false;
          this.mod5 = false;
          this.mod6 = false;
          this.pageLeft = this.pageArray[0];
          this.pageRight = this.pageArray[1];
        }
        else if(params.name ==this.pageArray[1]) {
          this.mod = false;
          this.mod1 = true;
          this.mod2=false;
          this.mod3=false;
          this.mod4 = false;
          this.mod5 = false;
          this.mod6 = false;
          this.pageLeft = this.pageArray[0];
          this.pageRight = this.pageArray[2];
        }else if(params.name ==this.pageArray[2]) {
          this.mod = false;
          this.mod1 = false;
          this.mod2=true;
          this.mod3=false;
          this.mod4 = false;
          this.mod5 = false;
          this.mod6 = false;
          this.pageLeft = this.pageArray[1];
          this.pageRight = this.pageArray[3];
        }
        else if(params.name ==this.pageArray[3]) {
          this.mod = false;
          this.mod1 = false;
          this.mod2=false;
          this.mod3=true;
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
          this.mod3 = false;
          this.mod4 = true;
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
          this.mod4 = false;
          this.mod5 = true;
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
          this.mod5 = false;
          this.mod6 = true;
          this.pageLeft = this.pageArray[5];
          this.pageRight = this.pageArray[7];
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
    this._commonService.copied(text);
    // this._commonService.$copied.subscribe( result => {
    //   this.copied = result;
    // });
  }


}
