import { Component, OnInit,Input, Output ,EventEmitter } from '@angular/core';

import{UserListing} from '../models/userlisting';
import { ProjectModel } from '../models/Project';
import { Task } from '../models/task';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})

export class UserlistingComponent implements OnInit {
  @Input() listingmodalId: string = 'app-userlisting';
  @Input() userlistings: Array<UserListing> = [];
  @Input() projects : Array<ProjectModel> = [];
  @Input() tasks : Array<Task> = [];
  @Output() selectedvalue = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('user listing popup called');
  }

  radclick(obj)
  {  
    var empvalue;
    empvalue =  obj.UserId +"-" + obj.EmployeeId + "-" + obj.FirstName +"-"+ obj.LastName;
    this.selectedvalue.emit(empvalue);
  }

  radprojectclick(ps)
  {
    var psvalue;
    psvalue =  ps.ProjectId +"-" + ps.ProjectName;
  this.selectedvalue.emit(psvalue);
  }

  radtaskclick(tsks)
  {
    console.log(tsks);
    var psvaluetask;
    psvaluetask =  tsks.ParentTaskId +"-" + tsks.ParentTaskName;
  this.selectedvalue.emit(psvaluetask);
  }

}
