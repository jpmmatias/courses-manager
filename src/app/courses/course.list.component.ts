import { Component ,OnInit} from '@angular/core';
import { Course } from './course';

@Component({
  selector:"app-course-list",
  templateUrl: './course.list.component.html',
  styleUrls: ['./course.list.component.css']
})
export class CouseListComponent implements OnInit {
  courses:Course[] = [];

  ngOnInit():void {
    this.courses =[
      {
      id:1,
      code:"2d",
      duration:12,
      name:"Angular",
      price:99.99,
      imageUrl:"image",
      rating:5,
      releaseDate:"20/09/2019"
    },
    {
      id:2,
      code:"3d",
      duration:16,
      name:"Java",
      price:79.99,
      imageUrl:"image",
      rating:3,
      releaseDate:"20/04/2020"
    }
  ]
  }
}
