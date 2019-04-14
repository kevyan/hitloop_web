import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = undefined;
  email = undefined;
  password = undefined;

  isLoading = false;

  onLogin(form: NgForm) {
    console.log(form.value);
  }

  constructor() { }

  ngOnInit() {
  }
}
