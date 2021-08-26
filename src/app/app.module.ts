import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { WorkExpComponent } from './work-exp/work-exp.component';
import { SkillsComponent } from './skills/skills.component';
import { DesignsComponent } from './designs/designs.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    EducationComponent,
    WorkExpComponent,
    SkillsComponent,
    DesignsComponent,
    HobbiesComponent,
    SideBarComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
