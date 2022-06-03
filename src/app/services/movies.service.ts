import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MovieDto } from "../../models/movie";
import { switchMap, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl: string = "https://api.themoviedb.org/3"
  apiKey: string = "7db05de00ae8c105292603bb77981acc"

  constructor(private http: HttpClient) { }


  getMovies(type: string = '', count: number = 12) {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res.results.slice(0, count));
      })
    );
  }

  searchMovies(page: number ) {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
          return of(res.results);
        })
      );
  }

}
