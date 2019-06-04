import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import{ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AddComponent } from './add.component';

import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA  } from '@angular/core';
import {UserlistsComponent} from '../userlists/userlists.component'
import{DataFilterPipe} from 'src/app/pipe/datafilter.pipe';


//C:\FSE Capsule Program\taskmanagerui\src\app\pipe\datafilter.pipe.ts

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,HttpClientModule,RouterTestingModule],
      declarations: [ AddComponent,UserlistsComponent,DataFilterPipe ],
      schemas: [NO_ERRORS_SCHEMA],
      providers:[]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

});
