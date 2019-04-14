import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public authSerice: AuthService) { }

  username = undefined;
  password = undefined;
  email = undefined;

  isLoading = false;

  onSignup(form: NgForm) {
    console.log(form.value);
    if (form.invalid) {
      return;
    }
    this.authSerice.createUser(form.value.email, form.value.username, form.value.password);
  }


  ngOnInit() {
  }

}
