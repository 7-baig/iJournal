import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import Home from './pages/Home/Home'
import New from './pages/New/New'
import { Edit } from './pages/Edit/Edit'
import { Read } from './pages/Read/Read'
import { Layout } from './components/Layout/Layout'


function App() {
  return (
      <Router>
        <Layout>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/new" component={New} exact />
            <Route path="/edit" component={Edit} exact />
            <Route path="/read" component={Read} exact />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </Router>
  )
}

export default App
