import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../../shared/services/auth.service";
import { Router } from "@angular/router";
import { User } from "../../../shared/services/user";

@Component({
  selector: 'app-tourist-dashboard',
  templateUrl: './tourist-dashboard.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.min.css']
})
export class TouristDashboardComponent implements OnInit {

  user: User;
  constructor(public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() {
    this.authService.getUser().subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }

}
