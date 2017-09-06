import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { YoutubeModule } from '../youtube/youtube.module';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    FormsModule,
    YoutubeModule,
  ],
  exports: [SearchComponent]
})
export class SearchModule { }
