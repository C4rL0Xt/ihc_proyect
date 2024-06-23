// student.interface.ts
export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  school: string;
  cycle: string;
  photoUrl: string;
  grades: {
    firstCycle: number;
    secondCycle: number;
    thirdCycle: number;
  };
  courses: string[];
}
