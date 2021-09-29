import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from './../authentication.service';
import { NotificationService } from '@progress/kendo-angular-notification';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = { email: '', password: '' };

  loading = false;

  constructor(
    private service: AuthenticationService,
    private router: Router,
    private notification: NotificationService //invalid login message
  ) {}

  ngOnInit(): void {}

  // call the login function from the auth service
  // if valid, redirect to list page
  // if invalid, show error notification
  submit(form: NgForm) {
    this.loading = true;
    this.service
      .login(form.value.email, form.value.password)
      .then(response => {
        if (response) {
          this.loading = false;
          this.router.navigate(['/list']);
        } else {
          this.displayErrorNotification();
          this.loading = false;
        }
      })
      .catch(error => {});
    form.reset();
  }

  displayErrorNotification() {
    this.notification.show({
      content: 'Username and password are incorrect',
      cssClass: 'button-notification',
      animation: { type: 'slide', duration: 400 },
      position: { horizontal: 'center', vertical: 'top' },
      type: { style: 'error', icon: true },
      closable: true,
    });
  }
}
