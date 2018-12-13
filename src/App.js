import React, { Component } from 'react';
import Footer from './components/Footer';
import Index from './components/Index';
import Contact from './components/Contact';
import './App.css';

class App extends Component {
  state= {
    toggle: true
  }

  changeView = () => {
    this.setState( prevState =>({
      toggle: !prevState.toggle
    }))
  }

  render() {
    return (
      <div id="container">

        <div id="mainContent">
          <div id="logo">HouseMasters.mu</div>
          <div id="content">
            <div id="show_contact" className="show_contact" onClick={this.changeView}>contact</div>
            {
              this.state.toggle ? <Index /> : <Contact/>
            }
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
