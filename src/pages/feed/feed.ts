import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nomeUsuario: string = "Antonio Aguiar";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public soma2Numeros(num1:number, num2:number): number {
      
    return num1 + num2;
  }

  ionViewDidLoad() {
        console.log('ionViewDidLoad FeedPage');
        // alert(this.soma2Numeros(10,20));
      }

}
