import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../../services/movies.service";
import { Movie } from "../../../models/movie";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  movies: any = [];
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  nowPlayingMovies: Movie[] =[];
  latestMovie: Movie | null = null;


  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.getPopularMovies();
      this.getTopRatedMovies();
      this.getUpcomingMovies();
      this.getNowPlayingMovies();
  }

  getPopularMovies() {
    this.moviesService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies;
    });
  }

  getUpcomingMovies() {
    this.moviesService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies;
    });
  }

  getTopRatedMovies() {
    this.moviesService.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies;
    });
  }

  getNowPlayingMovies() {
    this.moviesService.getMovies('now_playing').subscribe((movies) => {
      this.nowPlayingMovies = movies;
    });
  }

}
