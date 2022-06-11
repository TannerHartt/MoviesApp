import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TabViewModule } from 'primeng/tabview'
import { PaginatorModule } from "primeng/paginator";
import { CarouselModule } from "primeng/carousel";
import { ImageModule } from "primeng/image";
import { InputTextModule } from 'primeng/inputtext';
import {ScrollTopModule} from 'primeng/scrolltop';
import {DialogModule} from 'primeng/dialog';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { GenresComponent } from "./pages/genres/genres.component";
import { SliderComponent } from './sliders/slider/slider.component';
import { ItemsBannerComponent } from './item-pages/items-banner/items-banner.component';
import { ItemComponent } from './item-pages/item/item.component';
import { MovieComponent } from './pages/movie/movie.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { TvItemComponent } from './item-pages/tv-item/tv-item.component';
import { TvShowComponent } from './pages/tv-show/tv-show.component';
import { TvSliderComponent } from './sliders/tv-slider/tv-slider.component';
import { ReviewsComponent } from './components/reviews/reviews.component';



const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'tvshows', component: TvShowsComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'tvshow/:id', component: TvShowComponent },
  { path: 'movies/genres/:genreId', component: MoviesComponent },


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
    TvShowComponent,
    TvSliderComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    PaginatorModule,
    TabViewModule,
    ImageModule,
    CarouselModule,
    InputTextModule,
    ScrollTopModule,
    DialogModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
