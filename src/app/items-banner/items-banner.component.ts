import { Component, Input, OnInit } from '@angular/core';
import { Movie } from "../../models/movie";

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.css']
})
export class ItemsBannerComponent implements OnInit {

  @Input() items: Movie[] =[];
  @Input() title: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
