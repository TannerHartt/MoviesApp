import { Component, OnInit } from '@angular/core';
import {TvShow, TvShowDto} from "../../models/movie";
import {TvService} from "../services/tv.service";

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {

  shows: TvShow[] = [];



  constructor(private tvService: TvService) { }

  ngOnInit(): void {
    this.getPopularTvShows(1);
  }

  getPopularTvShows(page:number = 1) {
    this.tvService.getTvShows(page).subscribe((shows) => {
      this.shows = shows;
      console.log(shows);
    });
  }

  paginate(event: any) {
    this.getPopularTvShows(event.page + 1);
  }
}
