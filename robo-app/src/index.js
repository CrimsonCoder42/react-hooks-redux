import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

ReactDOM.render(<Hello greeting ={'Hello React'}/>,document.getElementById('root')
);

reportWebVitals();
