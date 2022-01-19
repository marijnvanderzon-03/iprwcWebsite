import { Injectable } from '@angular/core';
import {ProductModel} from "../Models/product.model";
import {Observable, of, Subject} from "rxjs";
import {HttpService} from "./http.service";
import {orderModel} from "../Models/order.model";

@Injectable({
  providedIn: 'root'
})
export class cartService {
  totaal : Subject<number> = new Subject<number>();
public cart: ProductModel[] = [];
public cartObservable = of(this.cart);

  constructor(private http: HttpService) { }

  isIncart(product: ProductModel){
    return this.cart.includes(product);
  }

  public addItemToCart(product: ProductModel){
    if(!this.isIncart(product)){
      this.cart.push(product);
      this.totaal.next(product.price);
    } else{
      let index = null;
      index = this.cart.indexOf(product)
      this.cart[index].amountInCart +=1;
      this.totaal.next(product.price);
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
    this.cart.length = 0
  }

  public getCartItems(){
    return this.cart
  }

  createOrder(order : orderModel, implementation : (data : orderModel) => void, onFailure : () => void){
    this.http.post<orderModel>("/order", order, implementation, onFailure);
  }

  getNewOrderId(implementation : (data : String) => void, onFailure : () => void){
    return this.http.get("/orderId",  new Map<string, string>(),implementation, onFailure)
  }

  public getOrderById(implementation: (data: string) => void, onFailure : () => void) {
    return this.http.get<string>("/orderById", new Map<string, string>(), implementation, onFailure)
  }

  public getAllorders(implementation : (data : orderModel[]) => void, onFailure : () => void){
    this.http.get<orderModel[]>("/order", new Map<string, string>(),implementation, onFailure);
  }
}
