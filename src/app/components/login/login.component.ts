import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../model/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  user: User;
  id: string;

  hide = true;
  wrongAuthentication = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,4}')
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]]
    });
  }

  ngOnInit(): void {}

  login() {

    if (
      !this.loginForm.get('username').errors &&
      !this.loginForm.get('password').errors
    ) {

      this.user = {
        id: '',
        username: this.loginForm.get('username').value,
        password: this.loginForm.get('password').value
      };

      this.authService.login(this.user).subscribe(data => {
        if (data.authenticated) {
          this.authService.loggedIn = true;
          this.router.navigate(['/home']);
        } else {
          this.wrongAuthentication = true;
        }
      });
    }
  }

  register() {
    this.router.navigate(['/register']);
  }
}
