import React from 'react';
import {render} from 'react-dom';
import Routers from './Routers.js';
import './Main.css';
import './Post.css';
import "highlight.js/styles/atelier-dune-light.css"

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(<Routers />,document.getElementById('root'));
