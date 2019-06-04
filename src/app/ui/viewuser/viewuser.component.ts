import { OnInit, Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service'
import { User } from 'src/app/models/user'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewuser-component',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})

export class ViewuserComponent implements OnInit {
  users: Array<User> = [];
  sortBy: string;
  searchQuery: string;

  constructor(private userService: UserService, private router: Router,
    private activatedRouter: ActivatedRoute) {
    this.sortBy = 'firstName';
  }

  ngOnInit() {

    this.activatedRouter.paramMap.subscribe(pm => {
      const id = +pm.get('id');
      this.getAllUsers();
    });
  }

  public getAllUsers() {
    this.userService.getUsers().subscribe((data: Array<User>) => {
      this.users = data;
    });
  }

  handleSortBy(value) {
    this.sortBy = value;
    switch (this.sortBy) {
      case 'lastName':
        this.users = this.users.sort((a, b) => a.LastName.localeCompare(b.LastName));
        break;
      case 'employeeId':
        this.users = this.users.sort((a, b) => a.EmployeeId.toLocaleString().localeCompare(b.EmployeeId.toLocaleString()));
        break;
      default:
        this.users = this.users.sort((a, b) => a.FirstName.localeCompare(b.FirstName));
        break;
    }
  }

  editUser(user: User) {
    this.router.navigate(['/users/' + user.UserId.toString()]);
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

  deleteUser(user: User) {
    if (!confirm('This operation cannot be undone. Are you sure want to delete?')) {
      return;
    }

    if (user.UserId > 0) {
      this.userService.delete(user.UserId).subscribe((response) => {
        this.router.navigate(['/users/0?r=' + Math.floor(Math.random() * 1000)]);
      });
    }
  }
}
