import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeModule } from '../youtube/youtube.module';

import { VideoListComponent } from './videoList/videoList.component';
import { ThumbnailComoponent } from './thumbnail/thumbnail.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  imports: [CommonModule],
  exports: [VideoListComponent, PlayerComponent],
  declarations: [VideoListComponent, ThumbnailComoponent, PlayerComponent],
  providers: [],
})
export class VideosModule { }
