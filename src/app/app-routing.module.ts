import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ModeratorComponent} from "./moderator/moderator.component";
import {MainComponent} from "./main/main.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {RoleGuardService} from "./services/role-guard.service";
import {LoginComponent} from "./login/login.component";


export const routes: Routes = [
  { path: '', redirectTo: '/hoofdpagina', pathMatch: 'full'},
  {path: 'hoofdpagina', component: MainComponent, canActivate: [AuthGuardService]},
  {path: 'moderator', component: ModeratorComponent, canActivate: [RoleGuardService], data: {expectedRole: 'admin'},},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
