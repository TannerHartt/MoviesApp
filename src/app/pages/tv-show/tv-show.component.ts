import { Component, OnInit } from '@angular/core';
import {MovieReviews, ReviewsDto, TvImages, TvShow, TvShowDto} from "../../../models/movie";
import { IMAGES_SIZES } from "../../../constants/images-sizes";
import { ActivatedRoute } from "@angular/router";
import { TvService } from "../../services/tv.service";
import {TvVideo, TvVideoDto} from "../../../models/tv";


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
  tvReviews: ReviewsDto[] = [];
  tvVideos: TvVideoDto[] = [];

  constructor(private route: ActivatedRoute, private tvService: TvService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      this.getTvDetail(id);
      this.getImages(id);
      this.getRecommendations(id);
      this.getSimilarShows(id);
      this.getTvReviews(id);
      this.getTvVideos(id);
    });
  }


  getTvDetail(id: string) {
    this.tvService.getTvShowDetails(id).subscribe((showData) => {
      this.show = showData;
    });
  }

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

  getTvReviews(id: string) {
    this.tvService.getTvShowReviews(id).subscribe(review => {
      this.tvReviews = review;
    });
  }

  getTvVideos(id: string) {
    this.tvService.getTvVideos(id).subscribe(videos => {
      this.tvVideos = videos;
    });
  }
}
