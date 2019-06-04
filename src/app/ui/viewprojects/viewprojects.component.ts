import { Component, OnInit } from '@angular/core';
import { ProjectModel } from 'src/app/models/project'
import { ProjectService } from 'src/app/services/project.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewprojects-component',
  templateUrl: './viewprojects.component.html',
  styleUrls: ['./viewprojects.component.css']
})
export class ViewprojectsComponent implements OnInit {

  projects: Array<ProjectModel> = [];
  sortBy: string;
  searchQuery: string;

  constructor(private _projectService: ProjectService,
    private _router: Router) {
    this.sortBy = 'startDate';
  }

  ngOnInit() {
    this.getAllProjects();
  }

  public getAllProjects() {
    console.log('edit pro')
    this._projectService.getAll().subscribe((data: Array<ProjectModel>) => {
      this.projects = data;
    });
  }

  editProject(project: ProjectModel) {
    console.log('edit proect')
    this._router.navigate(['/projects/' + project.ProjectId.toString()]);
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

  suspendProject(project: ProjectModel) {
    alert('No action defined in requiremet document.');
  }

  private getTime(date?: Date) {
    return date != null ? new Date(date).getTime() : 0;
  }

  handleSortBy(value) {
    this.sortBy = value;

    switch (this.sortBy) {
      case 'startDate':
        this.projects = this.projects.sort((a, b) => {
          return this.getTime(a.StartDate) - this.getTime(b.StartDate);
        });
        break;
      case 'endDate':
        this.projects = this.projects.sort((a, b) => {
          return this.getTime(a.EndDate) - this.getTime(b.EndDate);
        });
        break;
      case 'completed':
        this.projects = this.projects.sort((a, b) => a.Completed.localeCompare(b.Completed));
        break;
      case 'priority':
        this.projects = this.projects.sort((a, b) => a.Priority.toString().localeCompare(b.Priority.toString()));
        break;
      default:
        this.projects = this.projects.sort((a, b) => a.ProjectName.localeCompare(b.ProjectName));
        break;
    }

  }
}
