import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service'
import { User } from 'src/app/models/user'
import { AppSettings } from 'src/app/models/appsettings'
import { LoggingService } from 'src/app/services/logging.service'

@Component({
  selector: 'app-adduser-component',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  providers: [UserService]
})

export class AdduserComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  pageMessage: string;
  userId: number;
  showAlert: boolean;
  alertType: string;

  @Input() user: User;

  addButtonTitle = 'Add';
  pageTitle = 'Add User';

  constructor(private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _activatedRoute: ActivatedRoute,
    private _loggingService: LoggingService,
    private router: Router) {
    this.OnComponentLoad();
  }

  OnComponentLoad() {
    this.user = new User();

    this.ngOnInit();
  }

  ngOnInit() {
    this.userForm = this._formBuilder.group({
      userId: [0],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      employeeId: ['', [Validators.required, Validators.min(1)]]
    });

    this._activatedRoute.paramMap.subscribe(pm => {
      const id = +pm.get('id');
      this.submitted = false;
      this.getUser(id);
    });
  }

  displayPageMessage(alertType: string, message: string) {
    this.pageMessage = message;
    this.showAlert = true;
    this.alertType = (alertType === AppSettings.AlertDanger)
      ? AppSettings.AlertDangerClass
      : AppSettings.AlertSuccessClass;
  }

  clearForm() {
    this.submitted = false;
    this.userForm.reset();
    this.addButtonTitle = 'Add';
  }

  get f() { return this.userForm.controls; }

  getUser(id) {
    if (id === 0) {
      this.userForm.reset();
      this.userForm.patchValue({
        userId: null,
        firstName: '',
        lastName: null,
        employeeId: null
      });

    } else {

      this._userService.getById(id).subscribe((u) => {
        this.addButtonTitle = 'Update';
        this.pageTitle = 'Manage User - ' + u.FirstName;
        this.user = u;
        this.patchModel(u);
      });
    }

  }

  patchModel(u: User) {
    this.userForm.patchValue({
      userId: u.UserId,
      firstName: u.FirstName,
      lastName: u.LastName,
      employeeId: u.EmployeeId
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }

    this._userService.createOrUpdateUser(this.userForm.value)
      .subscribe((data) => {
        this.displayPageMessage(AppSettings.AlertSuccess, 'User has been successfully added/updated.');
        this.userForm.reset();
        this.router.navigate(['/users/0?r=' + + Math.floor(Math.random() * 1000)]);
      },
        (exception) => {
          this.displayPageMessage(AppSettings.AlertDanger, AppSettings.GenericError);
          this._loggingService.LogError(exception);
        });
  }
}
