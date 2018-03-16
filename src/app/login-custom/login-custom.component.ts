import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-login-custom',
  templateUrl: './login-custom.component.html',
  styleUrls: ['./login-custom.component.css']
})
export class LoginCustomComponent implements OnInit {
  model: User;
  loading = false;
  returnUrl: string;
  submitted = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {
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

    this.authenticationService.logout( );

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.submitted = true;
    this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                console.error( 'error: ' + error.message );
                this.loading = false;
            });
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
