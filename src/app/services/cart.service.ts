import { Injectable } from '@angular/core';
import {ProductModel} from "../Models/product.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class cartService {
public cart: ProductModel[] = [];
public cartObservable = of(this.cart);

  constructor() { }

  isIncart(product: ProductModel){
    return this.cart.includes(product);
  }

  public addItemToCart(product: ProductModel){
    if(!this.isIncart(product)){
      this.cart.push(product);
    } else{
      let index = null;
      index = this.cart.indexOf(product)
      this.cart[index].amountInCart +=1;
    }
  }

  getTotalProducts(){
    let size = this.cart.length;
    let index = 0;
    let amount = 0;
    for (index; index <= size; index++){
      amount +=this.cart[index].amountInCart;
    }
    return amount
  }

  getTotalPrice(){
    let size = this.cart.length;
    let index = 0;
    let price = 0;
    for (index; index <= size; index++){
      price +=(this.cart[index].price * this.cart[index].amountInCart);
    }
  }

  public emptyCart(){
    this.cart = [];
  }

  public getCartItems(){
    return this.cart
  }
}
