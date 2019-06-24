import { Component } from '@angular/core';
import { ModalController, NavParams, MenuController } from 'ionic-angular';

import { LendCdPage } from '../lend-cd/lend-cd';
//import { Pret } from '../../models/Pret';
import { PretService } from '../../services/pret.service';
/**
 * Generated class for the CdListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {

  CdList;

  constructor(public modalCtrl:ModalController, public navParams: NavParams,
    private pretService : PretService, private menuCtrl : MenuController) {
  }

   ionViewWillEnter(){
    this.CdList = this.pretService.CdList.slice();
  }

  onLoadCd(index:number){
    //this.navCtrl.push(LendBookPage,{book:book});
    let modal = this.modalCtrl.create(LendCdPage,{index:index});
    modal.present();
  }
   onToggleMenu() {
    this.menuCtrl.open();
  }


}
