import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { of, switchMap } from "rxjs";
import {
  MovieReviews,
  TvImages,
  TvShow,
  TvShowDto
} from "../../models/movie";
import {TvVideo, TvVideoDto} from "../../models/tv";

@Injectable({
  providedIn: 'root'
})
export class TvService {

  baseUrl: string = "https://api.themoviedb.org/3";
  apiKey: string = "7db05de00ae8c105292603bb77981acc";


  constructor(private http: HttpClient) { }

  getTvShows(page: number = 1) {
    return this.http.get<TvShowDto>(`${this.baseUrl}/tv/popular?page=${page}&api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
          return of(res.results);
        })
      );
  }

  getTvShowDetails(id: string) {
    return this.http.get<TvShow>(`${this.baseUrl}/tv/${id}?api_key=${this.apiKey}`);
  }
  getSimilarShows(id: string) {
    return this.http.get<TvShowDto>(`${this.baseUrl}/tv/${id}/similar?api_key=${this.apiKey}`)
      .pipe(switchMap((res) => {
          return of(res.results);
        })
      );
  }
  getTvShowImages(id: string) {
    return this.http.get<TvImages>(`${this.baseUrl}/tv/${id}/images?api_key=${this.apiKey}`);
  }

  getShowRecommendations(id: string) {
    return this.http.get<TvShowDto>(`${this.baseUrl}/tv/${id}/recommendations?api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res.results);
      })
    );
  }

  getTvShowReviews(id: string) {
    return this.http.get<MovieReviews>(`${this.baseUrl}/tv/${id}/reviews?api_key=${this.apiKey}`)
      .pipe(switchMap(resp => {
        return of(resp.results);
      })
    );
  }

  getTvVideos(id: string) {
    return this.http.get<TvVideo>(`${this.baseUrl}/tv/${id}/videos?api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res.results);
      })
    );
  }


}
