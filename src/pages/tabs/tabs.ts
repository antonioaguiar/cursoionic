import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { MoviesPage } from './../movies/movies';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';
import { PerfilPage } from '../perfil/perfil';
import { SobrePage } from './../sobre/sobre'; 
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  //tab2Root = AboutPage;
  //tab3Root = ContactPage;
  tab4Root = FeedPage;
  //tab5Root = IntroPage;
  tab6Root = MoviesPage;
  tab7Root = ConfiguracoesPage;
  tab8Root = PerfilPage;
  tab9Root = SobrePage;
  constructor() {

  }
}
