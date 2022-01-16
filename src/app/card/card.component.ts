import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../Models/product.model";
import {HeaderComponent} from "../header/header.component";
import {cartService} from "../services/cart.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  product = new ProductModel();

  constructor(private cartService: cartService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.cartService.addItemToCart(this.product);
  }

}
