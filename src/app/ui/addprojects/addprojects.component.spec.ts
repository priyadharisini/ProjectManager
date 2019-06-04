import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprojectsComponent } from './addprojects.component';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA  } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import{ReactiveFormsModule} from '@angular/forms';

describe('AddprojectsComponent', () => {
  let component: AddprojectsComponent;
  let fixture: ComponentFixture<AddprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,HttpClientModule,RouterTestingModule],
      declarations: [ AddprojectsComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
