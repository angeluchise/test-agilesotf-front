(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{xWAf:function(i,t,e){"use strict";e.r(t),e.d(t,"HomeModule",(function(){return I}));var n=e("ofXK"),o=e("3Pt+"),s=e("tyNb"),c=e("0np6"),r=e("fXoL"),a=e("gTC3"),l=e("HlQW"),b=e("2MiI"),u=e("kz0O"),g=e("dlKe");const h=["carousel"],p=["carouselSection"];function d(i,t){if(1&i){const i=r.Mb();r.Lb(0,"article",17),r.Lb(1,"div",18),r.Lb(2,"a",19),r.Sb("click",(function(){r.cc(i);const e=t.$implicit;return r.Ub().goToDetails(e.id,e)})),r.Ib(3,"img",20),r.Kb(),r.Kb(),r.Kb()}if(2&i){const i=t.$implicit,e=r.Ub();r.xb(3),r.Xb("src",e.pathImagen+i.poster_path,r.dc)}}function m(i,t){}function f(i,t){if(1&i){const i=r.Mb();r.Lb(0,"article"),r.Lb(1,"div",18),r.Lb(2,"a",19),r.Sb("click",(function(){r.cc(i);const e=t.$implicit;return r.Ub().goToDetails(e.id,e)})),r.Ib(3,"img",20),r.Kb(),r.Kb(),r.Kb()}if(2&i){const i=t.$implicit,e=r.Ub();r.xb(3),r.Xb("src",e.pathImagen+i.poster_path,r.dc)}}function v(i,t){1&i&&r.Ib(0,"div",21)}function S(i,t){1&i&&r.Ib(0,"div",21)}function w(i,t){1&i&&r.Ib(0,"div",22)}function K(i,t){if(1&i){const i=r.Mb();r.Lb(0,"div",23),r.Lb(1,"a",19),r.Sb("click",(function(){r.cc(i);const e=t.$implicit;return r.Ub().goToDetails(e.id,e)})),r.Ib(2,"img",24),r.Kb(),r.Kb()}if(2&i){const i=t.$implicit,e=r.Ub();r.xb(2),r.Xb("src",e.pathImagen+i.poster_path,r.dc)}}const L=[{path:"",component:(()=>{class i{constructor(i,t,e){this.moviesService=i,this.globalState=t,this.router=e,this.movies=[],this.slides=[],this.pageScroll=1,this.pageSlider=1,this.current=0,this.numberEvent=1,this.options={animation:{animationClass:"transition",animationTime:200},swipe:{swipeable:!0,swipeVelocity:1},drag:{draggable:!0,dragMany:!0},scroll:{numberToScroll:3},arrows:!0,infinite:!0,autoplay:{enabled:!0,direction:"right",delay:5e3,stopOnHover:!0},breakpoints:[{width:768,number:1},{width:991,number:3},{width:9999,number:4}]}}ngOnInit(){this.slides=[],this.movies=[],this.globalState.replaySubjectSubscribe("refresh",()=>{this.slides.length||this.getMovieNow(this.pageSlider),this.movies.length||this.getPopular(this.pageScroll)}),this.getMovieNow(this.pageSlider),this.getPopular(this.pageScroll)}onScroll(){this.pageScroll+=1,this.getPopular(this.pageScroll)}getMovieNow(i){this.moviesService.getNowPlaying(i).subscribe(i=>{i.data.map(i=>{this.slides.push(i)}),this.pathImagen=i.imageBaseUrl,new MutationObserver(()=>{this.numberEvent+=1,4===this.numberEvent&&(this.slides.length-3<=this.carousel.current&&(this.pageSlider+=1,this.getMovieNow(this.pageSlider)),this.numberEvent=1)}).observe(this.carouselSection.nativeElement,{attributes:!0})})}getPopular(i){this.moviesService.getPopular(i).subscribe(i=>{i.data.map(i=>{this.movies.push(i)}),this.pathImagen=i.imageBaseUrl})}goToDetails(i,t){this.router.navigate(["/"+c.a.router.details,i],{queryParams:{data:JSON.stringify(t)}})}}return i.\u0275fac=function(t){return new(t||i)(r.Hb(a.a),r.Hb(l.a),r.Hb(s.b))},i.\u0275cmp=r.Bb({type:i,selectors:[["app-home"]],viewQuery:function(i,t){var e;1&i&&(r.kc(h,!0),r.kc(p,!0)),2&i&&(r.Zb(e=r.Tb())&&(t.carousel=e.first),r.Zb(e=r.Tb())&&(t.carouselSection=e.first))},decls:28,vars:6,consts:[[1,"container-fluid","padd-0"],[1,"container"],[1,"col-12"],[1,"container-carousel"],[3,"options","data"],["carousel",""],["ngx-light-carousel-container",""],["carouselSection",""],["ngx-light-carousel-item","",4,"ngFor","ngForOf"],["infiniteContainer",""],["carouselContent",""],["carouselPrev",""],["carouselNext",""],["carouselDot",""],["infiniteScroll","",1,"container",3,"infiniteScrollDistance","infiniteScrollThrottle","scrolled"],[1,"row"],["class","col-6 col-md-3",4,"ngFor","ngForOf"],["ngx-light-carousel-item",""],[1,"slide","w-100"],[1,"pointer",3,"click"],[1,"img-movie-slide",3,"src"],[1,"click-area"],[1,"ball","bg-accent"],[1,"col-6","col-md-3"],["alt","movie",1,"img-movie",3,"src"]],template:function(i,t){1&i&&(r.Ib(0,"app-header"),r.Lb(1,"div",0),r.Lb(2,"div",1),r.Lb(3,"div",2),r.Lb(4,"h1"),r.hc(5,"Pel\xedculas en estreno"),r.Kb(),r.Kb(),r.Kb(),r.Lb(6,"div",3),r.Lb(7,"ngx-light-carousel",4,5),r.Lb(9,"section",6,7),r.fc(11,d,4,1,"article",8),r.fc(12,m,0,0,"ng-template",null,9,r.gc),r.Kb(),r.fc(14,f,4,1,"ng-template",null,10,r.gc),r.fc(16,v,1,0,"ng-template",null,11,r.gc),r.fc(18,S,1,0,"ng-template",null,12,r.gc),r.fc(20,w,1,0,"ng-template",null,13,r.gc),r.Kb(),r.Kb(),r.Lb(22,"div",14),r.Sb("scrolled",(function(){return t.onScroll()})),r.Lb(23,"div",15),r.Lb(24,"div",2),r.Lb(25,"h1"),r.hc(26,"Pel\xedculas m\xe1s populares"),r.Kb(),r.Kb(),r.fc(27,K,3,1,"div",16),r.Kb(),r.Kb(),r.Kb()),2&i&&(r.xb(7),r.Xb("options",t.options)("data",t.slides),r.xb(4),r.Xb("ngForOf",t.slides),r.xb(11),r.Xb("infiniteScrollDistance",2)("infiniteScrollThrottle",50),r.xb(5),r.Xb("ngForOf",t.movies))},directives:[b.a,u.a,n.i,g.a,u.b],styles:[".container-carousel[_ngcontent-%COMP%]{position:relative}.img-movie-slide[_ngcontent-%COMP%]{width:400px;object-fit:contain;height:500px}.img-movie[_ngcontent-%COMP%]{width:100%;object-fit:contain;height:400px;margin-bottom:20px}"]}),i})()}];let x=(()=>{class i{}return i.\u0275mod=r.Fb({type:i}),i.\u0275inj=r.Eb({factory:function(t){return new(t||i)},imports:[[s.c.forChild(L)],s.c]}),i})();var y=e("WinS");let I=(()=>{class i{}return i.\u0275mod=r.Fb({type:i}),i.\u0275inj=r.Eb({factory:function(t){return new(t||i)},imports:[[n.b,o.b,x,u.c,g.b,y.a]]}),i})()}}]);