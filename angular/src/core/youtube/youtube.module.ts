import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { YoutubeService } from './youtube.service';
import { PlayerService } from './player.service';

@NgModule({
	imports: [HttpClientModule],
	providers: [YoutubeService, PlayerService],
})
export class YoutubeModule { }
