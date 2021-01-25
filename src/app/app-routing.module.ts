import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { ExperienceLabComponent } from './experience-lab/experience-lab.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LoginComponent } from './login/login.component';
import { ModulesComponent } from './modules/modules.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { PreConditionsComponent } from './pre-conditions/pre-conditions.component';
import { Stage0Component } from './stage0/stage0.component';
import { Stage1Component } from './stage1/stage1.component';
import { Stage2Component } from './stage2/stage2.component';
import { Stage3Component } from './stage3/stage3.component';
import { Stage4Component } from './stage4/stage4.component';
import { Stage5Component } from './stage5/stage5.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'modules', component: ModulesComponent, children: [
    {path: '1/:name', component: IntroductionComponent},
    {path: '2/:name', component: ExperienceLabComponent},
    {path: '3/:name', component: PreConditionsComponent},
    {path: '4/:name', component: Stage0Component},
    {path: '5/:name', component: Stage1Component},
    {path: '6/:name', component: Stage2Component},
    {path: '7/:name', component: Stage3Component},
    {path: '8/:name', component: Stage4Component},
    {path: '9/:name', component: Stage5Component},
    {path: '10/:name', component: ConclusionComponent},
  ]},

  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', })],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
