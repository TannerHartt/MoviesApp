import { Component, OnInit } from '@angular/core';
import { TvShow } from "../../../models/movie";
import { IMAGES_SIZES } from "../../../constants/images-sizes";


@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {

  show: TvShow | null = null;
  imagesSize = IMAGES_SIZES;

  constructor() { }

  ngOnInit(): void {
  }

  // TODO
  // Add support for clicking on a tv show and seeing more details about it.
  // Create methods in service to fetch the show data and
  // Methods to pull data from service to display on screen.
  // Style tv show screen better

}
