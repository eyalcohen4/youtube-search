import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { YoutubeService } from './youtube.service';

@NgModule({
	imports: [HttpClientModule],
	providers: [YoutubeService],
})
export class YoutubeModule { }
