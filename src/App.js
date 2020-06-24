import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import Home from './components/Home/Home'
import New from './components/New/New'
import GlobalProvider from './components/Context/Context'


function App() {
  return (
      <GlobalProvider>
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/new" component={New} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </GlobalProvider>
  )
}

export default App
