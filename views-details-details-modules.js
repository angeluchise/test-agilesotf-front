(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-details-details-modules"],{

/***/ "/32B":
/*!****************************************************!*\
  !*** ./src/app/views/details/details.component.ts ***!
  \****************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_movies_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/movies/movies.service */ "gTC3");
/* harmony import */ var _services_even_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/even.service */ "HlQW");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");








function DetailsComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.pathImagen + ctx_r0.movie.backdrop_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DetailsComponent_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.pathImagen + ctx_r1.movie.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DetailsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !actor_r3.profile_path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.pathImagen + actor_r3.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](actor_r3.original_name);
} }
class DetailsComponent {
    constructor(route, moviesService, globalState) {
        this.route = route;
        this.moviesService = moviesService;
        this.globalState = globalState;
        this.pageScroll = 1;
        this.actors = [];
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        console.log(this.id);
        this.route.queryParamMap.subscribe((params) => {
            this.movie = JSON.parse(params.get('data'));
            console.log(this.movie);
        });
        this.globalState.replaySubjectSubscribe('refresh', () => {
            this.pageScroll = 1;
            this.actors = [];
            this.getDetails(this.id, this.pageScroll);
        });
        this.getDetails(this.id, this.pageScroll);
    }
    onScroll() {
        this.pageScroll += 1;
        this.getDetails(this.id, this.pageScroll);
    }
    getDetails(id, page) {
        this.moviesService.getById(id, page).subscribe((data) => {
            console.log(data);
            this.actors = data.data;
            this.pathImagen = data.imageBaseUrl;
        });
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_movies_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_even_service__WEBPACK_IMPORTED_MODULE_3__["GlobalState"])); };
DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["app-details"]], decls: 18, vars: 7, consts: [[1, "container"], [1, "row"], [1, "col-12"], ["class", "cover-page-img", "alt", "portada", 3, "src", 4, "ngIf"], ["class", "img-poster", "alt", "portada", 3, "src", 4, "ngIf"], [1, "text-movie"], [1, "col-12", "m-top-40"], ["infiniteScroll", "", 1, "container", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrolled"], ["class", "col-6 col-md-3", 3, "hidden", 4, "ngFor", "ngForOf"], ["alt", "portada", 1, "cover-page-img", 3, "src"], ["alt", "portada", 1, "img-poster", 3, "src"], [1, "col-6", "col-md-3", 3, "hidden"], ["alt", "movie", 1, "img-movie", 3, "src"], [1, "text-center"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailsComponent_img_7_Template, 1, 1, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DetailsComponent_img_9_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Reparto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolled", function DetailsComponent_Template_div_scrolled_15_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DetailsComponent_div_17_Template, 5, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.original_title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pathImagen && ctx.movie.backdrop_path);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pathImagen && ctx.movie.poster_path);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.overview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.actors);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".cover-page-img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 40px;\n}\n\n.text-movie[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.img-poster[_ngcontent-%COMP%] {\n  float: left;\n  width: 202px;\n  padding-right: 23px;\n}\n\n.img-movie[_ngcontent-%COMP%] {\n  width: 100%;\n  object-fit: contain;\n  height: 400px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFJRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3Zlci1wYWdlLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLnRleHQtbW92aWUge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uaW1nLXBvc3RlciB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjAycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIzcHg7XG59XG4uaW1nLW1vdmllIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGhlaWdodDogNDAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-details',
                templateUrl: './details.component.html',
                styleUrls: ['./details.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_movies_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] }, { type: _services_even_service__WEBPACK_IMPORTED_MODULE_3__["GlobalState"] }]; }, null); })();


/***/ }),

/***/ "/BtA":
/*!*********************************************************!*\
  !*** ./src/app/views/details/details-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsRoutingModule", function() { return DetailsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details.component */ "/32B");





const routes = [
    {
        path: '',
        component: _details_component__WEBPACK_IMPORTED_MODULE_2__["DetailsComponent"]
    },
];
class DetailsRoutingModule {
}
DetailsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DetailsRoutingModule });
DetailsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DetailsRoutingModule_Factory(t) { return new (t || DetailsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DetailsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "pZpF":
/*!**************************************************!*\
  !*** ./src/app/views/details/details.modules.ts ***!
  \**************************************************/
/*! exports provided: DetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsModule", function() { return DetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-routing.module */ "/BtA");
/* harmony import */ var _details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details.component */ "/32B");
/* harmony import */ var ngx_light_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-light-carousel */ "kz0O");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _components_header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/header/header.module */ "WinS");









class DetailsModule {
}
DetailsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DetailsModule });
DetailsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DetailsModule_Factory(t) { return new (t || DetailsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _details_routing_module__WEBPACK_IMPORTED_MODULE_3__["DetailsRoutingModule"],
            ngx_light_carousel__WEBPACK_IMPORTED_MODULE_5__["NgxCarouselModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollModule"],
            _components_header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DetailsModule, { declarations: [_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _details_routing_module__WEBPACK_IMPORTED_MODULE_3__["DetailsRoutingModule"],
        ngx_light_carousel__WEBPACK_IMPORTED_MODULE_5__["NgxCarouselModule"],
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollModule"],
        _components_header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _details_routing_module__WEBPACK_IMPORTED_MODULE_3__["DetailsRoutingModule"],
                    ngx_light_carousel__WEBPACK_IMPORTED_MODULE_5__["NgxCarouselModule"],
                    ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollModule"],
                    _components_header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"]
                ],
                declarations: [_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=views-details-details-modules.js.map