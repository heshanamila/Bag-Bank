import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../shared/services/auth.service";
import { UserService } from '../../../shared/services/user.service';
import { User } from "../../../shared/services/user";

@Component({
  selector: 'app-navbar-out',
  templateUrl: './navbar-out.component.html',
  styleUrls: ['./navbar-out.component.css']
})
export class NavbarOutComponent implements OnInit {
  user: User = {
    uid: '',
    displayName: '',
    email: '',
    emailVerified: false,
    photoURL: '',
    roles: {
      keeper: false,
      tourist: false,
      admin: false
      }
    }

  constructor(public authService: AuthService, public userService: UserService) { }


  isLogged(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  ngOnInit() {
    this.authService.getUser().subscribe(usr => {
      if (usr) {
        localStorage.setItem('user', JSON.stringify(usr));
        this.user.roles.admin = usr.roles.admin;
        this.user.roles.tourist = usr.roles.tourist;
        this.user.displayName = usr.displayName;
        this.user.emailVerified = usr.emailVerified;
        this.user.email = usr.email;
        this.user.uid = usr.uid;
      }
    });
  }


}