export class ProductModel{
  product : string;
  price : number;
  image : string;
  quantity : number;
  amountInCart : number;

  constructor() {
    this.product = "";
    this.price = 0;
    this.image = ""
    this.quantity = 0;
    this.amountInCart = 0;
  }

}
