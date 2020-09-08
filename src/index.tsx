import React from 'react'
import { render } from 'react-dom'
import { RouteComponentProps, Router } from '@reach/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker'
import HotelBook from './HotelBook'
import { NotFound } from './NotFound'
import Provider from '@laststance/use-app-state'
import { HotelBookDefaultDate } from './HotelBook/DefaultState'

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent

render(
  <Provider initialState={HotelBookDefaultDate}>
    <Router>
      <RouterPage path={'/'} pageComponent={<HotelBook />} />
      <NotFound default />
    </Router>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.register()
