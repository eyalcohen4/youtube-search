import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';


interface YTResponse {
  items: object[]
}
@Injectable()
export class YoutubeService {

  private BASE_URL: string = 'https://www.googleapis.com/youtube/v3/search';
  private TOKEN: string = 'AIzaSyC2sEBMZUws6eA0AOyFH0CZ3_1lYDCBDxQ';

  public list;

  public currentVideo: string = '';

  constructor(private http: HttpClient) {}

  search(query) {
    this.http.get(`${this.BASE_URL}?q=${query}&part=snippet&key=${this.TOKEN}`)
    .subscribe((response: YTResponse) => { this.list = response.items });
  }

  setCurrentVideo(video: string) {
    this.currentVideo = video;
  }
}
