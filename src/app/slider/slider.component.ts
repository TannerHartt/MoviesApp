import { Component, Input, OnInit } from '@angular/core';
import { Movie } from "../../models/movie";
import { animate, state, style, transition, trigger } from "@angular/animations";

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

  constructor() { }

  ngOnInit(): void {
  }

}
