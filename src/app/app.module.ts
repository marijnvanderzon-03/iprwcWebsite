import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MainComponent,
    ModeratorComponent,
    ToegevoegdPopupComponent,
    HeaderComponent,
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
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})

export class AppModule{}
