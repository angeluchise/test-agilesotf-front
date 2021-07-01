import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalState } from '@services/even.service';
import { MoviesService } from '@services/movies/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id: string
  movie: any;
  pathImagen: string;
  pageScroll: number = 1;
  actors: any = [];
  constructor(private route: ActivatedRoute, private moviesService: MoviesService, private globalState: GlobalState) { 
    
  }

  ngOnInit(): void {
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
    })
    this.getDetails(this.id, this.pageScroll);
  }
  onScroll() {
    this.pageScroll += 1;
    this.getDetails(this.id, this.pageScroll);
  }
  getDetails(id, page) {
    this.moviesService.getById(id, page).subscribe((data: any)=> {
      console.log(data);
      
      this.actors = data.data;
      this.pathImagen = data.imageBaseUrl;
    })
  }
}
