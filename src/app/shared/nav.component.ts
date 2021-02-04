import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',

})
export class NavComponent implements OnInit {

@Input() moduleNumber;
@Input() pageLeft;
@Input() pageRight;
@Input() pageArray;
@Input() pageTitle;

@Output() selectedPage = new EventEmitter();

    showLeftArrow: boolean = true;
showRightArrow : boolean = true;

constructor() {
    
}

ngOnInit() {
    // console.log("page array", this.pageArray);
     
    // console.log("pageright", this.pageRight);

   

    
    // if (this.pageArray.indexOf(params.name) == 0) {
    //     this.showLeftArrow = false;
    //    }else{
    //      this.showLeftArrow = true;
    //    }

}

clickNextPage() {
    // console.log("pageleft", this.pageLeft);
    // console.log('firat', this.pageArray);
    this.selectedPage.emit(this.pageLeft);
    // if(this.pageArray[0] == this.pageLeft) {
    //     console.log("matching");
    // }

}

}