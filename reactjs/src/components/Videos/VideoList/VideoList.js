import React, { Component } from 'react';

import VideoItem from 'components/Videos/VideoItem/VideoItem';

class VideoList extends Component {
	
	render() {
		return (
			<ul className="video-list">
				{ 
					this.props.videos.map((video) => { 
					return (
						<li key={video.id.videoId || video.id.channelId}>
							<VideoItem video={video} /> 
						</li>
					)
				})
				}
			</ul>
		);
	}
}

export default VideoList;