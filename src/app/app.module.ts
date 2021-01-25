import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ModulesComponent } from './modules/modules.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { ExperienceLabComponent } from './experience-lab/experience-lab.component';
import { PreConditionsComponent } from './pre-conditions/pre-conditions.component';
import { Stage1Component } from './stage1/stage1.component';
import { Stage2Component } from './stage2/stage2.component';
import { Stage0Component } from './stage0/stage0.component';
import { Stage3Component } from './stage3/stage3.component';
import { Stage4Component } from './stage4/stage4.component';
import { Stage5Component } from './stage5/stage5.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { LightboxModule } from 'ngx-lightbox';
import { NavComponent } from './shared/nav.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IntroductionComponent,
    ModulesComponent,
    LeftPanelComponent,
    NoPageFoundComponent,
    HeaderComponent,
    ExperienceLabComponent,
    PreConditionsComponent,
    Stage1Component,
    Stage2Component,
    Stage0Component,
    Stage3Component,
    Stage4Component,
    Stage5Component,
    ConclusionComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LightboxModule 
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
