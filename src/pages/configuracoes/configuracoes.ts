import { HomePage } from './../home/home';
import { MoviesPage } from './../movies/movies';
import { SobrePage } from './../sobre/sobre';
import { FeedPage } from './../feed/feed';
import { PerfilPage } from './../perfil/perfil';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {

  rootPage = PerfilPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracoesPage');
  }

  abrirConfiguracao(){
    this.navCtrl.push(ConfiguracoesPage);
  }  
  abrirPerfil(){
    this.navCtrl.push(PerfilPage);
  }  
  abrirSobre(){
    this.navCtrl.push(SobrePage);
  }  
  abrirFeed(){
    this.navCtrl.push(FeedPage);
  }  
  abrirMovies(){
    this.navCtrl.push(MoviesPage);
  }  

  abrirHome(){
    this.navCtrl.push(HomePage);
  }
 
}
