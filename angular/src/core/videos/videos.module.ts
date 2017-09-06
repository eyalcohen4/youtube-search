import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeModule } from '../youtube/youtube.module';
import { VideoListComponent } from './videoList/videoList.component';

@NgModule({
  imports: [YoutubeModule, CommonModule],
  exports: [VideoListComponent],
  declarations: [VideoListComponent],
  providers: [],
})
export class VideosModule { }
