import { Component, OnInit, Input, AfterContentInit } from '@angular/core';

import { YoutubeService } from 'core/youtube/youtube.service';
import { PlayerService  } from 'core/youtube/player.service';

@Component({
  selector: 'player',
  templateUrl: 'player.component.html',
  styleUrls: ['./player.component.scss'],
})

export class PlayerComponent implements OnInit {

  constructor(private youtube: YoutubeService, private player: PlayerService) {}

  ngOnInit() {}

  ngAfterContentInit() {
    let tag = document.createElement('script');
    const firstScriptTag = document.getElementsByTagName('script')[0];

    tag.src = "https://www.youtube.com/iframe_api";
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    this.player.create();
  }
}
