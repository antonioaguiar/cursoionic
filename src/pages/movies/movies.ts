import { TheMovieDbProvider } from './../../providers/the-movie-db/the-movie-db';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
  providers: [TheMovieDbProvider]
})

export class MoviesPage {

  public moviesList = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: TheMovieDbProvider) {
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies()
      .subscribe(data => {
        const response = (data as any);
        const objetoRetorno = JSON.parse(response._body);
        console.log(objetoRetorno);
      }, error => {
        console.log(error);
      }
    )

    this.movieProvider.getPopularMovies()
      .subscribe(data => {
        const response = (data as any);
        const objetoRetorno = JSON.parse(response._body);
        this.moviesList = objetoRetorno.results;
        console.log(this.moviesList);
      }, error => {
        console.log(error);
      }
    )

  }

}
