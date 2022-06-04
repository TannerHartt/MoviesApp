import { Component, Input, OnInit } from '@angular/core';
import { Movie } from "../../models/movie";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { IMAGES_SIZES } from "../../constants/images-sizes";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({opacity: 0})),
      transition('void <=> *', [animate('1s')])
    ])
  ]
})

export class SliderComponent implements OnInit {

  @Input() items: Movie[] = [];
  @Input() isBanner: boolean = false;
  currentSlideIndex: number = 0;
  readonly imagesSize = IMAGES_SIZES;

  constructor() { }

  ngOnInit(): void {
    // Setting timer for slide change animation.
    // Timer is in milliseconds, 6000 = 6s;
    if(!this.isBanner) {
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
      }, 6000);
    }
  }

}
