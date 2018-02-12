import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-custom',
  templateUrl: './login-custom.component.html',
  styleUrls: ['./login-custom.component.css']
})
export class LoginCustomComponent implements OnInit {
  model: User;
  submitted = false;

  constructor() {
    this.model = new User();
    this.model.id = 0;
    this.model.firstName = 'P';
    this.model.lastName = 'N';
    this.model.username = 'viper';
    this.model.password = 'foobar';
  }

  ngOnInit() {
    // this.loginForm = new FormGroup({
    //   'username': new FormControl(this.model.username, [
    //     Validators.required,
    //     Validators.minLength(6)
    //   ]),
    //   'password': new FormControl(this.model.password, [
    //     Validators.required,
    //     Validators.minLength(8)
    //   ]),
    // });
  }

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
