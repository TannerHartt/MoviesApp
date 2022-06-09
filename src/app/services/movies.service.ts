import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {
  Movie,
  MovieCredits,
  MovieDto,
  MovieImages,
  MovieRecommendations, MovieReviews,
  MovieVideoDto,
} from "../../models/movie";
import { switchMap, of } from "rxjs";
import { GenresDto } from "../../models/genre";


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl: string = "https://api.themoviedb.org/3"
  apiKey: string = "7db05de00ae8c105292603bb77981acc"

  constructor(private http: HttpClient) { }

  getMovieDetails(id: string) {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  // Method used to get the movies in the "Home" tab from TMDB API.
  getMovies(type: string = '', count: number = 12) {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res.results.slice(0, count));
      })
    );
  }

  // Method used to get the movies in the "Movies" tab from the movie database API.
  searchMovies(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/movie' : '/movie/popular';
    return this.http.get<MovieDto>(`${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
          return of(res.results);
        })
      );
  }

  getMovieVideos(id: string) {
    return this.http.get<MovieVideoDto>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getMovieGenres() {
    return this.http.get<GenresDto>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.genres);
        })
      );
  }


  getMoviesByGenre(genreId: string, page: number) {
    return this.http.get<MovieDto>(`${this.baseUrl}/discover/movie?with_genres=${genreId}&page=${page}&api_key=${this.apiKey}`)
      .pipe(switchMap((res) => {
          return of(res.results);
        })
      );
  }


  getMovieImages(id: string) {
    return this.http.get<MovieImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`);
  }

  getMovieCredits(id: string) {
    return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
  }

  getRecommendedMovies(id: string) {
    return this.http.get<MovieRecommendations>(`${this.baseUrl}/movie/${id}/recommendations?api_key=${this.apiKey}`)
      .pipe(switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getSimilarMovies(id: string) {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}`)
      .pipe(switchMap((res) => {
        return of(res.results);
        })
      );

  }

  getMovieReviews(id: string) {
    return this.http.get<MovieReviews>(`${this.baseUrl}/movie/${id}/reviews?api_key=${this.apiKey}`)
      .pipe(switchMap((res) => {
        return of(res.results)
      })
    );
  }


}
