import {Component, Input, OnInit} from '@angular/core';
import {cartService} from "../../services/cart.service";
import {ProductModel} from "../../Models/product.model";
import {productService} from "../../services/product.service";

@Component({
  selector: 'app-voorraad-card',
  templateUrl: './voorraad-card.component.html',
  styleUrls: ['./voorraad-card.component.css']
})
export class VoorraadCardComponent implements OnInit {
  @Input()
  product = new ProductModel();

  aantal = 0;

  constructor(private cartService: cartService, private pService: productService) {}

  updateValue(e: any){
    this.aantal = e.target.value;
    this.product.quantity = e.target.value;
    this.pService.updateProduct(this.product, () => {}, () => {})
  }
  ngOnInit(): void {
    this.aantal = this.product.quantity;
  }

  onClick(){
    this.cartService.addItemToCart(this.product);
  }

}
