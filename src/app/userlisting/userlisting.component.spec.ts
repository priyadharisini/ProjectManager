import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistingComponent } from './userlisting.component';
import{ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import{DataFilterPipe} from 'src/app/pipe/datafilter.pipe';

describe('UserlistingComponent', () => {
  let component: UserlistingComponent;
  let fixture: ComponentFixture<UserlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,HttpClientModule,RouterTestingModule,FormsModule],
      declarations: [ UserlistingComponent,DataFilterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
