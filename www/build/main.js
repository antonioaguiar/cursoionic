webpackJsonp([0],{

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailPageModule", function() { return MovieDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movie_detail__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MovieDetailPageModule = /** @class */ (function () {
    function MovieDetailPageModule() {
    }
    MovieDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__movie_detail__["a" /* MovieDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__movie_detail__["a" /* MovieDetailPage */]),
            ],
        })
    ], MovieDetailPageModule);
    return MovieDetailPageModule;
}());

//# sourceMappingURL=movie-detail.module.js.map

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/configuracoes/configuracoes.module": [
		158
	],
	"../pages/feed/feed.module": [
		162
	],
	"../pages/intro/intro.module": [
		163
	],
	"../pages/movie-detail/movie-detail.module": [
		116
	],
	"../pages/movies/movies.module": [
		165
	],
	"../pages/perfil/perfil.module": [
		166
	],
	"../pages/sobre/sobre.module": [
		167
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesPageModule", function() { return ConfiguracoesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuracoes__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfiguracoesPageModule = /** @class */ (function () {
    function ConfiguracoesPageModule() {
    }
    ConfiguracoesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__configuracoes__["a" /* ConfiguracoesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__configuracoes__["a" /* ConfiguracoesPage */]),
            ],
        })
    ], ConfiguracoesPageModule);
    return ConfiguracoesPageModule;
}());

//# sourceMappingURL=configuracoes.module.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movies_movies__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sobre_sobre__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feed_feed__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__perfil_perfil__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConfiguracoesPage = /** @class */ (function () {
    function ConfiguracoesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__perfil_perfil__["a" /* PerfilPage */];
    }
    ConfiguracoesPage_1 = ConfiguracoesPage;
    ConfiguracoesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfiguracoesPage');
    };
    ConfiguracoesPage.prototype.abrirConfiguracao = function () {
        this.navCtrl.push(ConfiguracoesPage_1);
    };
    ConfiguracoesPage.prototype.abrirPerfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__perfil_perfil__["a" /* PerfilPage */]);
    };
    ConfiguracoesPage.prototype.abrirSobre = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sobre_sobre__["a" /* SobrePage */]);
    };
    ConfiguracoesPage.prototype.abrirFeed = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__feed_feed__["a" /* FeedPage */]);
    };
    ConfiguracoesPage.prototype.abrirMovies = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__movies_movies__["a" /* MoviesPage */]);
    };
    ConfiguracoesPage.prototype.abrirHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    ConfiguracoesPage = ConfiguracoesPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({
            selector: 'page-configuracoes',template:/*ion-inline-start:"/Users/aguiar/Documents/Developer/ionic/cursoionic/src/pages/configuracoes/configuracoes.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="abrirHome()">\n        Home\n      </button>\n      <button ion-item (click)="abrirFeed()">\n        Feed\n      </button>\n      <button ion-item (click)="abrirMovies()">\n        Movies\n      </button>\n      <button ion-item (click)="abrirPerfil()">\n        Perfil\n      </button>\n      <button ion-item (click)="abrirSobre()">\n        Sobre\n      </button>      \n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/aguiar/Documents/Developer/ionic/cursoionic/src/pages/configuracoes/configuracoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* NavParams */]])
    ], ConfiguracoesPage);
    return ConfiguracoesPage;
    var ConfiguracoesPage_1;
}());

//# sourceMappingURL=configuracoes.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_the_movie_db_the_movie_db__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MovieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MovieDetailPage = /** @class */ (function () {
    function MovieDetailPage(navCtrl, navParams, movieProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.movieProvider = movieProvider;
        this.swipe = 0;
        this.tap = 0;
    }
    MovieDetailPage.prototype.swipeEvent = function (e) {
        this.swipe++;
        console.log(this.swipe);
    };
    MovieDetailPage.prototype.tapEvent = function (e) {
        this.tap++;
    };
    MovieDetailPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('ionViewDidEnter MovieDetailPage');
        //recuperar parametro recebido
        this.movie_id = this.navParams.get("id");
        //console.log("movie details..:" +  this.movie_id);
        this.movieProvider.getMovieDetails(this.movie_id).subscribe(function (data) {
            var response = data._body;
            _this.movie = JSON.parse(response);
            // console.log(JSON.stringify(this.movie));
        }, function (error) {
            console.log(error);
        });
    };
    MovieDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-movie-detail',template:/*ion-inline-start:"/Users/aguiar/Documents/Developer/ionic/cursoionic/src/pages/movie-detail/movie-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Detalhes do filme</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-card *ngIf="movie" (swipe)="swipeEvent($event)">\n\n        <ion-slides pager>\n\n            <ion-slide>\n\n                <img [src]="\'https://image.tmdb.org/t/p/w500/\'+movie.backdrop_path">\n                <ion-card-content>\n                    <ion-card-title>\n                        <h2 class="feed_title">{{movie.original_title}}</h2>\n                    </ion-card-title>\n                    <h1>{{movie.title}}</h1>\n                    <h2>{{movie.tagline}}</h2>\n                    <h4 class="feed_date">{{movie.release_date}}</h4>\n                    <hr>\n                    <p>{{movie.overview}}</p>\n                </ion-card-content>\n                <ion-row>\n                    <ion-col>\n                        <ion-list>\n                            <ion-list-header>\n                                Gênero\n                            </ion-list-header>\n                            <ion-item *ngFor="let genres of movie.genres">\n                                {{genres.name}}\n                            </ion-item>\n                        </ion-list>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        <ion-list>\n                            <ion-list-header>\n                                Produtoras\n                            </ion-list-header>\n                            <ion-item *ngFor="let company of movie.production_companies">\n                                <ion-thumbnail item-start>\n                                    <img [src]="\'https://image.tmdb.org/t/p/w500/\'+company.logo_path">\n                                </ion-thumbnail>\n                                <h2>{{company.name}}</h2>\n                                <p>Pais: {{company.origin_country}}</p>\n                            </ion-item>\n                        </ion-list>\n                    </ion-col>\n                </ion-row>\n            </ion-slide>\n\n            <ion-slide>\n                <img [src]="\'https://image.tmdb.org/t/p/w500/\'+movie.poster_path">\n            </ion-slide>\n\n        </ion-slides>\n\n    </ion-card>\n    <!--\n    <ion-card *ngIf="movie">\n\n        <ion-item>\n          <ion-avatar item-start>\n            <img [src]="\'https://image.tmdb.org/t/p/w500/\'+movie.backdrop_path">\n          </ion-avatar>\n          <h2 class="feed_title">{{movie.original_title}}</h2>\n          <h3>{{movie.title}}</h3>\n          <h3>{{movie.tagline}}</h3>\n          <p class="feed_date">{{movie.release_date}}</p>\n        </ion-item>\n    \n        <img [src]="\'https://image.tmdb.org/t/p/w500/\'+movie.backdrop_path">\n    \n        <ion-card-content>\n          <p>{{movie.overview}}</p>\n        </ion-card-content>\n\n        <ion-row>\n          <ion-col>\n            <button ion-button icon-start clear small>\n              <ion-icon name="thumbs-up"></ion-icon>\n              <div>{{movie.popularity}}</div>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button icon-start clear small>\n              <ion-icon name="star-outline"></ion-icon>\n              <div>{{movie.vote_count}}</div>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button icon-start clear small>\n              <ion-icon name="star-half"></ion-icon>\n              <div>{{movie.vote_average}}</div>\n            </button>\n          </ion-col>\n          <ion-col align-self-center text-center>\n            <ion-note>\n              {{movie.TimeAgo}}\n            </ion-note>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n              <ion-list>\n                  <ion-list-header>\n                    Gênero\n                  </ion-list-header>\n                  <ion-item *ngFor="let genres of movie.genres">\n                        {{genres.name}}\n                  </ion-item>\n                </ion-list>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-list>\n                    <ion-list-header>\n                        Produtoras\n                      </ion-list-header>\n                    <ion-item *ngFor="let company of movie.production_companies">\n                      <ion-thumbnail  item-start>\n                        <img [src]="\'https://image.tmdb.org/t/p/w500/\'+company.logo_path">\n                      </ion-thumbnail >\n                      <h2>{{company.name}}</h2>\n                      <p>Pais: {{company.origin_country}}</p>\n                    </ion-item>\n                  </ion-list>\n             </ion-col>\n        </ion-row>\n\n        \n      </ion-card>\n-->\n</ion-content>'/*ion-inline-end:"/Users/aguiar/Documents/Developer/ionic/cursoionic/src/pages/movie-detail/movie-detail.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_the_movie_db_the_movie_db__["a" /* TheMovieDbProvider */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_the_movie_db_the_movie_db__["a" /* TheMovieDbProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_the_movie_db_the_movie_db__["a" /* TheMovieDbProvider */]) === "function" && _c || Object])
    ], MovieDetailPage);
    return MovieDetailPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=movie-detail.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FeedPageModule = /** @class */ (function () {
    function FeedPageModule() {
    }
    FeedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__feed__["a" /* FeedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feed__["a" /* FeedPage */]),
            ],
        })
    ], FeedPageModule);
    return FeedPageModule;
}());

//# sourceMappingURL=feed.module.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intro__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntroPageModule = /** @class */ (function () {
    function IntroPageModule() {
    }
    IntroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */]),
            ],
        })
    ], IntroPageModule);
    return IntroPageModule;
}());

//# sourceMappingURL=intro.module.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [
            {
                title: "Welcome to the Docs!",
                description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
                image: "assets/img/ica-slidebox-img-1.png",
            },
            {
                title: "What is Ionic?",
                description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "assets/img/ica-slidebox-img-2.png",
            },
            {
                title: "What is Ionic Cloud?",
                description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "assets/img/ica-slidebox-img-3.png",
            }
        ];
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage.prototype.goToTabsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"/Users/aguiar/Documents/Developer/ionic/cursoionic/src/pages/intro/intro.html"*/'<ion-content class="tutorial-page">\n\n  <ion-slides pager>\n\n    <ion-slide class="slide-image">\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button color="primary" (click)="goToTabsPage()">Pular</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img src="assets/imgs/ica-slidebox-img-1.png" alt="">\n      <h2>Meu app</h2>\n      <div class="">\n        <p>Aqui vai um texto de ajuda para o usuário</p>\n      </div>\n    </ion-slide>\n\n    <ion-slide class="slide-image">\n      <img src="assets/imgs/ica-slidebox-img-2.png" alt="">\n      <h2>Slide 2</h2>\n    </ion-slide>\n\n    <ion-slide class="slide-image">\n      <img src="assets/imgs/ica-slidebox-img-3.png" alt="">\n      <h2>Slide 3</h2>\n    </ion-slide>\n\n    <ion-slide class="slide-image">\n      <img src="assets/imgs/ica-slidebox-img-4.png" alt="">\n      <h2>Slide 4</h2>\n      <a (click)="goToTabsPage()">Ir para Login</a>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"/Users/aguiar/Documents/Developer/ionic/cursoionic/src/pages/intro/intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesPageModule", function() { return MoviesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movies__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MoviesPageModule = /** @class */ (function () {
    function MoviesPageModule() {
    }
    MoviesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__movies__["a" /* MoviesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__movies__["a" /* MoviesPage */]),
            ],
        })
    ], MoviesPageModule);
    return MoviesPageModule;
}());

//# sourceMappingURL=movies.module.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PerfilPageModule = /** @class */ (function () {
    function PerfilPageModule() {
    }
    PerfilPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */]),
            ],
        })
    ], PerfilPageModule);
    return PerfilPageModule;
}());

//# sourceMappingURL=perfil.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobrePageModule", function() { return SobrePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sobre__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SobrePageModule = /** @class */ (function () {
    function SobrePageModule() {
    }
    SobrePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sobre__["a" /* SobrePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sobre__["a" /* SobrePage */]),
            ],
        })
    ], SobrePageModule);
    return SobrePageModule;
}());

//# sourceMappingURL=sobre.module.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_movie_detail_movie_detail_module__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_perfil_perfil_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_sobre_sobre_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_configuracoes_configuracoes_module__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_feed_feed_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_intro_intro_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_movies_movies_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_the_movie_db_the_movie_db__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/configuracoes/configuracoes.module#ConfiguracoesPageModule', name: 'ConfiguracoesPage', segment: 'configuracoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feed/feed.module#FeedPageModule', name: 'FeedPage', segment: 'feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/movie-detail/movie-detail.module#MovieDetailPageModule', name: 'MovieDetailPage', segment: 'movie-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/movies/movies.module#MoviesPageModule', name: 'MoviesPage', segment: 'movies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sobre/sobre.module#SobrePageModule', name: 'SobrePage', segment: 'sobre', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__pages_feed_feed_module__["FeedPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_intro_intro_module__["IntroPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_movies_movies_module__["MoviesPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__pages_configuracoes_configuracoes_module__["ConfiguracoesPageModule"],
                __WEBPACK_IMPORTED_MODULE_2__pages_sobre_sobre_module__["SobrePageModule"],
                __WEBPACK_IMPORTED_MODULE_1__pages_perfil_perfil_module__["PerfilPageModule"],
                __WEBPACK_IMPORTED_MODULE_0__pages_movie_detail_movie_detail_module__["MovieDetailPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_the_movie_db_the_movie_db__["a" /* TheMovieDbProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_config_config__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_intro_intro__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, configProvider) {
        var _this = this;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            var configAny = configProvider.getConfigData();
            var config = JSON.parse(configAny);
            console.log("Config.showSlide=" + config.showSlide);
            if (config == null) {
                //console.log("carregando config pela primeira vez");
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_intro_intro__["a" /* IntroPage */];
                configProvider.setConfigData(false);
            }
            else {
                if (config.showSlide == false) {
                    console.log("carregando TabsPage");
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__["a" /* TabsPage */];
                }
                else {
                    console.log("carregando IntroPage");
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_intro_intro__["a" /* IntroPage */];
                    configProvider.setConfigData(false);
                }
            }
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/aguiar/Documents/Developer/ionic/cursoionic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/aguiar/Documents/Developer/ionic/cursoionic/src/app/app.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__providers_config_config__["a" /* ConfigProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1__providers_config_config__["a" /* ConfigProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var config_key_name = "config";
var ConfigProvider = /** @class */ (function () {
    function ConfigProvider() {
        this.config = {
            showSlide: false,
            name: "",
            username: ""
        };
    }
    //recupera config do localstorage
    ConfigProvider.prototype.getConfigData = function () {
        var config = localStorage.getItem(config_key_name) || {};
        //console.log(config);
        return config;
    };
    //guardar config no localstorage    
    ConfigProvider.prototype.setConfigData = function (showSlide, name, username) {
        var config = {
            showSlide: false,
            name: "",
            username: ""
        };
        if (showSlide) {
            config.showSlide = showSlide;
        }
        if (name) {
            config.name = name;
        }
        if (username) {
            config.username = username;
        }
        localStorage.setItem(config_key_name, JSON.stringify(config));
    };
    ConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ConfigProvider);
    return ConfigProvider;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/aguiar/Documents/Developer/ionic/cursoionic/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/aguiar/Documents/Developer/ionic/cursoionic/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/aguiar/Documents/Developer/ionic/cursoionic/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/aguiar/Documents/Developer/ionic/cursoionic/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/aguiar/Documents/Developer/ionic/cursoionic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/aguiar/Documents/Developer/ionic/cursoionic/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__movie_detail_movie_detail__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_the_movie_db_the_movie_db__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MoviesPage = /** @class */ (function () {
    function MoviesPage(navCtrl, navParams, movieProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.movieProvider = movieProvider;
        this.loadingCtrl = loadingCtrl;
        this.moviesList = new Array();
        this.page = 1;
        this.isRefreshing = false;
        this.isInfiniteScroll = false;
    }
    MoviesPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando ..."
            //,
            //duration: 3000
        });
        this.loader.present();
    };
    MoviesPage.prototype.closeLoading = function () {
        this.loader.dismiss();
    };
    //ionViewDidEnter executa sempre que entra na página
    //ionViewDidLoad executa somente uma vez quando carrega
    MoviesPage.prototype.ionViewDidLoad = function () {
        this.carregarFilmes();
    };
    MoviesPage.prototype.doRefresh = function (refresher) {
        this.refresher = refresher;
        this.isRefreshing = true;
        this.carregarFilmes();
    };
    MoviesPage.prototype.abrirDetalhes = function (movie) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__movie_detail_movie_detail__["a" /* MovieDetailPage */], { id: movie.id });
    };
    MoviesPage.prototype.doInfinite = function (infiniteScroll) {
        this.page++;
        this.infiniteScroll = infiniteScroll;
        this.carregarFilmes(true);
        //console.log('Begin async operation');
        console.log("pagina..:" + this.page);
    };
    MoviesPage.prototype.carregarFilmes = function (newPage) {
        var _this = this;
        if (newPage === void 0) { newPage = false; }
        this.presentLoading();
        this.movieProvider.getPopularMovies(this.page)
            .subscribe(function (data) {
            var response = data;
            var objetoRetorno = JSON.parse(response._body);
            if (newPage) {
                _this.moviesList = _this.moviesList.concat(objetoRetorno.results);
                _this.infiniteScroll.complete();
            }
            else {
                _this.moviesList = objetoRetorno.results;
            }
            _this.closeLoading();
            if (_this.isRefreshing) {
                _this.refresher.complete();
                _this.isRefreshing = false;
            }
        }, function (error) {
            _this.closeLoading();
            console.log(error);
        });
    };
    MoviesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-movies',template:/*ion-inline-start:"/Users/aguiar/Documents/Developer/ionic/cursoionic/src/pages/movies/movies.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Movies</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page" padding> \n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n \n\n    <ion-card *ngFor="let movie of moviesList" (click)="abrirDetalhes(movie)">\n      <img [src]="\'https://image.tmdb.org/t/p/w500/\'+movie.backdrop_path">\n      <div class="card-title">{{movie.original_title}}</div>\n      <div class="card-subtitle">{{movie.popularity}}</div>\n    </ion-card>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n \n\n\n\n  <!--\n\n\n    <ion-card *ngFor="let movie of moviesList">\n        <img [src]="\'https://image.tmdb.org/t/p/w500/\'+movie.poster_path">\n        <ion-card-content>\n          <ion-card-title>\n              {{movie.original_title}}\n            </ion-card-title>\n          <p>\n              {{movie.overview}}\n          </p>\n        </ion-card-content>\n        <button ion-button block (click)="abrirDetalhes(movie)">Detalhes</button>\n      </ion-card>\n    -->\n  <!--\n  <ion-card *ngFor="let movie of moviesList">\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="\'https://image.tmdb.org/t/p/w500/\'+movie.poster_path">\n      </ion-avatar>\n      <h2 class="feed_title">{{movie.original_title}}</h2>\n      <h3>{{movie.title}}</h3>\n      <p class="feed_date">{{movie.release_date}}</p>\n    </ion-item>\n\n    <img [src]="\'https://image.tmdb.org/t/p/w500/\'+movie.backdrop_path">\n\n    <ion-card-content>\n      <p>{{movie.overview}}</p>\n    </ion-card-content>\n    <button ion-button block (click)="abrirDetalhes(movie)">Detalhes</button>\n  \n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>{{movie.popularity}}</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="star-outline"></ion-icon>\n          <div>{{movie.vote_count}}</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="star-half"></ion-icon>\n          <div>{{movie.vote_average}}</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          {{movie.TimeAgo}}\n        </ion-note>\n      </ion-col>\n    </ion-row>\n    <button ion-button block (click)="abrirDetalhes(movie)">Detalhes</button>\n  </ion-card>\n-->\n</ion-content>'/*ion-inline-end:"/Users/aguiar/Documents/Developer/ionic/cursoionic/src/pages/movies/movies.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_the_movie_db_the_movie_db__["a" /* TheMovieDbProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_the_movie_db_the_movie_db__["a" /* TheMovieDbProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */]])
    ], MoviesPage);
    return MoviesPage;
}());

//# sourceMappingURL=movies.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TheMovieDbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
/*
  Generated class for the TheMovieDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TheMovieDbProvider = /** @class */ (function () {
    function TheMovieDbProvider(http) {
        this.http = http;
        this.theMovieDB = "https://api.themoviedb.org/3";
        this.parametros = "&language=pt-BR&api_key=" + this.getApiKey();
        console.log('Hello TheMovieDbProvider Provider');
    }
    TheMovieDbProvider.prototype.getLatestMovies = function (page) {
        if (page === void 0) { page = 1; }
        return this.http.get(this.theMovieDB + ("/movie/latest?page=" + page) + this.parametros);
    };
    TheMovieDbProvider.prototype.getPopularMovies = function (page) {
        if (page === void 0) { page = 1; }
        console.log("chamando página..:" + page);
        return this.http.get(this.theMovieDB + ("/movie/popular?page=" + page) + this.parametros);
    };
    TheMovieDbProvider.prototype.getApiKey = function () {
        return "cccc";
    };
    TheMovieDbProvider.prototype.getMovieDetails = function (movie_id) {
        //https://api.themoviedb.org/3/movie/{movie_id}?api_key={key}&language=pt-BR
        return this.http.get(this.theMovieDB + ("/movie/" + movie_id) + "?language=pt-BR&api_key=" + this.getApiKey());
    };
    TheMovieDbProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], TheMovieDbProvider);
    return TheMovieDbProvider;
    var _a;
}());

//# sourceMappingURL=the-movie-db.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SobrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SobrePage = /** @class */ (function () {
    function SobrePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SobrePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SobrePage');
    };
    SobrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sobre',template:/*ion-inline-start:"/Users/aguiar/Documents/Developer/ionic/cursoionic/src/pages/sobre/sobre.html"*/'<!--\n  Generated template for the SobrePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    \n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>sobre</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/aguiar/Documents/Developer/ionic/cursoionic/src/pages/sobre/sobre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SobrePage);
    return SobrePage;
}());

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedPage = /** @class */ (function () {
    function FeedPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.feed = {
            Title: "Antonio Aguiar",
            Date: "30 de novembro de 2019",
            Content: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
            Image: "assets/imgs/advance-card-bttf.png",
            Likes: "12 likes",
            Comments: "4 comentários",
            TimeAgo: "5 meses"
        };
    }
    FeedPage.prototype.soma2Numeros = function (num1, num2) {
        return num1 + num2;
    };
    FeedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedPage');
        // alert(this.soma2Numeros(10,20));
    };
    FeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feed',template:/*ion-inline-start:"/Users/aguiar/Documents/Developer/ionic/cursoionic/src/pages/feed/feed.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Feed de notícias</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-card>\n\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/marty-avatar.png">\n            </ion-avatar>\n            <h2 class="feed_title">{{feed.Title}}</h2>\n            <p class="feed_date">{{feed.Data}}</p>\n        </ion-item>\n\n        <img src="{{feed.Image}}">\n\n        <ion-card-content>\n            <p>{{feed.Content}}</p>\n        </ion-card-content>\n\n        <ion-row>\n            <ion-col>\n                <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>{{feed.Likes}}</div>\n        </button>\n            </ion-col>\n            <ion-col>\n                <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>{{feed.Comments}}</div>\n        </button>\n            </ion-col>\n            <ion-col align-self-center text-center>\n                <ion-note>\n                    {{feed.TimeAgo}}\n                </ion-note>\n            </ion-col>\n        </ion-row>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/aguiar/Documents/Developer/ionic/cursoionic/src/pages/feed/feed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FeedPage);
    return FeedPage;
}());

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"/Users/aguiar/Documents/Developer/ionic/cursoionic/src/pages/perfil/perfil.html"*/'<ion-header>\n  <ion-navbar>\n    \n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Perfil</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/aguiar/Documents/Developer/ionic/cursoionic/src/pages/perfil/perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed_feed__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movies_movies__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuracoes_configuracoes__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__perfil_perfil__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sobre_sobre__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        //tab2Root = AboutPage;
        //tab3Root = ContactPage;
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__feed_feed__["a" /* FeedPage */];
        //tab5Root = IntroPage;
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_3__movies_movies__["a" /* MoviesPage */];
        this.tab7Root = __WEBPACK_IMPORTED_MODULE_4__configuracoes_configuracoes__["a" /* ConfiguracoesPage */];
        this.tab8Root = __WEBPACK_IMPORTED_MODULE_5__perfil_perfil__["a" /* PerfilPage */];
        this.tab9Root = __WEBPACK_IMPORTED_MODULE_6__sobre_sobre__["a" /* SobrePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/aguiar/Documents/Developer/ionic/cursoionic/src/pages/tabs/tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n    <!--ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab-->\n    <ion-tab [root]="tab4Root" tabTitle="Feed" tabIcon="md-paper"></ion-tab>\n    <ion-tab [root]="tab6Root" tabTitle="Filmes" tabIcon="videocam"></ion-tab>\n\n    <ion-tab [root]="tab7Root" tabTitle="Configurações" tabIcon="settings"></ion-tab>\n    <!--ion-tab [root]="tab8Root" tabTitle="Perfil" tabIcon="person"></ion-tab>\n    <ion-tab [root]="tab9Root" tabTitle="Sobre" tabIcon="about"></ion-tab-->\n</ion-tabs>'/*ion-inline-end:"/Users/aguiar/Documents/Developer/ionic/cursoionic/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map