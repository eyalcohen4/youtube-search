import React, { Component } from 'react';

import { connect } from 'react-redux';

import youtube from 'lib/youtube';

import Search from 'components/Search/Search';
import VideoList from 'components/Videos/VideoList/VideoList';

class App extends Component {
	constructor(props) {
		super(props);

		youtube.createPlayer();
	}

  render() {
    return (
      <div className="app">
				<header className="header">
					<Search />
				</header>

				<main>
				<div className="app__player">
					<div id="yt-player"></div>
      	</div>
      	<div className="app__video-list">
					<VideoList videos={this.props.videos} />
  	    </div>

				</main>
        <footer></footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
	videos: state.youtube.videos,
})

export default connect(mapStateToProps, null)(App);
