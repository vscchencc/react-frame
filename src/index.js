import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import {BrowserRouter as Router} from 'react-router-dom'

import App from 'components/App/App'
// import getRouter from 'router/router'


// ReactDom.render(
//     <Provider store={store}>
//         {getRouter()}
//     </Provider>, document.getElementById('app'));

renderWithHotReload(App);

if (module.hot) {
    module.hot.accept('components/App/App', () => {
        const NextApp = require('components/App/App').default;
        renderWithHotReload(NextApp);
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <Provider store={store}>
            <Router>
                <RootElement/>
            </Router>
        </Provider>,
        document.getElementById('app')
    )
}