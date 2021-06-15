import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from "@angular/router";
import { FormBuilder } from '@angular/forms';
import { EventregiService } from '../eventregi.service'
declare let alertify: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform: FormGroup;
  username1: string;
  password1: any;
  eventservice:any
  constructor(private serv: EventregiService, private rout: Router, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myform = this._formBuilder.group({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    })
  }
  onSubmit() {

    let username = this.myform.get('username').value;
    let password = this.myform.get('password').value;



    this.serv.loginuser().subscribe((result) => {
      console.warn(result)

      console.warn(result.valueOf())

    })

    if (username === 'ashish' && password === '1234') {
      this.rout.navigate(['/Eventlist']);
      alertify.alert('Login', 'Welcome' + ' ' + username + ' ' + '....! You have successfully login...!!');
    }
    else {
      alertify.alert('Error!', 'Please enter correct credentils.....!!');
      this.myform.reset({});

    }
  }
  login() {
    if ((this.myform.value.username == this.serv.configData.username) && (this.myform.value.password == this.serv.configData.password)) {
      sessionStorage.setItem('authenticate', 'true');
      sessionStorage.setItem('username', this.myform.value.username);
      alertify.alert('Login', 'Welcome' + ' ' + this.myform.value.username + ' ' + '....! You have successfully login...!!');
      this.rout.navigate(['/Eventlist']);
     
    }
    else {
      
      alertify.alert('Error!', 'Please enter correct credentials.....!!');
    }
  }

}
