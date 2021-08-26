import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';

import { EducationComponent } from './education/education.component';
import { WorkExpComponent } from './work-exp/work-exp.component';
import { SkillsComponent } from './skills/skills.component';
import { DesignsComponent } from './designs/designs.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path: 'about-me', component:AboutMeComponent},
  {path: 'education', component:EducationComponent},
  {path: 'skills', component:SkillsComponent},
  {path: 'work-exp', component:WorkExpComponent},
  {path: 'projects', component:ProjectsComponent},
  {path: 'designs', component:DesignsComponent},
  {path: 'hobbies', component:HobbiesComponent},
  // {path: '', component:ProjectsComponent},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
