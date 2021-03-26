import { Component ,OnInit} from '@angular/core';
import { Course } from './course';
import { CourseServices } from './course.service';

@Component({
  templateUrl: './course.list.component.html',
  styleUrls: ['./course.list.component.css']
})
export class CouseListComponent implements OnInit {
  courses:Course[] = [];

  filteredCourses:Course[] = [];

  _filterBy:string;

  constructor(private courseService: CourseServices){}

  ngOnInit():void {
   this.courses = this.courseService.retrieveAll()
   this.filteredCourses=this.courses;
  }

  set filter(value:string){
    this._filterBy=value;

    this.filteredCourses = this.courses.filter((course:Course)=>{
     return course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) >-1
    })
  }

  get filter(){
    return this._filterBy;
  }
}
