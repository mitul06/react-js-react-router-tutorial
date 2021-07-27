import './App.css'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Navbar from './components/Navbar'
import Post from './components/pages/Post'
import Error from './components/pages/Error'
import Dashboard from './components/pages/Dashboard'

function App () {
  let isLogged = false;
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/post/:category' component={Post} />
          <Route exact path='/post/:category/:id' component={Post} />
          <Route exact path='/login'>
            {isLogged ? <Redirect to='/dashboard' /> : <Home />}
          </Route>

          <Route exact component={Error} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
