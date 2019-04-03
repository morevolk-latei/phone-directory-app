import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import store from './redux/store'
import Directory from './components/Directory'
/* eslint-disable no-undef */

const Root = ({ store: storeProp }) => (
  <Provider store={storeProp}>
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route
            path="/directory"
            component={Directory}
          />
          <Redirect
            from="/"
            to="/directory"
          />
        </Switch>
      </BrowserRouter>
    </Fragment>
  </Provider>
)

render(
  <Root store={store} />,
  document.getElementById('content')
)
