// libraries
import React from 'react';
import {Route, Switch} from 'react-router-dom';
// component
import About from './components/About';
import Contact from './components/Contact';
import Movies from './components/Movies';
import Header from './components/Header';
// style
import './App.css';


class App extends React.Component {  
  render() {
    console.log('function render()- class App');
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Movies} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
        </Switch>

      </div>
    );
  }
}
export default App;