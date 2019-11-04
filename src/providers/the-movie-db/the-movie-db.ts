import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

//import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

/*
  Generated class for the TheMovieDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TheMovieDbProvider {

  constructor(
      public http: Http
  ) {
    console.log('Hello TheMovieDbProvider Provider');
  }

  private theMovieDB = "https://api.themoviedb.org/3";
  private parametros = "&language=pt-BR&api_key="+this.getApiKey();

  getLatestMovies(page = 1) {
    return this.http.get(this.theMovieDB + `/movie/latest?page=${page}`+ this.parametros);
  }

  getPopularMovies(page = 1) {
    console.log("chamando página..:" + page);

    return this.http.get(this.theMovieDB + `/movie/popular?page=${page}`+ this.parametros);
  }

  getApiKey(): string{
    return "xxxx";
  }

  getMovieDetails(movie_id){
    //https://api.themoviedb.org/3/movie/{movie_id}?api_key={key}&language=pt-BR
    return this.http.get(this.theMovieDB + `/movie/${movie_id}` + "?language=pt-BR&api_key="+this.getApiKey());
  }

}
