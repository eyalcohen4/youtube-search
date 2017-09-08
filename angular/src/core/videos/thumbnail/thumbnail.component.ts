import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { PlayerService } from 'core/youtube/player.service';

@Component({
  selector: 'thumbnail',
  templateUrl: 'thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss'],
})
export class ThumbnailComoponent implements OnInit {
  @Input() item;

  private date: string;
  constructor(private player: PlayerService) {}

  ngOnInit() {
    this.date = moment(this.item.snippet.publishedAt).fromNow();
    console.log(this.item);
  }

  play(video) {
    this.player.play(video);
  }
}
