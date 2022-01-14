import {Component, NgModule, OnInit} from '@angular/core';
import {}



@Component({
  selector: 'app-toegevoegd-popup',
  templateUrl: './toegevoegd-popup.component.html',
  styleUrls: ['./toegevoegd-popup.component.css']
})
export class ToegevoegdPopupComponent implements OnInit {

  onClose = ()=>{}

  data:{afkorting: string, beschrijving: string}
  constructor() {
    this.data= {afkorting: "er is geen afkorting", beschrijving: "er is geen beschrijving"}
  }


  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }
  //
  // onSave(){
  //   this.activeModal.close();
  //   this.onClose();
  // }

  ngOnInit(): void {
  }
}
