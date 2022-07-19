import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, public auth: AngularFireAuth, private router: Router) {

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
    });
  }

  confirmLogin() {
    const { email, password } = this.loginForm.value
    this.auth.signInWithEmailAndPassword
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Login successful');
        this.router.navigate(['']);
      })
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
    console.log(email, password)
  };

}
