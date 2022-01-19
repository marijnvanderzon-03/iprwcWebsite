import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {ProductModel} from "../Models/product.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class productService {

  constructor(private http : HttpService) { }

  getAllproducts(implementation : (data : ProductModel[]) => void, onFailure : () => void){
    this.http.get<ProductModel[]>("/product", new Map<string, string>(),implementation, onFailure);
  }

  createProduct(product : ProductModel, implementation : (data : ProductModel) => void, onFailure : () => void) {
    this.http.post<ProductModel>("/product", product, implementation, onFailure);
  }

  sendPicture(picture: File, implementation: (data: FormData) => void, onFailure : () => void) {
    let file : File = picture;
    let formData: FormData = new FormData();
    formData.append('file', file)
    this.http.post<any>("/uploadFile", formData, implementation, onFailure)
  }

  public raiseAmountInCard(product: ProductModel){
   let currentAmmount = product.amountInCart;
   console.log("current ammount", currentAmmount)

  }


  deleteProduct(product : ProductModel, implementation : (data : ProductModel) => void, onFailure : () => void) {
    this.http.delete<ProductModel>("/product", product, implementation, onFailure);
  }

  updateProduct(product : ProductModel, implementation : (data : ProductModel[]) => void, onFailure : () => void) {
    this.http.put<ProductModel[]>("/product", [product, product], implementation, onFailure);
  }


}
