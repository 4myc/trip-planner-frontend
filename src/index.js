import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './global.js'

import 'semantic-ui-css/semantic.min.css'; //Semantic UI CSS

const port = process.env.PORT || 3000
...
app.listen(port, () => console.log('server started on port', port))

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
