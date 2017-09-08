import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchModule } from 'core/search/search.module';
import { VideosModule } from 'core/videos/videos.module';
import { YoutubeModule } from 'core/youtube/youtube.module';
import { YoutubeService } from 'core/youtube/youtube.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SearchModule,
    VideosModule,
    YoutubeModule,
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
