import React, { Component } from 'react';
import './App.css';

import Today from './Today/Today';
import Past from './Past/Past';

class App extends Component {
      render() {
        return (
          <div className="">
              <div className="topheader">
                  <header className="container">
                      <nav className="navbar">
                          <div className="navbar-brand">
                              <a className="navbar-item" href ={'https://github.com/FredMds'}>SeeMyCoin</a>
                          </div>

                      </nav>
                  </header>
              </div>
              <section className="results--section">
                  <div className="container">
                      <h1>SeeMyCoin is a realtime price information about<br></br> USD, EUR, BTC, ETH and LTC.</h1>
                  </div>
                  <div className="results--section__inner">
                      <Today />
                      <Past />
                  </div>
              </section>
          </div>
        );
      }
    }

    export default App;
