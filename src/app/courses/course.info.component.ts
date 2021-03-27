import { Component ,OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseServices } from "./course.service";

@Component({
  templateUrl:'./course.info.component.html'
})
export class CourseInfoComponent {
  courseId:number
  courseInfo:Course

  constructor(private activateRoute: ActivatedRoute, private courseService:CourseServices) {}

  ngOnInit() {
    this.retrieveCourse()
  }

  retrieveCourse():void{
    this.courseId = parseInt(this.activateRoute.snapshot.paramMap.get("id"))
    this.courseService.retrieveByID(this.courseId).subscribe({
      next: (course:Course)=>{this.courseInfo = course},
      error:err=>{console.log(err)}
    })

  }

  save():void {
    this.courseService.save(this.courseInfo).subscribe()
  }
}
