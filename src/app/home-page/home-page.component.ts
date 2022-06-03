import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../services/movies.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  movies:any = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.gettingMovies();
  }

  gettingMovies() {
    this.moviesService.getMovies().subscribe((response: any) => {
      this.movies = response.results;
    });
  }

}
