import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistsComponent } from './userlists.component';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA  } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import{ReactiveFormsModule} from '@angular/forms';
import{DataFilterPipe} from 'src/app/pipe/datafilter.pipe';

describe('UserlistsComponent', () => {
  let component: UserlistsComponent;
  let fixture: ComponentFixture<UserlistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,HttpClientModule,RouterTestingModule],
      declarations: [ UserlistsComponent,DataFilterPipe ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
