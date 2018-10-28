import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { StudentService } from '../core/student.service';
import { StudentModel } from '../core/student.model';

@Component({
  selector: 'cm-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: StudentModel[];

  header: string;

  // DATA TABLE CONFIG
  displayedColumns: string[] = ['id', 'fullName', 'email'];
  dataSource: MatTableDataSource<any>;
  // END DATA TABLE CONFIG

  constructor(
    private studentService: StudentService
  ) { this.header = 'Students'; }


  ngOnInit() {
    this.loadStudents();
  }

  private async loadStudents() {
    this.students = await this.studentService.getAllStudents();
    this.setDataSource(this.students);
  }

  private setDataSource(students) {
    this.dataSource = new MatTableDataSource(students);
  }
  courseTitleSelected(x) {
    console.log('Add button clicked on', x);
  }
}
