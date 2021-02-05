import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import { Observable } from 'rxjs';
import { LeftPanelService } from '../service/left-panel.service';

@Component({
  selector: 'app-pre-conditions',
  templateUrl: './pre-conditions.component.html',
  styleUrls: ['./pre-conditions.component.css']
})
export class PreConditionsComponent implements OnInit {
  openPanel = true; 
  $panelMode: Observable<boolean>;
  mod1 = false;
  mod2 = false;
  mod3=false;
  mod = false;
  private _album: Array<any> = [];
  moduleNumber: number = 2;
  pageLeft: string;
  pageRight: string;
  pageArray = [
  'how-it-benefits',
  'pre-conditions', 
  'how-to-create-an-azure-account',
  'how-to-setup-an-Environment',
  'experience-lab-objectives-and-premise'
  
];
pageName;
lastPageIndex;
showLeftArrow: boolean = true;
showRightArrow : boolean = true;
  constructor(
    private _leftPanelSer: LeftPanelService,
    public router: Router,
    public route: ActivatedRoute,
    private _lightbox: Lightbox
  ) { }

  ngOnInit(): void {

   
    
    this.route.params.subscribe((params: Params) => {
     
     this.pageName = params.name;


      if (params.name == this.pageArray[1]){
        this.mod=true;
        this.mod1=false;
        this.mod2=false;
        this.pageLeft = this.pageArray[0];
        this.pageRight = this.pageArray[2];
      
       
      }
      else if(params.name ==this.pageArray[2]) {
        this.mod=false;
        this.mod1 = true;
        this.mod2=false;
        this.pageLeft = this.pageArray[1];
          this.pageRight = this.pageArray[3];
       
      }else if(params.name ==this.pageArray[3]) {
        this.mod=false;
        this.mod1 = false;
        this.mod2=true;
        this.pageLeft = this.pageArray[2];
        this.pageRight = this.pageArray[4];
      }
    });

    this.$panelMode =  this._leftPanelSer.panelMode;
    this.$panelMode.subscribe(mode => this.openPanel = mode );
   
  }

  onClickPanel() {
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

  moveLeft(){
    if(this.pageLeft == this.pageArray[0]){
      this.moduleNumber = 1;
    }else {
      this.moduleNumber = 2;
    }
    this._leftPanelSer.clickedCourseLink(this.pageLeft, this.moduleNumber);
    this.router.navigate(['/modules', this.moduleNumber, this.pageLeft]);
    
  }

  moveRight() {
    if(this.pageRight == this.pageArray[4]){
      console.log(this.pageArray[4]);
      this.moduleNumber = 3;
    } 
    else {
      this.moduleNumber = 2;
    }   
    this._leftPanelSer.clickedCourseLink(this.pageRight, this.moduleNumber);
    this.router.navigate(['/modules', this.moduleNumber, this.pageRight]);
  }

}
