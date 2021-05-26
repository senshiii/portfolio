import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faMedium, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTerminal, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

import './index.css';
import App from './App';

// Adding FA icons to library
library.add(faGithub, faLinkedin, faMedium, faInstagram, faTerminal, faPlus, faTimes);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
