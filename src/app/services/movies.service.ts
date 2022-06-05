import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Movie, MovieCredits, MovieDto, MovieImages, MovieVideoDto } from "../../models/movie";
import { switchMap, of } from "rxjs";

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

  // Method used to get the movies in the "Home" tab.
  getMovies(type: string = '', count: number = 12) {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res.results.slice(0, count));
      })
    );
  }
  // Method used to get the movies in the "Home" tab.
  getLateMovies(type: string = '') {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res.results);
      })
    );
  }

  // Method used to get the movies in the "Movies" tab.
  searchMovies(page: number ) {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`)
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

  getMovieImages(id: string) {
    return this.http.get<MovieImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`);
  }

  getMovieCredits(id: string) {
    return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
  }

  getRecommendedMovies(id: string) {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}/recommendations?api_key=${this.apiKey}`);
  }

}
