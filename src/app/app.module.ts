import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { GenresComponent } from './genres/genres.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'tvshows', component: TvShowsComponent },
  { path: 'genres', component: GenresComponent },


  { path: '**', redirectTo: ''}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    MoviesComponent,
    TvShowsComponent,
    GenresComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
