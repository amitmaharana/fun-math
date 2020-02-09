import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class Assignment {
  assignmentId: number;
  assignmentNumber: string;
  dueDate: Date;
  creationDate: Timestamp<string>;
  totalPoints: number;
  questionList:string;
  submittedAnswer:any[]; 
  classNumber: number; 
}