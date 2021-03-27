import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {ErrorComponent  } from "./404/404.component";
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
      {
      path:"",
      redirectTo:"courses",
      pathMatch:"full"
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
