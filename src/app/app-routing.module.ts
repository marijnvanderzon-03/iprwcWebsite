import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ModeratorComponent} from "./moderator/moderator.component";
import {MainComponent} from "./main/main.component";


export const routes: Routes = [
  { path: '', redirectTo: '/hoofdpagina', pathMatch: 'full'},
  {path: 'hoofdpagina', component: MainComponent},
  {path: 'moderator', component: ModeratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
