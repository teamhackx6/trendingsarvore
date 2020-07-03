import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import Home from './Home'
import Categories from './Categories'
import Trending from './Trending'
import Favorites from './Favorites'
import Offline from './Offline'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact >
          <Home />
        </Route>

        <Route path="/categories" >
          <Categories />
        </Route>

        <Route path="/trending" >
          <Trending />
        </Route>

        <Route path="/favorites" >
          <Favorites />
        </Route>

        <Route path="/offline" >
          <Offline />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes