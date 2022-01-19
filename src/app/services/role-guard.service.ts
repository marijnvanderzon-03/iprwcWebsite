import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot} from "@angular/router";
import {AuthServiceService} from "./auth-service.service";
import jwt_decode from 'jwt-decode';
import {LoginComponent} from "../login/login.component";
import {LoginService} from "../login.service";

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate{

  constructor(public Auth: AuthServiceService, public router: Router, private loginS: LoginService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let login : LoginComponent = new LoginComponent( this.loginS, this.router);
    const expectedRole = route.data['expectedRole'];
    const token = localStorage.getItem('token');
    if (token) {
      const tokenPayload: any = jwt_decode(token);
      let role = tokenPayload.role;


      if (!this.Auth.isAuthenticated() || role !== expectedRole) {
        this.router.navigate(['login']);
        console.log("je bent terug gestuurd want token is invalid")
        return false;
      }
      return true;
    }
    this.router.navigate(['login']);
    console.log("je bent terug gestuurd want je hebt geen token")
    return false
  }
}
