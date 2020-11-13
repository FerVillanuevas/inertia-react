require('./bootstrap');

import { App } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store';

import Player from './components/Player'

const el = document.getElementById('app')

render(
  <Provider store={store}>
    <App
        initialPage={JSON.parse(el.dataset.page)}
        resolveComponent={name => require(`./Pages/${name}`).default}
    />
    <Player />
  </Provider>,
  el
)
