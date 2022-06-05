import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../services/movies.service";
import { Movie } from "../../models/movie";

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
  latestMovies: Movie[] = [];
  recommendedMovies: Movie[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getPopularMovies();
    this.getTopRatedMovies();
    this.getUpcomingMovies();
    this.getNowPlayingMovies();
    this.getLatestMovies();
    this.getRecommendedMovies();
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

  getLatestMovies() {
    this.moviesService.getLateMovies('latest').subscribe((movies) => {
      this.latestMovies = movies;
    });
  }

  getRecommendedMovies() {
    this.moviesService.getMovies('recommendations', 20).subscribe((movies) => {
      this.recommendedMovies = movies;
    });
  }

}
