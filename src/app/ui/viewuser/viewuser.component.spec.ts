import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import{ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA  } from '@angular/core';
import {UserlistsComponent} from '../userlists/userlists.component'
import{DataFilterPipe} from 'src/app/pipe/datafilter.pipe';

import { ViewuserComponent } from './viewuser.component';

describe('ViewuserComponent', () => {
  let component: ViewuserComponent;
  let fixture: ComponentFixture<ViewuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,HttpClientModule,RouterTestingModule,FormsModule],
      declarations: [ ViewuserComponent ,UserlistsComponent,DataFilterPipe ],
      schemas: [NO_ERRORS_SCHEMA],
      providers:[]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
