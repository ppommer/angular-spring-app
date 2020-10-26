import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { User } from "../../model/User";
import { v4 as uuid } from 'uuid';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  id: string;
  username: string;
  password: string;
  user: User;

  alreadyExists = false;
  invalid = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  register() {
    this.user = {
      id: uuid(),
      username: this.username,
      password: this.password
    };

    if (this.user.username && this.user.password) {
      this.authService.register(this.user).subscribe(data => {
        if (data.alreadyExists) {
          this.alreadyExists = true;
          this.username = '';
          this.password = '';
        } else {
          this.router.navigate(['/login']);
          window.alert("Registration successful. Please sign in.");
        }
      });
    } else {
      this.invalid = true;
    }
  }

  login() {
    this.router.navigate(['/login']);
  }
}
