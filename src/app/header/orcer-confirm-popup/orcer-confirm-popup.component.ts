import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {orderModel} from "../../Models/order.model";
import {cartService} from "../../services/cart.service";
import {HeaderComponent} from "../header.component";
import {ProductModel} from "../../Models/product.model";
import {productService} from "../../services/product.service";

@Component({
  selector: 'app-orcer-confirm-popup',
  templateUrl: './orcer-confirm-popup.component.html',
  styleUrls: ['./orcer-confirm-popup.component.css']
})
export class OrcerConfirmPopupComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private cart: cartService, private productService: productService) { }

  onClose = ()=>{
    let order :orderModel = new orderModel();
    this.cart.getNewOrderId((rowId) => {
      // @ts-ignore
      order.orderId = rowId;

      for (let product of this.cart.cart) {
        order.amount = product.amountInCart;
        order.productName = product.product;
        this.cart.createOrder(order, () => {
        }, () => {});
        console.log(product.product, product.quantity);
        product.quantity -= product.amountInCart;
        this.productService.updateProduct(product, ()=> {}, () => {})
      }
      this.cart.totaal.next(-1);
      this.cart.emptyCart();
    }, () =>{});
  }

  onSave(){
    this.activeModal.close();
    this.onClose();
  }

  ngOnInit(): void {
  }

}
