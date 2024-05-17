import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
interface User {
  name: string;
  active: boolean;
}
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss',
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  setActive(user: User, active: boolean) {
    user.active = active;
  }
}
