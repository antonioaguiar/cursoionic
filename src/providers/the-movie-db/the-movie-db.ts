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
  private parametros = "?language=pt-BR&api_key="+this.getApiKey();
  getLatestMovies() {
    return this.http.get(this.theMovieDB + "/movie/latest" + this.parametros);
  }

  getPopularMovies(){
    return this.http.get(this.theMovieDB + "/movie/popular" + this.parametros);
  }

  getApiKey(): string{
    return "";
  }

}
