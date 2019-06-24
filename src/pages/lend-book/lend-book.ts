import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { PretService } from '../../services/pret.service';

/**
 * Generated class for the LendBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit {
  index:number;
  book;
  constructor(public navCtrl: NavController, public navParams: NavParams,
   public alertCtrl: AlertController, public viewCtrl : ViewController,
   private pretService : PretService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.pretService.booksList[this.index];
  }
onToggleBook(){
      let alert = this.alertCtrl.create({
      title: 'Êtes-vous certain(e) de vouloir continuer ?',
      subTitle: 'Vous allez changer le statut du livre ',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Confirmer',
          handler: () => this.onTogglePret()
        }
      ]
    });
    alert.present();
 
}
onTogglePret(){
  this.book.isOn = !this.book.isOn;
  console.log('changed');
}
dismissModal(){
  this.viewCtrl.dismiss();
}
  

  
}
