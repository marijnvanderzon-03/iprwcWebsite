import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../Models/product.model";
import {productService} from "../services/product.service";
import {FormControl, FormGroup, FormArray, Validators} from "@angular/forms";

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.css']
})
export class ModeratorComponent implements OnInit {
  ProductForm = new FormGroup({
    name: new FormControl(),
    picture: new FormControl(),
    price: new FormControl(),
    quantity: new FormControl()
  });
  product: ProductModel = new ProductModel();

  constructor(private pService: productService) {
  }

  ngOnInit(): void {
  }

  getName(){
    return this.ProductForm.get('name')?.value;
  }

  getPictureName(){
    return this.ProductForm.get('picture')?.value;
  }

  getPicture(){
    return this.ProductForm.get('picture');
  }

  getPrice(){
    return this.ProductForm.get('price')?.value
  }

  getQuantity(){
    return this.ProductForm.get('quantity')?.value
  }

  //@ts-ignore
  fileInputHandler(files) {
    //todo find way to only send picture when sending form
    let fileList = (<HTMLInputElement>files.target).files;
    if (fileList && fileList.length > 0) {
      let fileToUpload: File = fileList[0];
      this.pService.sendPicture(fileToUpload, () => {
      });
    }
  }
    onSubmit(){
      if (this.ProductForm.valid) {
        this.product.product = this.getName();
        this.product.price = this.getPrice();
        this.product.image = this.getPictureName();
        this.product.quantity = this.getQuantity();
        this.ProductForm.reset()
        let foto = this.product.image;
        let replacementString = "C:\\fakepath\\";
        foto = foto.replace(replacementString, "");
        this.product.image = foto
        this.pService.createProduct(this.product, ()=>{});
      }
    }

}
