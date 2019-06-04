import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';

import { ModalService } from 'src/app/services/model.service';
import { TaskService } from 'src/app/services/task.service';
import { ProjectService } from 'src/app/services/project.service';
import { ProjectModel } from 'src/app/models/Project';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-component',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [ModalService]
})
export class ViewComponent implements OnInit {

  taskForm: FormGroup;
  tasks: Array<Task> = [];
  projects: Array<ProjectModel> = [];
  projectName: string;
  sortBy: string;
  searchProject: string;

  constructor(private _taskService: TaskService,
    private _projectService: ProjectService,
    private _modalService: ModalService,
    private _formBuilder: FormBuilder,
    private _router: Router) {
    this.sortBy = 'startDate';
    this.OnComponentLoad();
  }

  OnComponentLoad() {
    this.ngOnInit();
  }

  ngOnInit() {
    this.loadTasks();
    this.getAllProjects();
  }

  setSelectedProject(m: ProjectModel) {
    this.projectName = m.ProjectName;
  }

  get f() { return this.taskForm.controls; }

  editTask(task: Task) {
    this._router.navigate(['tasks/' + task.TaskId.toString()]);
  }

  public getAllProjects() {
    this._projectService.getAll().subscribe((data: Array<ProjectModel>) => {
      this.projects = data;
    });
  }

  loadTasks() {
    this._taskService.getAll().subscribe((data: Array<Task>) => {
      this.tasks = data;
    });
  }

  openModal(id: string) {
    this._modalService.open(id);
  }

  isCompleted(tm: Task) {
    if (tm === null) { return false; }
    return (tm.Status === 'Yes');
  }

  closeModal(id: string) {
    this._modalService.close(id);
    this.loadTasks();
  }

  endTask(task: Task) {
    if (!confirm('This operation cannot be undone. Are you sure want to continue?')) {
      return;
    }

    this._taskService.completeTask(task).subscribe((data: Array<Task>) => {
      this.tasks = data;
    });
  }
  private getTime(date?: Date) {
    return date != null ? new Date(date).getTime() : 0;
  }

  handleSortBy(value) {
    this.sortBy = value;

    switch (this.sortBy) {
      case 'startDate':
        this.tasks = this.tasks.sort((a, b) => {
          return this.getTime(a.StartDate) - this.getTime(b.StartDate);
        });
        break;
      case 'endDate':
        this.tasks = this.tasks.sort((a, b) => {
          return this.getTime(a.EndDate) - this.getTime(b.EndDate);
        });
        break;
      case 'completed':
        this.tasks = this.tasks.sort((a, b) => a.Status.localeCompare(b.Status));
        break;
      case 'priority':
        this.tasks = this.tasks.sort((a, b) => a.Priority.toString().localeCompare(b.Priority.toString()));
        break;
      default:
        this.tasks = this.tasks.sort((a, b) => a.ProjectName.localeCompare(b.ProjectName));
        break;
    }
  }
}
