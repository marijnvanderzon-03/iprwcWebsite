import {Component, NgModule, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {cartService} from "../../services/cart.service";
import {orderModel} from "../../Models/order.model";




@Component({
  selector: 'app-toegevoegd-popup',
  templateUrl: './toegevoegd-popup.component.html',
  styleUrls: ['./toegevoegd-popup.component.css']
})
export class ToegevoegdPopupComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  onClose = ()=>{

  }

  onSave(){
    this.activeModal.close();
    this.onClose();
  }

  ngOnInit(): void {
  }

}

