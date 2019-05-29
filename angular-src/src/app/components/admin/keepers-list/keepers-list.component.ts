import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/services/user';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-keepers-list',
  templateUrl: './keepers-list.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.min.css']
})
export class KeepersListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService, 
              public AuthService: AuthService) { }

  getUsr() {
    const usr = JSON.parse(localStorage.getItem('users'));
    this.users = usr; 
  }

  ngOnInit() {
    this.getUsr();
    this.userService.getUser().subscribe( users => {
      this.users = users;
      localStorage.setItem('users', JSON.stringify(users));
    });
  }

}
