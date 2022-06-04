import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../../services/movies.service";
import {Movie, MovieImages, MovieVideo, MovieCredits} from "../../../models/movie";
import { IMAGES_SIZES } from "../../../constants/images-sizes";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie | null = null;
  imagesSize = IMAGES_SIZES;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;


  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id)
    });
  }

  getMovie(id: string) {
    this.moviesService.getMovieDetails(id).subscribe((movieData) => {
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
    })
  }

  getMovieCredits(id: string) {
    this.moviesService.getMovieCredits(id).subscribe((movieCreditsData) => {
        this.movieCredits = movieCreditsData;
    })
  }

}