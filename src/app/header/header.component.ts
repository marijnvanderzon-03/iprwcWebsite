import {Component, Input, OnInit} from '@angular/core';
import {cartService} from "../services/cart.service";
import {ProductModel} from "../Models/product.model";
import { Subscription } from 'rxjs';
import {productService} from "../services/product.service";
import {orderModel} from "../Models/order.model";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {OrcerConfirmPopupComponent} from "./orcer-confirm-popup/orcer-confirm-popup.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totaal = 0;
  totaalBedrag = 0;
  totaalObserver = this.cart.totaal.subscribe(value => {
    if (value === -1){
      this.totaal=0;
      this.totaalBedrag = 0;
    } else {
      this.totaal += 1;
      this.totaalBedrag = this.totaalBedrag + value;
    }
  })
  price: number | void = 0;
  public cartItems: ProductModel[] = [];
  cartSubscription: Subscription | undefined;
  cartObserver = {
    next: (products: any) =>{
      this.cartItems = products
    }
  }

  public getTotaal(){
    return this.totaal;
  }

  public resetTotaal(){
    this.totaal = 0;
  }

  public getTotaalBedrag(){
    return this.totaalBedrag;
  }

  public resetTotaalbedrag(){
    this.totaalBedrag = 0;
  }

  onBuy(){
  this.modalService.open(OrcerConfirmPopupComponent);
  // this.totaal = 0;
  // this.totaalBedrag = 0;
  }

  emptyCart(){
    this.cart.emptyCart();
  }

  constructor(public cart: cartService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.cartSubscription = this.cart.cartObservable.subscribe(this.cartObserver)
  }

}
