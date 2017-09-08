import { Injectable } from '@angular/core';


let _window: any = window;

@Injectable()
export class PlayerService {

  public player;

  constructor() { }

  create() {
    let interval = setTimeout(() => {
      if (typeof _window.YT !== 'undefined' && _window.YT && _window.YT.Player) {
        this.player = new _window.YT.Player('yt-player', {
          width: '100%',
          height: '250',
          events: {
            'onReady': this.onReady,
            'onStateChange': this.onStateChange,
          }
        })
        console.log('After...');
      }

      clearTimeout(interval);
    }, 300);
  }

  onStateChange() {

  }

  onReady(event) {
    // event.target.playVideo();
  }

  play(video) {
    if (!this.player) {
      console.log('Player not ready');
      return;
    }
    console.log(video);
    this.player.loadVideoById(video.id.videoId);
  }
}
