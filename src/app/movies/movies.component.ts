import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../services/movies.service";
import { Movie } from "../../models/movie";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] =[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getMoviePage(1);
  }

  getMoviePage(page: number) {
    this.moviesService.searchMovies(page).subscribe(movies => {
      this.movies = movies;
    })
  }

  paginate(event: any) {
    this.getMoviePage(event.page + 1);
  }
}
