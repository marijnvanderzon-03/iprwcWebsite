import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {ProductModel} from "../Models/product.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class productService {

  constructor(private http : HttpService) { }

  getAllproducts(implementation : (data : ProductModel[]) => void){
    this.http.get<ProductModel[]>("/product", new Map<string, string>(),implementation);
  }

  createProduct(product : ProductModel, implementation : (data : ProductModel) => void) {
    this.http.post<ProductModel>("/product", product, implementation);
  }

  sendPicture(picture: File, implementation: (data: FormData) => void) {
    let formData: FormData = new FormData();
    formData.append('file', picture, picture?.name)
    this.http.postFormData<any>("/uploadFile", formData, implementation)
  }

  public raiseAmountInCard(product: ProductModel){
   let currentAmmount = product.amountInCart;
   console.log("current ammount", currentAmmount)

  }


  deleteProduct(product : ProductModel, implementation : (data : ProductModel) => void) {
    this.http.delete<ProductModel>("/product", product, implementation);
  }

  updateProduct(product : ProductModel, implementation : (data : ProductModel[]) => void) {
    this.http.put<ProductModel[]>("/product", [product, product], implementation);
  }


}
