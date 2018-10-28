import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CourseModel } from '../core/course.model';

@Component({
  selector: 'cm-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, OnDestroy {

  @Input() course: CourseModel;
  @Input() firstRender: boolean = true;
  @Input() secondRender: string = 'Render if first render is false';
  @Input() sometimesRender: any;


  @Output() titleClicked = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  titleClickedEvent() {
    this.titleClicked.emit(this.course.name);
  }

  showCourseInfo() {
    console.log('Running validation');
    if (this.firstRender) {
      return console.log('Rendering if first render is true');
    }

    if (this.secondRender) {
      return console.log('Rendering if second render is true');
    }

    if (this.sometimesRender) {
      console.log('Sometimes render this part of code');
    }
  }

  ngOnDestroy() {
    console.log('Kraj jedne angular komponente :((((((((');
    this.titleClicked.unsubscribe();
  }
}
