import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "../login.service";
import {AccountModel} from "../Models/account.model";
import {Router} from "@angular/router";
import {roleModel} from "../Models/roleModel";
import {roleUser} from "../Models/roleUser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  RegisterForm = new FormGroup({
    email: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl(),
    password: new FormControl()
  });

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  public getRole(emailAdres: string){
    let role;
    this.loginService.getRole(emailAdres, (data) =>{
      role = data;

    }, ()=>{})
  }

  Login(){
    let email = this.LoginForm.get('email')?.value;
    let password = this.LoginForm.get('password')?.value;
    this.loginService.login(email, password, (data)=>{
      localStorage.setItem('token', data.token);
      this.router.navigate(['hoofdpagina']);
    }, ()=>{});
  }

  Register(){
    let email = this.RegisterForm.get('email')?.value;
    let password = this.RegisterForm.get('password')?.value;
    let firstname = this.RegisterForm.get('firstname')?.value;
    let lastname = this.RegisterForm.get('lastname')?.value;
    console.log(email, password, firstname, lastname);
    let account:  AccountModel = new AccountModel();
    account.email = email;
    account.password = password;
    account.firstName = firstname;
    account.lastName = lastname;
    this.loginService.createAccount(account, ()=>{
      alert("account succesvol toegevoegd");
    }, ()=>{});
  }

  createRole(){
    let role : roleModel = new roleModel();
    role.name = 'admin';
    this.loginService.createRole(role, () => {
      console.log("gelukt")
    }, ()=> {});
  }

  giveRole(){
    let role : roleUser = new roleUser();
    role.email = 'testmail@gmail.com';
    role.roleName = 'admin'
    this.loginService.giveRole(role, () => {
      console.log("gelukt")
    }, ()=> {});
  }
}
