import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeftPanelService } from '../service/left-panel.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private _leftPanelSer: LeftPanelService
  ) { }

  ngOnInit(): void {
  }

  moveIntro(){   
    //sessionStorage.setItem('explore-Continuous-testing-with-azure', '');

   // this._leftPanelSer.clickedCourseLink('explore-Continuous-testing-with-azure', '1');
    this.router.navigate(['/modules', 1, 'explore-Continuous-testing-with-azure']);
    
  }


}
