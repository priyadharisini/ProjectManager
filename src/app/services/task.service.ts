import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from 'src/app/models/Task';
import { AppSettings } from 'src/app/models/appsettings'

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  constructor(private httpClient: HttpClient) { }

  createOrUpdateTask(task: Task) {
    console.log(task)
    return this.httpClient.post(AppSettings.TasksUrl, task);
  }

  completeTask(task: Task) {
    return this.httpClient.post(AppSettings.TasksUrl + '/complete', task);
  }

  getAllParentTasks() {
    return this.httpClient.get<Task[]>(AppSettings.TasksUrl + '/parent-tasks');
  }

  getById(id: number) {
    return this.httpClient.get<Task>(AppSettings.TasksUrl + '/' + id);
  }

  getAll() {
    return this.httpClient.get<Task[]>(AppSettings.TasksUrl);
  }
}
