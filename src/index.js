import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {App} from './App';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './reducers';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(<Provider store={store}>
<App/>
</Provider>, document.getElementById('root'));
