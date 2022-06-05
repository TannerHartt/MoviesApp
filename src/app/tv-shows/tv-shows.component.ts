import { Component, OnInit } from '@angular/core';
import {TvShow, TvShowDto} from "../../models/movie";
import {MoviesService} from "../services/movies.service";

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {

  shows: TvShow[] = [];



  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getPopularTvShows(1);
  }

  getPopularTvShows(page:number = 1) {
    this.moviesService.getTvShows(page).subscribe((shows) => {
      this.shows = shows;
    });
  }

  paginate(event: any) {
    this.getPopularTvShows(event.page + 1);
  }
}
