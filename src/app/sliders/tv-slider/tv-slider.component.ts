import {Component, Input, OnInit} from '@angular/core';
import {TvShow} from "../../../models/movie";
import {IMAGES_SIZES} from "../../../constants/images-sizes";

@Component({
  selector: 'app-tv-slider',
  templateUrl: './tv-slider.component.html',
  styleUrls: ['./tv-slider.component.css']
})
export class TvSliderComponent implements OnInit {

  @Input() tvItems: TvShow[] = [];
  imagesSize = IMAGES_SIZES;

  constructor() { }

  ngOnInit(): void {
  }

}
