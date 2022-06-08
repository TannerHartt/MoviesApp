import { Component, OnInit } from '@angular/core';
import {TvImages, TvShow, TvShowDto} from "../../../models/movie";
import { IMAGES_SIZES } from "../../../constants/images-sizes";
import { ActivatedRoute } from "@angular/router";
import { TvService } from "../../services/tv.service";


@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {

  show: TvShow | null = null;
  images: TvImages | null = null;
  imagesSize = IMAGES_SIZES;
  recommendations: TvShow[] = [];
  similarShows: TvShow[] = [];

  constructor(private route: ActivatedRoute, private tvService: TvService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      this.getTvDetail(id);
      this.getImages(id);
      this.getRecommendations(id);
      this.getSimilarShows(id);
    });
  }


  getTvDetail(id: string) {
    this.tvService.getTvShowDetails(id).subscribe((showData) => {
      this.show = showData;
    });
  }
  // TODO
  // Add support for clicking on a tv show and seeing more details about it.
  // Create methods in service to fetch the show data and
  // Methods to pull data from service to display on screen.
  // Style tv show screen better

  getRecommendations(id: string) {
    this.tvService.getShowRecommendations(id).subscribe((data) => {
      this.recommendations = data;
    });
  }

  getImages(id: string) {
    this.tvService.getTvShowImages(id).subscribe((image) => {
        this.images = image;
    });
  }

  getSimilarShows(id: string) {
    this.tvService.getSimilarShows(id).subscribe((shows) => {
      this.similarShows = shows;
    });
  }
}
