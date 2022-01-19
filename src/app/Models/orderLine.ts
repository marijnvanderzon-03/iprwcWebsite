import {orderProduct} from "./orderProduct";

export class orderLine{
  orderId: string;
  product: orderProduct[];

  constructor() {
    this.orderId = "";
    this.product = [];
  }

}
