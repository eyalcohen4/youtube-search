import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube/youtube.service';

export interface YTResponse {
  items: string[];
}

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [],
})
export class SearchComponent implements OnInit {

  private value: string = 'Angular';

  constructor(private youtube: YoutubeService) { }

  search() {
    this.youtube.search(this.value);
  }

  ngOnInit() {
    this.search();
  }
}
