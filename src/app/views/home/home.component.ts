import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { config } from '@config/config';
import { GlobalState } from '@services/even.service';
import { MoviesService } from '@services/movies/movies.service';
import { ngxLightOptions } from  'ngx-light-carousel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies : Object[] = []
  slides : Array<Object> = [];
  options: ngxLightOptions;
  pathImagen: string;
  pageScroll: number = 1;
  pageSlider: number = 1;
  current: any = 0;
  numberEvent: number = 1;
  @ViewChild('carousel') carousel:any;
  @ViewChild('carouselSection') carouselSection:any;
  constructor(private moviesService: MoviesService, private globalState: GlobalState, private router: Router) {
    this.options = {
      animation: {
        animationClass: 'transition',
        animationTime: 200,
      },
      swipe: {
        swipeable: true,
        swipeVelocity: 1,
      },
      drag: {
        draggable: true,
        dragMany: true,
      },
      scroll: {
        numberToScroll:  3,
      },
      arrows: true,
      infinite: true,
      autoplay: {
        enabled: true,
        direction: 'right',
        delay: 5000,
        stopOnHover: true,
      },
      breakpoints: [
        {
          width: 768,
          number: 1,
        },
        {
          width: 991,
          number: 3,
        },
        {
          width: 9999,
          number: 4,
        },
      ],
    }
  }
  ngOnInit(): void {
    this.slides = [];
    this.movies = [];
    this.globalState.replaySubjectSubscribe('refresh', () => {
      if (!this.slides.length) {
        this.getMovieNow(this.pageSlider);
      }
      if (!this.movies.length) {
        this.getPopular(this.pageScroll);
      }
      
    })
    this.getMovieNow(this.pageSlider);
    this.getPopular(this.pageScroll);
  }
  onScroll() {
    this.pageScroll += 1;
    this.getPopular(this.pageScroll);
  }
  getMovieNow(page) {
    this.moviesService.getNowPlaying(page).subscribe((data: any)=> {
      data.data.map((element)=> {
        this.slides.push(element);
      })
      this.pathImagen = data.imageBaseUrl;
      const mutationObserver = new MutationObserver(() => {
        this.numberEvent += 1;
        if (this.numberEvent === 4) {
          if ((this.slides.length - 3) <= this.carousel.current) {
            this.pageSlider += 1;
            this.getMovieNow(this.pageSlider);
          }
          this.numberEvent = 1;
        }
      })
      mutationObserver.observe(
        this.carouselSection.nativeElement,
        { attributes: true }
      )
    })
  }
  getPopular(page) {
    this.moviesService.getPopular(page).subscribe((data: any)=> {
      data.data.map((element)=> {
        this.movies.push(element);
      })
      this.pathImagen = data.imageBaseUrl;
    })
  }
  goToDetails(id, data) {
    this.router.navigate(['/' + config.router.details, id], { queryParams: { data: JSON.stringify(data) } })
  }
}
