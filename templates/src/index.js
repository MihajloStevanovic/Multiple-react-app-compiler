import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

	{% if app %}
		var version  = "app yeahhhhhh";
	{% else %}
		var version  = "web yeahhhhhh";
	{% endif %}
		var both = "all of you base are belong to us !"
 

ReactDOM.render(
  <App />,
  document.getElementById('root')
);