import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {ProductModel} from "../Models/product.model";

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

  deleteProduct(product : ProductModel, implementation : (data : ProductModel) => void) {
    this.http.delete<ProductModel>("/product", product, implementation);
  }

  updateProduct(product : ProductModel, implementation : (data : ProductModel[]) => void) {
    this.http.put<ProductModel[]>("/product", [product, product], implementation);
  }


}
