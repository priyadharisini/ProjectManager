import { DatePipe } from '@angular/common/src/pipes/date_pipe';
export class TaskSearch {
    TaskName : string;
    ParentTaskName : string;
    PriorityFrom : number;
    PriorityTo : number;
    StartDate : DatePipe;
    EndDate : DatePipe;
    constructor(
    taskName : string,
    parentTaskName : string,
    priorityFrom : number,
    priorityTo : number,
    startDate : DatePipe,
    endDate : DatePipe)
    {
    this.TaskName = taskName;
    this.ParentTaskName = parentTaskName,
    this.PriorityFrom = priorityFrom,
    this.PriorityTo = priorityTo,
    this.StartDate = startDate,
    this.EndDate = endDate
    }
    }