import axios from 'axios';

class Youtube {
  constructor() {
    this.BASE_URL   = 'https://www.googleapis.com/youtube/v3/search';
    this.IFRAME_API = 'https://www.youtube.com/iframe_api';
    this.TOKEN      = 'AIzaSyC2sEBMZUws6eA0AOyFH0CZ3_1lYDCBDxQ';
    this.player     = null;
  }

  async search(query) {
    const url = `${this.BASE_URL}?q=${query}&part=snippet&key=${this.TOKEN}`;
    const request = await axios.get(url);

    if (request.status === 200 && request.data) {
      return request.data.items;
    }

    return Promise.reject(request);
  }

  async loadScript() {
    const isExist = document.getElementById('youtube-script');

    if (isExist) {
      return;
    }

    const tag = document.createElement('script');
    const firstScriptTag = document.getElementsByTagName('script')[0];

    tag.src = this.IFRAME_API;
    tag.attributes.id = 'youtube-script';
    await firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      this.createPlayer();
    };
  }

  createPlayer() {
    this.loadScript();

    if (typeof window.YT !== 'undefined' && window.YT && window.YT.Player) {
      this.player = new window.YT.Player('yt-player', {
        width: '100%',
        height: '250',
        events: {
          onReady: this.onReady,
        },
      });
    }
  }

  playVideo(video) {
    if (!this.player) {
      console.log('Player not ready');
    } else {
      this.player.loadVideoById(video);
    }
  }
}

export default new Youtube();

