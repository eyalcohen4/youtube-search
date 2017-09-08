import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../youtube/youtube.service';

@Component({
  selector: 'video-list',
  templateUrl: './videoList.component.html',
  providers: [],
})

export class VideoListComponent implements OnInit {
  private list: string[];

  constructor(private youtube: YoutubeService) {
  }

  ngOnInit() {
    console.log(this.youtube.list);
  }
}
