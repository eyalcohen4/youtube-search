import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../youtube/youtube.service';

@Component({
  selector: 'video-list',
  templateUrl: './videoList.component.html',
  styleUrls: ['./videoList.component.scss'],
})

export class VideoListComponent implements OnInit {
  private list: string[];

  constructor(private youtube: YoutubeService) {
  }

  ngOnInit() {}
}
