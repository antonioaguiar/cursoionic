import { MovieDetailPage } from './../movie-detail/movie-detail';
import { TheMovieDbProvider } from './../../providers/the-movie-db/the-movie-db';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
  providers: [TheMovieDbProvider]
})

export class MoviesPage {

  public moviesList = new Array<any>();
  public page = 1;
  public loader;
  public refresher;
  public isRefreshing : boolean = false;
  public isInfiniteScroll: boolean = false;
  public infiniteScroll;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: TheMovieDbProvider,
    public loadingCtrl: LoadingController) {
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando ..."
      //,
      //duration: 3000
    });
    this.loader.present();
  }

  closeLoading(){
    this.loader.dismiss();
  }

  //ionViewDidEnter executa sempre que entra na página
  //ionViewDidLoad executa somente uma vez quando carrega
  ionViewDidLoad() {
    this.carregarFilmes();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarFilmes();
  }

  abrirDetalhes(movie){
    this.navCtrl.push(MovieDetailPage, {id : movie.id});
  }

  doInfinite(infiniteScroll) {
    this.page ++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);
    //console.log('Begin async operation');
    console.log("pagina..:" + this.page);
  }

  carregarFilmes(newPage: boolean = false){
    this.presentLoading();
     
    this.movieProvider.getPopularMovies(this.page)
      .subscribe(data => {
        const response = (data as any);
        const objetoRetorno = JSON.parse(response._body);
        if (newPage){
          this.moviesList = this.moviesList.concat(objetoRetorno.results);
          this.infiniteScroll.complete();
        }else{
          this.moviesList = objetoRetorno.results;
        }
        this.closeLoading();
        if (this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }, error => {
        this.closeLoading();
        console.log(error);
      }
    )
  }

}
