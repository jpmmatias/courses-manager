import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Course } from "./course";
import { Observable } from "rxjs";

@Injectable({
  providedIn:"root"
})
export class CourseServices{

  private courseUrl:string = "http://localhost:3100/api/courses"

  constructor(private httpClient:HttpClient){}

  retrieveAll():Observable<Course[]>{
    return this.httpClient.get<Course[]>(this.courseUrl);
  }
  retrieveByID(id:number):Observable<Course>{
    return this.httpClient.get<Course>(`${this.courseUrl}/${id}`)
  }

  save(course:Course):Observable<Course>{
    if (course.id) {
     return this.httpClient.put<Course>(`${this.courseUrl}/${course.id}`,course)
    }
    return this.httpClient.post<Course>(this.courseUrl,course)
  }

  deleteByID(id:number){
    return this.httpClient.delete<Course>(`${this.courseUrl}/${id}`)
  }
}


