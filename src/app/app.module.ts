import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TabViewModule } from 'primeng/tabview'
import { PaginatorModule } from "primeng/paginator";
import { CarouselModule } from "primeng/carousel";
import { ImageModule } from "primeng/image";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { GenresComponent } from './genres/genres.component';
import { SliderComponent } from './slider/slider.component';
import { ItemsBannerComponent } from './items-banner/items-banner.component';
import { ItemComponent } from './item/item.component';
import { MovieComponent } from './pages/movie/movie.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { TvItemComponent } from './tv-item/tv-item.component';
import { TvShowComponent } from './pages/tv-show/tv-show.component';



const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'tvshows', component: TvShowsComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'tv-show/:id', component: TvShowComponent },


  // Always keep this route last! It controls any incorrect url inputs and redirects them to the Home Page.
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
    SliderComponent,
    ItemsBannerComponent,
    ItemComponent,
    MovieComponent,
    VideoPlayerComponent,
    TvItemComponent,
    TvShowComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    PaginatorModule,
    TabViewModule,
    ImageModule,
    CarouselModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
