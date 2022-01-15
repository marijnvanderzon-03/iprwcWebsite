import {Component, NgModule, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";




@Component({
  selector: 'app-toegevoegd-popup',
  templateUrl: './toegevoegd-popup.component.html',
  styleUrls: ['./toegevoegd-popup.component.css']
})
export class ToegevoegdPopupComponent implements OnInit {

  onClose = ()=>{}

  data:{afkorting: string, beschrijving: string}
  constructor(public activeModal: NgbActiveModal) {

    this.data= {afkorting: "er is geen afkorting", beschrijving: "er is geen beschrijving"}
  }

  onSave(){
    this.activeModal.close();
    this.onClose();
  }

  ngOnInit(): void {
  }
}
