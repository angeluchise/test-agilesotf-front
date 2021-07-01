import { Component, OnInit } from '@angular/core';
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
  constructor(private moviesService: MoviesService, private globalState: GlobalState) {
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
    this.slides = []
    this.globalState.replaySubjectSubscribe('refresh', () => {
      this.getMovieNow();
      this.getPopular();
    })
    this.getMovieNow();
    this.getPopular();
  }
  getMovieNow() {
    this.moviesService.getNowPlaying().subscribe((data: any)=> {
      console.log(data);
      this.slides = data.data;
      this.pathImagen = data.imageBaseUrl;
    })
  }
  getPopular() {
    this.moviesService.getPopular().subscribe((data: any)=> {
      console.log(data);
      this.movies = data.data;
      this.pathImagen = data.imageBaseUrl;
    })
  }
}
