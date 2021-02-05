import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import { Observable } from 'rxjs';
import { CommonService } from '../service/common.service';
import { LeftPanelService } from '../service/left-panel.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stage0',
  templateUrl: './stage0.component.html',
  styleUrls: ['./stage0.component.css']
})
export class Stage0Component implements OnInit {

  
  openPanel = true; 
  copied = false;
  $panelMode: Observable<boolean>;
  mod1 = false;
  mod2 = false;
  mod3=false;
  mod4=false;
  mod=false;
  private _album: Array<any> = [];
  tokenForm: FormGroup;

  moduleNumber: number = 4;
  pageLeft;
  pageRight;
  pageNumber;
  pageArray = [
  'learnings',
  'stage-0', 
  'what-is-a-landing-zone',
  'principles-and-guidelines-to-follow',
  'creating-your-landing-zone' ,
  'tikk-talk',
  'stage-1'
];
pageName;
lastPageIndex;
showLeftArrow: boolean = true;
showRightArrow : boolean = true;
closeResult = '';
patToken = "Test"
// @ViewChild('patToken', { static: true }) patToken;
  constructor(
    private _leftPanelSer: LeftPanelService,
    public router: Router,
    public route: ActivatedRoute,
    private _lightbox: Lightbox,
    private _commonService: CommonService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {

    this.tokenForm = new FormGroup({
      'patToken': new FormControl('')
    });
   

    this.route.params.subscribe((params: Params) => {

      this.pageName = params.name;
     
  
      if(params.name == this.pageArray[1]) {
        
        this.mod = true;
        this.mod1 = false;
        this.mod2=false;
        this.mod3=false;
        this.mod4 = false;
        this.pageLeft = this.pageArray[0];
        this.pageRight = this.pageArray[2];

       
        
      }
      else if(params.name == this.pageArray[2]) {
        this._commonService.getPageName(this.moduleNumber, params.name);
        this.mod = false;
        this.mod1 = true;
        this.mod2=false;
        this.mod3=false;
        this.mod4 = false;
        
        this.pageLeft = this.pageArray[1];
        this.pageRight = this.pageArray[3];

      }else if(params.name == this.pageArray[3]) {
        this._commonService.getPageName(this.moduleNumber, params.name);
        this.mod = false;
        this.mod1 = false;
        this.mod2=true;
        this.mod3=false;
        this.mod4 = false;
        this.pageLeft = this.pageArray[2];
        this.pageRight = this.pageArray[4];

      }else if(params.name == this.pageArray[4]) {
        this._commonService.getPageName(this.moduleNumber, params.name);
        this.mod = false;
        this.mod1 = false;
        this.mod2=false;
        this.mod3 = true;
        this.mod4 = false;
        this.pageLeft = this.pageArray[3];
        this.pageRight = this.pageArray[5];
      }
      else if(params.name == this.pageArray[5]) {
        this._commonService.getPageName(this.moduleNumber, params.name);
        this.mod = false;
        this.mod1 = false;
        this.mod2=false;
        this.mod3 = false;
        this.mod4 = true;
        this.pageLeft = this.pageArray[4];
        this.pageRight = this.pageArray[6];
        
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

  copyText(text) {
    this._commonService.copied(text);
    // this._commonService.$copied.subscribe( result => {
    //   this.copied = result;
    // });
  }

  clickNextPage(event){
    console.log("nav", event);
  }

  moveLeft(){
    if(this.pageLeft == this.pageArray[0]){
      this.moduleNumber = 3;
    }else {
      this.moduleNumber = 4;
    }  
    this._leftPanelSer.clickedCourseLink(this.pageLeft, this.moduleNumber);
    this.router.navigate(['/modules', this.moduleNumber, this.pageLeft]);
    
  }

  moveRight() {
    if(this.pageRight == this.pageArray[6]){
      this.moduleNumber = 5;
    }    else {
      this.moduleNumber = 4;
    }  
    this._leftPanelSer.clickedCourseLink(this.pageRight, this.moduleNumber);
    this.router.navigate(['/modules', this.moduleNumber, this.pageRight]);
  }

  createToken(content) {
    this.modalService.open(content, {
      centered: true,
      backdrop: 'static'
    });
    console.log(this.patToken);
  }

  private getDismissReason(reason: any): string {
    
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmitToken() {
    this.modalService.dismissAll();
      console.log(this.tokenForm.value)

  }

  

}
