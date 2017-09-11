import youtube from 'lib/youtube';

const FETCH_VIDEOS_START    = 'youtube/fetch_videos_start';
const FETCH_VIDEOS_COMPLETE = 'youtube/fetch_videos_complete';
const FETCH_VIDEOS_FAILED   = 'youtube/fetch_videos_FAILED'
const SET_QUERY = 'youtube/set_query';

const initialState = {
	query: '',
	videos: [],
	errors: {},
}

export const fetchVideos = () => {
	return fetchQuery;
}

const fetchVideosStart = () => {
	return {
		type: FETCH_VIDEOS_START,
	}
}

const fetchVideosComplete = videos => {
	return {
		type: FETCH_VIDEOS_COMPLETE,
		videos,
	}
}

const fetchVideosError = error => {
	return {
		type: FETCH_VIDEOS_FAILED,
		error
	}
}

export const setQuery = query => {
	return dispatch => dispatch({
		type: SET_QUERY,
		payload: query,
	})
}

const fetchQuery = (dispatch, getState) => {
	dispatch(fetchVideosStart());
	youtube.search(getState().youtube.query).then(
		videos => dispatch({ type: FETCH_VIDEOS_COMPLETE, payload: videos }),
		error  => dispatch({ type: FETCH_VIDEOS_FAILED, payload: error })
	)
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_QUERY: {
			return {
				...state,
				query: action.payload
			}
		}
		case FETCH_VIDEOS_START: {
			return state;
		}
		case FETCH_VIDEOS_COMPLETE: {
			return {
				...state,
				videos: action.payload,
			}
		}
		case FETCH_VIDEOS_FAILED: {
			return {
				...state,
				errors: action.payload,
			}
		}
		default:
			return state
	}
}