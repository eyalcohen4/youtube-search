import { combineReducers } from 'redux';

import youtube from './youtube';
import video from './video';

export default combineReducers({
	video,
	youtube,
});