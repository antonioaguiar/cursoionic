import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TheMovieDbProvider } from './../../providers/the-movie-db/the-movie-db';

/**
 * Generated class for the MovieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
  providers: [TheMovieDbProvider]
})
export class MovieDetailPage {
  
  public movie;
  public movie_id;
  public swipe = 0;
  public tap = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private movieProvider: TheMovieDbProvider,) {
  }
 
  swipeEvent(e) {
    this.swipe++;
    console.log(this.swipe);
  }
  tapEvent(e) {
    this.tap++
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter MovieDetailPage');
    //recuperar parametro recebido
    this.movie_id = this.navParams.get("id");
    
    //console.log("movie details..:" +  this.movie_id);

    this.movieProvider.getMovieDetails(this.movie_id).subscribe(
      data=>{
        let response = (data as any)._body;
        this.movie = JSON.parse(response);
       // console.log(JSON.stringify(this.movie));
      }, error => {
        console.log(error);
      }
    )

  }

}
