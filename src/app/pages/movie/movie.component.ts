import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../../services/movies.service";
import {
  Movie,
  MovieImages,
  MovieVideo,
  MovieCredits,
  MovieReviews,
  ReviewsDto,
  MovieRecommendations
} from "../../../models/movie";
import { IMAGES_SIZES } from "../../../constants/images-sizes";
import {first} from "rxjs";


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnDestroy {

  movie: Movie | null = null;
  imagesSize = IMAGES_SIZES;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  similarMovies: Movie[] = [];
  movieReviews: ReviewsDto[] = [];
  recommendedMovies: Movie[] = [];



  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getCredits(id);
      this.getSimilarMovie(id);
      this.getMovieReviews(id);
      this.getRecommendedMovies(id);
    });
  }

  ngOnDestroy() {

  }

  getMovie(id: string) {
    this.moviesService.getMovieDetails(id).pipe(first()).subscribe((movieData) => {
      this.movie = movieData;
    });
  }

  getMovieVideos(id: string) {
    this.moviesService.getMovieVideos(id).subscribe((movieVideoData) => {
      this.movieVideos = movieVideoData;
    });
  }

  getMovieImages(id: string) {
    this.moviesService.getMovieImages(id).subscribe((movieImageData) => {
      this.movieImages = movieImageData;
    });
  }

  getCredits(id: string) {
    this.moviesService.getMovieCredits(id).subscribe((movieCreditsData) => {
        this.movieCredits = movieCreditsData;
    });
  }

  getSimilarMovie(id: string) {
    this.moviesService.getSimilarMovies(id).subscribe((movieData) => {
      this.similarMovies = movieData
    });
  }

  // TODO
  // Create a way to display the reviews in the details tab menu.
  getMovieReviews(id: string) {
    this.moviesService.getMovieReviews(id).subscribe((reviews) => {
      this.movieReviews = reviews;
      console.log(reviews)
    });
  }

  getRecommendedMovies(id: string) {
    this.moviesService.getRecommendedMovies(id).subscribe((movies) => {
      this.recommendedMovies = movies;
    });
  }
}
