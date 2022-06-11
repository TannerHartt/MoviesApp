import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../../services/movies.service";
import {
  Movie,
  MovieImages,
  MovieVideo,
  MovieCredits,
  ReviewsDto,
  AuthorDto
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
  authorDetails: AuthorDto[] = [];

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
      this.getReviewAuthorDetails(id);
    });
  }

  ngOnDestroy() {

  }

  /**
   * A function to grab additional movie details to display when viewing a movie.
   * @param id The id of the movie user is viewing.
   */
  getMovie(id: string) {
    this.moviesService.getMovieDetails(id).pipe(first()).subscribe((movieData) => {
      this.movie = movieData;
    });
  }

  /**
   * Function used to grab movie trailer videos when viewing a movie and storing them in an array.
   * @param id The id of the movie user is viewing.
   */
  getMovieVideos(id: string) {
    this.moviesService.getMovieVideos(id).subscribe((movieVideoData) => {
      this.movieVideos = movieVideoData;
    });
  }

  /**
   * Function to grab images for a movie and store it in a class variable.
   * @param id The id of the movie user is viewing.
   */
  getMovieImages(id: string) {
    this.moviesService.getMovieImages(id).subscribe((movieImageData) => {
      this.movieImages = movieImageData;
    });
  }

  /**
   * Function used to grab the cast information from the service to display on the details screen.
   * @param id The id of the movie the user is viewing.
   */
  getCredits(id: string) {
    this.moviesService.getMovieCredits(id).subscribe((movieCreditsData) => {
        this.movieCredits = movieCreditsData;
    });
  }

  /**
   * A function used to pull similar movie data from the service and store it in an array.
   * @param id The id of the movie the user is viewing on screen.
   */
  getSimilarMovie(id: string) {
    this.moviesService.getSimilarMovies(id).subscribe((movieData) => {
      this.similarMovies = movieData
    });
  }

  /**
   * A function used to pull the reviews of a movie from the service and store it in an array.
   * @param id The id of the movie user is viewing.
   */
  getMovieReviews(id: string) {
    this.moviesService.getMovieReviews(id).subscribe((reviews) => {
      this.movieReviews = reviews;
    });
  }

  // TODO
  // get author details information from api in proper format and display
  // rating, name, and profile pic
  getReviewAuthorDetails(id: string) {
    this.moviesService.getReviewAuthorDetails(id).subscribe((author) => {
      this.authorDetails = author;
      console.log(author);
    });
  }

  /**
   * A function used to grab recommended movies data from the service and storing it in an array.
   * @param id The id of the movie user is viewing.
   */
  getRecommendedMovies(id: string) {
    this.moviesService.getRecommendedMovies(id).subscribe((movies) => {
      this.recommendedMovies = movies;
    });
  }
}
