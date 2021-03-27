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
    this.courseId = parseInt(this.activateRoute.snapshot.paramMap.get("id"))
    this.courseInfo = this.courseService.retrieveByID(this.courseId)
  }

  save() {
    this.courseService.save(this.courseInfo)
  }
}
