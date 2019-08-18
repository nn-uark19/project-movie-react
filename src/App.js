// libraries
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// component
import About from './components/1-About';
import Contact from './components/1-Contact';
import Movies from './components/1-Movies';
// header footer
import Header from './components/1-Header';
import Footer from './components/1-Footer';
// style
import './App.css';

class App extends React.Component {
  render() {
    console.log('class App- function render()');
    return (
      <div className='App'>
        {/* Headers */}
        <Header />

        {/* main website body */}
        <Switch>
          <Route exact path='/' component={Movies} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
        </Switch>

        {/* footer */}
        <Footer />
      </div>
    );
  }
}
export default App;
