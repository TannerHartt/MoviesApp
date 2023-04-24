import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  @Input() site: string = 'Youtube';
  @Input() key: string | null = null;

  videoUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.videoUrl = this.getSafeUrl('https://www.youtube.com/embed/' + this.key);

    switch (this.site) {
      case 'Youtube':
        this.videoUrl = this.getSafeUrl('https://www.youtube.com/embed/' + this.key);
        break;
      case 'Vimeo':
        this.videoUrl = this.getSafeUrl('https://www.vimeo.com/embed' + this.key);
        break;
    }
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
