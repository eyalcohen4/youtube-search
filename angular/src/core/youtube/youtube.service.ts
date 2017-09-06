import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class YoutubeService {

  private BASE_URL: string = 'https://www.googleapis.com/youtube/v3/search';
  private TOKEN: string = 'AIzaSyC2sEBMZUws6eA0AOyFH0CZ3_1lYDCBDxQ';

  public list: Observable<any>;

  constructor(private http: HttpClient) {}

  search(query) {
    this.list = this.http.get(`${this.BASE_URL}?q=${query}&part=snippet&key=${this.TOKEN}`);;
  }
}
