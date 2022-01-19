import {Component, Input, OnInit} from '@angular/core';
import {orderLine} from "../../Models/orderLine";

@Component({
  selector: 'app-orderline',
  templateUrl: './orderline.component.html',
  styleUrls: ['./orderline.component.css']
})
export class OrderlineComponent implements OnInit {
  @Input()
  order! : orderLine;
  @Input()
  index! : number;
  products! : any;



  constructor() {
  }

  ngOnInit(): void {
    this.products = this.order.product;
  }

}
