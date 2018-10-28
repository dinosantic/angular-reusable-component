import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { CourseModel } from '../core/course.model';
import { CourseService } from '../core/course.service';

@Component({
  selector: 'cm-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: CourseModel[];
  header: string;

  // DATA TABLE CONFIG
  displayedColumns: string[] = ['id', 'name', 'location'];
  dataSource: MatTableDataSource<CourseModel>;
  // END DATA TABLE CONFIG

  constructor(
    private courseService: CourseService
  ) { this.header = 'Courses'; }

  ngOnInit() {
    this.loadCourses();
  }

  private async loadCourses() {
    this.courses = await this.courseService.getAllCourses();
    this.setDataSource(this.courses);
  }

  private setDataSource(courses: CourseModel[]) {
    this.dataSource = new MatTableDataSource(courses);
  }
  courseTitleSelected(x) {
    console.log('Add button clicked on', x);
  }

}
