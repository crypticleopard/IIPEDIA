import React from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Community from './pages/Community'
import Book from './pages/Book'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Footer from './components/Footer.js'
import Login from './pages/Login'
import Register from './pages/Register'
import Search from './pages/Search'

function App() {

  return (
    <div className="App">
    <Router>
    <Navbar/>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/about' exact component={About}/>
      <Route path='/community' exact component={Community}/>
      <Route path='/book/:id' exact component={Book}/>
      <Route path='/login' exact component={Login}/>
      <Route path='/register' exact component={Register}/>
      <Route path='/search/:query' exact component={Search}/>
    </Switch>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
