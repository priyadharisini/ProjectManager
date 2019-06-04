import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from '../app/ui/add/add.component';
import { EditComponent } from '../app/ui/edit/edit.component';
import { ViewComponent } from '../app/ui/view/view.component';
import { AdduserComponent } from '../app/ui/adduser/adduser.component';
import { AddprojectsComponent } from '../app/ui/addprojects/addprojects.component';
import { ViewprojectsComponent } from '../app/ui/viewprojects/viewprojects.component';

const routes: Routes = [
  { path: '', component: ViewComponent },
{ path: 'Add', component: AddComponent },
{ path: 'tasks/:taskid', component: AddComponent },
{ path: 'Edit', component: EditComponent },
{ path: 'View', component: ViewComponent },
{ path: 'AddUser', component: AdduserComponent },
{ path: 'AddProject', component: AddprojectsComponent },
{ path: 'users/:id', component: AdduserComponent },
{ path: 'projects/:id', component: AddprojectsComponent },
{ path: 'VWprojects', component: AddprojectsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
