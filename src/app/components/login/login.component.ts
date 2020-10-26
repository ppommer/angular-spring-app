import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { User } from "../../model/User";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  user: User;

  invalid = false;
  wrongAuthentication = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void { }

  login() {
    this.user = {
      id: '',
      username: this.username,
      password: this.password
    };

    if (this.user.username && this.user.password) {
      this.authService.login(this.user).subscribe(data => {
        if (data.authenticated) {
          this.authService.loggedIn = true;
          this.router.navigate(['/home']);
        } else {
          this.username = '';
          this.password = '';
          this.invalid = false;
          this.wrongAuthentication = true;
        }
      });
    } else {
      this.username = '';
      this.password = '';
      this.wrongAuthentication = false;
      this.invalid = true;
    }
  }

  register() {
    this.router.navigate(['/register']);
  }
}
