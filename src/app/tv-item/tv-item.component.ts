import {Component, Input, OnInit} from '@angular/core';
import {TvShow} from "../../models/movie";
import {IMAGES_SIZES} from "../../constants/images-sizes";

@Component({
  selector: 'app-tv-item',
  templateUrl: './tv-item.component.html',
  styleUrls: ['./tv-item.component.css']
})
export class TvItemComponent implements OnInit {

  @Input() tvData: TvShow | null = null;
  imagesSizes = IMAGES_SIZES;

  constructor() { }

  ngOnInit(): void {
  }

}
