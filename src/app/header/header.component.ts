import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LeftPanelService } from '../service/left-panel.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @HostListener("window: scroll", ['$event']) onScrollEvent($event) {
   
    const verticalOffset = window.pageYOffset 
          || document.documentElement.scrollTop 
          || document.body.scrollTop || 0;

          if(verticalOffset >56){this.scroll=true}
          else{this.scroll=false}

          //console.log(verticalOffset);
  }

  openPanel = true; 
  $panelMode: Observable<boolean>;
  @Input() courseNumber;
  $number: Subscription;
  courseNum;
  scroll:boolean=false;

  constructor(
    private _leftPanelSer: LeftPanelService,
  ) { }

  ngOnInit(): void {
    this.$panelMode =  this._leftPanelSer.panelMode;
    this.$panelMode.subscribe(mode => this.openPanel = mode );

 
      this.$number = this._leftPanelSer.coursePercentage.subscribe(val => {
       // console.log(val, 'per');
        this.courseNum = val;
      });
     // console.log('module', this.courseNumber);
  }

 

  onClickPanel() {
    //console.log(this.openPanel);
    this.openPanel = !this.openPanel;
    this._leftPanelSer.togglePanel(this.openPanel);
    console.log(this.openPanel)
    
  }

  getWidth() {
    //console.log(+this.courseNum * 2);
    //return (+this.courseNum)+'%';
    return (+this.courseNum * 2)+'px';
  }


}
