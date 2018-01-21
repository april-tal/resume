import React from 'react'
import { HashRouter as Router,Route,NavLink,Redirect,Switch } from 'react-router-dom'
import Home from './Components/Home'
import Project from './Components/Project'
import Work from './Components/Work'
import styled from 'styled-components'
import './assets/global.css'


class App extends React.Component {
  render () {
    return  (
      <Router>
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/work'} component={Work}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
