import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import { Observable } from 'rxjs';
import { LeftPanelService } from '../service/left-panel.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  

  openPanel = true; 
  $panelMode: Observable<boolean>;
  mod = false;
  mod1 = false;
  mod2 = false;
  mod3=false;
  pageLeft: string;
  pageRight: string;
  pageArray = ['explore-Continuous-testing-with-azure', 'what-is-continuous-testing', 'why-azure-for-continuous-testing','how-it-benefits'];
  moduleNumber: number;
  lastPageIndex;
  showLeftArrow: boolean = true;
  showRightArrow : boolean = true;
  private _album: Array<any> = [];

  constructor(
    private _leftPanelSer: LeftPanelService,
    public router: Router,
    public route: ActivatedRoute,
    private _lightbox: Lightbox
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      // console.log(params.name);

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



      this.moduleNumber = 1;
     
      if (params.name == this.pageArray[0]){
        this.mod = true;
        this.mod1 = false;
        this.mod2=false;
        this.mod3=false;
        this.pageLeft = this.pageArray[0];
        this.pageRight = this.pageArray[1];

      }
      else if(params.name ==this.pageArray[1]) {
        this.mod = false;
        this.mod1 = true;
        this.mod2=false;
        this.mod3=false;
        this.pageLeft = this.pageArray[0];
        this.pageRight = this.pageArray[2];
        
      }else if(params.name ==this.pageArray[2]) {
        this.mod = false;
        this.mod1 = false;
        this.mod2=true;
        this.mod3=false;
        this.pageLeft = this.pageArray[1];
        this.pageRight = this.pageArray[3];
      }else if(params.name ==this.pageArray[3]) {
        this.mod = false;
        this.mod1 = false;
        this.mod2=false;
        this.mod3 = true;
        //this.moduleNumber = 2;
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

  openImage(imageSrc) {
    this._album = [];
    let album = {
      src: imageSrc,
     
   };
   this._album.push(album);
   this._lightbox.open(this._album);
  }

}
