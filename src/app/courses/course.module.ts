import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {CouseListComponent } from './course.list.component';
import {CourseInfoComponent} from './course.info.component'
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { StarModule } from "../shared/components/star/star.module";
import { AppPipeModule } from "../shared/pipes/app-pipe.module";

@NgModule({
  declarations:[
    CourseInfoComponent,
    CouseListComponent,
  ]
  ,imports:[
    BrowserModule,
    FormsModule,
    StarModule,
    HttpClientModule,
    AppPipeModule,
    RouterModule.forChild([
      {
      path:"courses",
      component:CouseListComponent,
    },
    {
      path:"courses/info/:id",
      component:CourseInfoComponent
    },])

  ]
})
export class CourseModule{

}
