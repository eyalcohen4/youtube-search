import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchModule } from 'core/search/search.module';
import { VideosModule } from 'core/videos/videos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SearchModule,
    VideosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
