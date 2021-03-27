import { Component ,OnInit} from '@angular/core';
import { Course } from './course';
import { CourseServices } from './course.service';
import { Observable } from "rxjs";

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
    this.retrieveAll()
  }

  retrieveAll():void{
   this.courseService.retrieveAll().subscribe({
      next:(courses:Course[]) =>{
        this.courses = courses
        this.filteredCourses=this.courses;
      },
      error:err=>{
        console.log(err)
      }
    })

  }

  deleteByID(id:number){
    this.courseService.deleteByID(id).subscribe({
      next:()=>{
        this.retrieveAll()
      },
      error:err=>{console.log(err)}
    })
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
