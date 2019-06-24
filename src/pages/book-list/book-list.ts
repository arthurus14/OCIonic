import { Component } from '@angular/core';
import { ModalController, NavParams, MenuController  } from 'ionic-angular';
import { LendBookPage } from '../lend-book/lend-book';

//import { Pret } from '../../models/Pret';
import { PretService } from '../../services/pret.service';


/**
 * Generated class for the BookListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {
	booksList;

  constructor(public modalCtrl:ModalController, public navParams: NavParams,
  	private pretService : PretService, private menuCtrl : MenuController) {
  }

  ionViewWillEnter(){
  	this.booksList = this.pretService.booksList.slice();
  }

  onLoadBook(index:number){
  	//this.navCtrl.push(LendBookPage,{book:book});
  	let modal = this.modalCtrl.create(LendBookPage,{index:index});
  	modal.present();
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }
}
