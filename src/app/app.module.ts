import {InjectionToken, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MainComponent } from './main/main.component';
import { ModeratorComponent } from './moderator/moderator.component';
import { RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ToegevoegdPopupComponent } from './moderator/toegevoegd-popup/toegevoegd-popup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import {cartService} from "./services/cart.service";
import { OrcerConfirmPopupComponent } from './header/orcer-confirm-popup/orcer-confirm-popup.component';
import { VoorraadCardComponent } from './moderator/voorraad-card/voorraad-card.component';
import { OrderlineComponent } from './moderator/orderline/orderline.component';
import { LoginComponent } from './login/login.component';
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MainComponent,
    ModeratorComponent,
    ToegevoegdPopupComponent,
    HeaderComponent,
    OrcerConfirmPopupComponent,
    VoorraadCardComponent,
    OrderlineComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [HttpClientModule, JwtHelperService],
  bootstrap: [AppComponent]
})

export class AppModule{}
