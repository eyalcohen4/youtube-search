import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux' ;

import { setQuery, fetchVideos } from 'ducks/modules/youtube';

class Search extends Component {
	constructor(props) {
		super(props);

		this.onKeyDown = this.onKeyDown.bind(this);
	}

	onKeyDown(event) {
		const query = event.target.value;
		this.props.setQuery(query);
		this.props.fetchVideos()
	}

	render() {
		return (
			<div className="search">
				<input type="search" className="search__input" onKeyDown={this.onKeyDown} />
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({
	setQuery,
	fetchVideos,
}, dispatch);

export default connect(null, mapDispatchToProps)(Search);
