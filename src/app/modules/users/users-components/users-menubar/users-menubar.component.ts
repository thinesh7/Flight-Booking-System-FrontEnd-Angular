import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-menubar',
  templateUrl: './users-menubar.component.html',
  styleUrls: ['./users-menubar.component.scss']
})
export class UsersMenubarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('isUserValid');
    this.router.navigate(["users/users-login"]);
  }
}
