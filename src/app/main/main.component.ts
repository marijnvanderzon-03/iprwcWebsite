import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RouterModule} from "@angular/router";
import {ProductModel} from "../Models/product.model";
import {productService} from "../services/product.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  products : ProductModel[] = [];
  constructor(private productService: productService) {
    this.getProductData()
  }

  ngOnInit() {
  }

  getProductData() : void{
    this.productService.getAllproducts( (data) => {})
    this.products = this.data;
    console.log(this.products)
  }

}
