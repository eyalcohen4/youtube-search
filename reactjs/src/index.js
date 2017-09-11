import React from 'react';
import ReactDOM from 'react-dom';
import store from 'ducks/store';
import { Provider } from 'react-redux';

import 'styles/main.css';

import App from 'containers/App/App';
import registerServiceWorker from './registerServiceWorker';

const target = document.getElementById('root');

const html = (
	<Provider store={store}>
		<App />
	</Provider>
)

ReactDOM.render(html, target);

registerServiceWorker();
