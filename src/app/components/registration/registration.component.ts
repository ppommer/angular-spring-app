import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AddRequest } from '../../model/AddRequest';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';


export function equalValueValidator(targetKey: string, toMatchKey: string): ValidatorFn {
  return (group: FormGroup): { [key: string]: any } => {
    const target = group.controls[targetKey];
    const toMatch = group.controls[toMatchKey];
    if (target.touched && toMatch.touched) {
      if (
        target.value != toMatch.value &&
        target.valid && toMatch.valid
      ) {
        toMatch.setErrors({ equalValue: targetKey });
      }
    }
    return null;
  };
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  addRequest: AddRequest;
  id: string;

  hide1 = true;
  hide2 = true;
  alreadyExists = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) {

    this.registrationForm = this.formBuilder.group({
        username: ['', [
          Validators.required,
          Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,4}')
        ]],
        password: ['', [
          Validators.required,
          Validators.minLength(8)
        ]],
        confirmPassword: ['', [
          Validators.required,
          Validators.minLength(8)
        ]]
      },
      { validator: equalValueValidator('password', 'confirmPassword') }
    );
  }

  ngOnInit(): void {}

  register() {

    if (
      !this.registrationForm.get('password').errors &&
      !this.registrationForm.get('username').errors &&
      !this.registrationForm.get('confirmPassword').errors
    ) {

      this.addRequest = {
        username: this.registrationForm.get('username').value,
        password: this.registrationForm.get('password').value
      };

      this.authService.register(this.addRequest).subscribe(data => {
        if (data.alreadyExists) {
          this.alreadyExists = true;
        } else {
          this.router.navigate(['/login']);
          window.alert('Registration successful. Please sign in.');
        }
      });
    }
  }

  login() {
    this.router.navigate(['/login']);
  }
}
