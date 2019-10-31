import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public feed = {
    Title : "Antonio Aguiar",
    Date : "30 de novembro de 2019",
    Content : "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
    Image : "assets/imgs/advance-card-bttf.png",
    Likes : "12 likes",
    Comments : "4 comentários",
    TimeAgo : "5 meses"
  } 

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
