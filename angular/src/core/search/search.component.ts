import { Component } from '@angular/core';
import { YoutubeService } from '../youtube/youtube.service';

export interface YTResponse {
  items: string[];
}

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [YoutubeService],
})
export class SearchComponent {

  private value: string = 'Angular';

  constructor(private youtube: YoutubeService) { }

  search() {
    this.youtube.search(this.value);
  }
}
