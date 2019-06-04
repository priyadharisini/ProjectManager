import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './ui/add/add.component';
import { ViewComponent } from './ui/view/view.component';
import { EditComponent } from './ui/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './ui/adduser/adduser.component';
import { UserlistsComponent } from './ui/userlists/userlists.component';
import { AddprojectsComponent } from './ui/addprojects/addprojects.component';
import { DataFilterPipe } from './pipe/datafilter.pipe'
import { ModalComponent } from './directives/model.component';
import { ViewuserComponent } from './ui/viewuser/viewuser.component';
import { ViewprojectsComponent } from './ui/viewprojects/viewprojects.component';
import { ModalService } from 'src/app/services/model.service';
import { UserlistingComponent } from './userlisting/userlisting.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    EditComponent,
    AdduserComponent,
    UserlistsComponent,
    AddprojectsComponent,
    DataFilterPipe,
    ModalComponent,
    ViewuserComponent,
    ViewprojectsComponent,
    UserlistingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
