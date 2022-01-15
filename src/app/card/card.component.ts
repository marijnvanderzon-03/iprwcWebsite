import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../Models/product.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  product = new ProductModel();

  constructor() { }

  ngOnInit(): void {
  }

}
