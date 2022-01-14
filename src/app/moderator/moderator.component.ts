import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../Models/product.model";
import {productService} from "../services/product.service";
import {FormControl, FormGroup, FormArray, Validators} from "@angular/forms";

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.css']
})
export class ModeratorComponent implements OnInit {
  ProductForm = new FormGroup({
    name: new FormControl(),
    picture: new FormControl(),
    price: new FormControl(),
    quantity: new FormControl()
  });
  product: ProductModel = new ProductModel();

  constructor(private pService: productService) {
  }

  ngOnInit(): void {
  }

  getName(){
    return this.ProductForm.get('name')?.value;
  }

  getPicture(){
    return this.ProductForm.get('picture')?.value;
  }

  getPrice(){
    return this.ProductForm.get('price')?.value
  }

  getQuantity(){
    return this.ProductForm.get('quantity')?.value
  }
  onSubmit() {
    if(this.ProductForm.valid) {
      this.product.product = this.getName();
      this.product.price = this.getPrice();
      this.product.image = this.getPicture();
      this.product.quantity = this.getQuantity();
      this.ProductForm.reset()
      this.pService.createProduct(this.product, ()=>{})
    }
  }

}
