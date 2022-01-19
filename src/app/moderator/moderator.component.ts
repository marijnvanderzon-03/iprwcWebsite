import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../Models/product.model";
import {productService} from "../services/product.service";
import {FormControl, FormGroup, FormArray, Validators} from "@angular/forms";
import {NgbAlert, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {orderModel} from "../Models/order.model";
import {cartService} from "../services/cart.service";
import {orderLine} from "../Models/orderLine";
import {orderProduct} from "../Models/orderProduct";

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.css']
})
export class ModeratorComponent implements OnInit {
  allId: any = [];
  orders: orderLine[] = [];
  products : ProductModel[] = [];
  ProductForm = new FormGroup({
    name: new FormControl(),
    picture: new FormControl(),
    price: new FormControl(),
    quantity: new FormControl()
  });
  product: ProductModel = new ProductModel();

  constructor(private pService: productService, private cService: cartService) {
    this.getUniqueOrderId()
    this.getProductData();
  }

  ngOnInit(): void {
  }

  getName(){
    return this.ProductForm.get('name')?.value;
  }

  getPictureName(){
    return this.ProductForm.get('picture')?.value;
  }

  getPicture(){
    return this.ProductForm.get('picture');
  }

  getPrice(){
    return this.ProductForm.get('price')?.value
  }

  getQuantity(){
    return this.ProductForm.get('quantity')?.value
  }

  //@ts-ignore
  fileInputHandler(files) {
    let fileList = (<HTMLInputElement>files.target).files;
    if (fileList && fileList.length > 0) {
      let fileToUpload: File = fileList[0];
      this.pService.sendPicture(fileToUpload, () => {}, () => {});
    }
  }

  getProductData() : void{
    this.pService.getAllproducts( (data) => {
      this.products = data;
    }, () => {})
  }

  getUniqueOrderId() {
    this.cService.getAllorders((data) => {
      let orderList: any = [];
      let orderExist = false;
      let map = new Map<string, orderLine>(); //bevat orderID en orderLine(orderline bevat orderID en product[]
      data.forEach((order) =>{ //voor elk orderID
        let o = map.get(order.orderId);
        if (o){ //als er al een map bestaat voeg toe aan orderLine
          let op: orderProduct = new orderProduct();
          op.productName = order.productName;
          op.amount = order.amount;
          o.product.push(op);
        } else { //anders maak nieuwe aan
          let op: orderProduct = new orderProduct();
          op.productName = order.productName;
          op.amount = order.amount;
          let ol = new orderLine();
          ol.orderId = order.orderId;
          ol.product.push(op)
          map.set(order.orderId, ol);
        }
      });
      map.forEach(ol => {
        this.orders.push(ol);
      })
    }, () => {});
  }



    onSubmit(){
      if (this.ProductForm.valid) {
        this.product.product = this.getName();
        this.product.price = this.getPrice();
        this.product.image = this.getPictureName();
        this.product.quantity = this.getQuantity();
        this.ProductForm.reset()
        let foto = this.product.image;
        let replacementString = "C:\\fakepath\\";
        foto = foto.replace(replacementString, "");
        this.product.image = foto
        this.pService.createProduct(this.product, ()=>{}, () => {});
        alert("product is succesvol toegevoegd")

      }
    }

}
//todo alle bestellingen weergeven
//todo mooiere alert maken
//todo inloggen
