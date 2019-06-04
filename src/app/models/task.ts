import { DatePipe } from '@angular/common/src/pipes/date_pipe';
export class Task {
    TaskId: number;
    TaskName: string;
    ProjectId: number;
    ProjectName: string;
    IsParentTask: boolean;
    Priority: number;
    ParentTaskId: number;
    ParentTaskName: string;
    StartDate: Date;
    Status: string;
    EndDate: Date;
    ManagerName: string;
    ManagerId: number;
  constructor( ) {
  
  }
}