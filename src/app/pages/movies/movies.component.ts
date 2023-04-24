import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../../models/movie';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];
  genreId: string | null = null;
  searchValue: string | null = null;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.getMoviesByGenres(genreId, 1);
      } else {
        this.getMoviePage(1); // Grabs the first page of movies on initialization.
      }
    });
  }

  // Function used to track if the search bar value is updated and update the variable storing it accordingly.
  searchChanged() {
    if(this.searchValue) {
      this.getMoviePage(1, this.searchValue);
    }
  }

  /**
   * Function used to pull all the movies in the movies tab from the movie service.
   * @param page Page number of movies to grab from the api.
   * @param searchKeyword The value the user types into the search bar to grab movies that contain it in the title.
   */
  getMoviePage(page: number, searchKeyword?: string) {
    this.moviesService.searchMovies(page, searchKeyword).subscribe(movies => {
      this.movies = movies;
    });
  }

  /**
   * Method used to paginate the movies tab. On page change this method is called to make another movie call to the api
   * and incrementing page by 1 to get the next page of results.
   * @param event This is a click event that happens on page change.
   */
  paginate(event: any) {
    const pageNumber = event.page + 1;
    if (this.genreId) {
      this.getMoviesByGenres(this.genreId, pageNumber);
    } else {
      if(this.searchValue) {
        this.getMoviePage(pageNumber, this.searchValue);
      } else {
        this.getMoviePage(pageNumber);
      }
    }
  }

  /**
   * Function that grabs the movies that fall under the desired genre.
   * @param genreId The id of the genre user is sorted by.
   * @param page The page number of the movies in the desired genre.
   */
  getMoviesByGenres(genreId: string, page: number) {
    this.moviesService.getMoviesByGenre(genreId, page).subscribe((movies) => {
      this.movies = movies;
    });
  }
}
