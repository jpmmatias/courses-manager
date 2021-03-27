import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import {CouseListComponent } from './courses/course.list.component';
import { StarComponent } from './courses/star/star.component';
import { replacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from "./navbar/navbar.component";
import { RouterModule } from '@angular/router';
import {ErrorComponent  } from "./404/404.component";
import { CourseInfoComponent } from './courses/course.info.component';

@NgModule({
  declarations: [
    AppComponent,
    CouseListComponent,
    StarComponent,
    replacePipe,
    NavBarComponent,
    CourseInfoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
      path:"",
      redirectTo:"courses",
      pathMatch:"full"
    },
    {
      path:"courses",
      component:CouseListComponent,
    },
    {
      path:"courses/info/:id",
      component:CourseInfoComponent
    },
    {
      path:"**",
      component:ErrorComponent,
    },
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
