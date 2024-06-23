import { Injectable } from '@angular/core';
import { Student } from 'src/app/core/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      school: 'Example School',
      cycle: 'Senior',
      photoUrl: 'assets/john-doe.jpg',
      grades: {
        firstCycle: 85,
        secondCycle: 78,
        thirdCycle: 90
      },
      courses: ['Mathematics', 'Physics', 'History']
    },
    // Add more student data as needed
  ];

  constructor() { }

  getAllStudents(): Student[] {
    return this.students;
  }
}
