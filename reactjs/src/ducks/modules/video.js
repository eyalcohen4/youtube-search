import youtube from 'lib/youtube';

const PLAY = 'video/play';

const initialState = {
	currentVideo: '',
}

export const playVideo = video => {
	youtube.playVideo(video);
	return dispatch => dispatch({
		type: PLAY,
		payload: video,
	})
}

export default (state = initialState, action) => {
	switch (action.type) {
		case PLAY: {
			return {
				...state,
				currentVideo: action.payload
			}
		}
		default:
			return state
	}
}