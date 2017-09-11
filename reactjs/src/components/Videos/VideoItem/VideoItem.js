import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux' ;

import { playVideo } from 'ducks/modules/video';

import moment from 'moment';

class VideoItem extends Component {
	constructor(props) {
		super(props);
		this.date = moment(this.props.video.snippet.publishedAt).fromNow();

		this.play = this.play.bind(this);
	}

	play() {
		this.props.playVideo(this.props.video.id.videoId);
	}

	render() {
		return (
			<div className="video-item" onClick={this.play}>

				<img className="video-item__image" src={this.props.video.snippet.thumbnails.default.url} />

				<div className="video-item__content">
					<p className="video-item__content__title"> { this.props.video.snippet.title } </p>

					<div className="video-item__content__subtitle">
						<span className="video-item__content__subtitle__channel"> 
							{ this.props.video.snippet.channelTitle }
						</span>
						<span className="video-item__content__subtitle__date"> { this.date } </span>
					</div>
				</div>

			</div>

		);
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({
	playVideo,
}, dispatch);

export default connect(null, mapDispatchToProps)(VideoItem);