import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import { Observable } from 'rxjs';
import { CommonService } from '../service/common.service';
import { LeftPanelService } from '../service/left-panel.service';

@Component({
  selector: 'app-stage1',
  templateUrl: './stage1.component.html',
  styleUrls: ['./stage1.component.css']
})
export class Stage1Component implements OnInit {

  openPanel = true; 
  copied = false;
  $panelMode: Observable<boolean>;
  mod = false;
  mod1 = false;
  mod2 = false;
  mod3=false;
  mod4=false;
  mod5=false;
  private _album: Array<any> = [];

  moduleNumber: number = 5;
  pageLeft: string;
  pageRight: string;
  pageArray = [
  'stage-1', 
  'stage-objectives',
  'pipeline-overview',
  'pipeline-Creation-and-Execution',
  'debugging-and-Re-Excution',
  'test-report-analysis' 
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

      if(params.name ==this.pageArray[0]) {
        this.mod = true;
        this.mod1 = false;
        this.mod2=false;
        this.mod3=false;
        this.mod4 = false;
        this.mod5 = false;
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
        this.pageLeft = this.pageArray[0];
        this.pageRight = this.pageArray[2];
      }else if(params.name ==this.pageArray[2]) {
        this.mod = false;
        this.mod1 = false;
        this.mod2=true;
        this.mod3=false;
        this.mod4 = false;
        this.mod5 = false;
        this.pageLeft = this.pageArray[1];
        this.pageRight = this.pageArray[3];
      }else if(params.name ==this.pageArray[3]) {
        this.mod = false;
        this.mod1 = false;
        this.mod2=false;
        this.mod3 = true;
        this.mod4 = false;
        this.mod5 = false;
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
        this.pageLeft = this.pageArray[4];
        this.pageRight = this.pageArray[6];
      }
    });

    this.$panelMode =  this._leftPanelSer.panelMode;
    this.$panelMode.subscribe(mode => this.openPanel = mode);
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
  }

  // copyText(text){

  //   let listener = (e: ClipboardEvent) => {
  //     e.clipboardData.setData('text/plain', (text.textContent));
  //     e.preventDefault();
  //   };
  //   document.addEventListener('copy', listener);
  //   document.execCommand('copy');
  //   document.removeEventListener('copy', listener);
  //   this.copied = true;
  //   setTimeout(()=>{
  //     this.copied = false;
  //   }, 5000);

  //   }

  copyText(text) {
    this._commonService.copied(text);
    this._commonService.$copied.subscribe( result => {
      this.copied = result;
      this.copied = false;
    });
  }



}
