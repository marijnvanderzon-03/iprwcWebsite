import { Component, OnInit } from '@angular/core';
import {cartService} from "../services/cart.service";
import {ProductModel} from "../Models/product.model";
import { Subscription } from 'rxjs';
import {productService} from "../services/product.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totaal = 0;
  price: number | void = 0;
  public cartItems: ProductModel[] = [];
  cartSubscription: Subscription | undefined;
  cartObserver = {
    next: (products: any) =>{
      this.cartItems = products
      this.price = this.cart.getTotalPrice()

      this.totaal = this.cart.getTotalProducts();
      //todo on new carditem display total amount of items

      //todo on new carditem display price
    }
  }

  getTotaal(){
    return this.totaal;
  }

  public setTotaal(totaal: number){
    this.totaal = totaal
  }

  constructor(public cart: cartService) { }

  ngOnInit(): void {
    this.cartSubscription = this.cart.cartObservable.subscribe(this.cartObserver)
  }

}
