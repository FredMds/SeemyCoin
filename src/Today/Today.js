import React, {Component} from 'react';
import './Today.css';
import axios from 'axios';

class Today extends Component {
    // Adds a class constructor that assigns the initial state values:
  constructor () {
            super();
            this.state = {
                usdprice:'',
                eurprice:'',
                btcprice: '',
                ltcprice: '',
                ethprice: ''
            };
        }

    // This is called when an instance of a component is being created and inserted into the DOM.
        componentWillMount () {
          axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=USD,EUR,BTC,ETH,LTC&tsyms=USD')
           .then(response => {
            // We set the latest prices in the state to the prices gotten from Cryptocurrency.
              this.setState({ usdprice: response.data.USD.USD });
              this.setState({ eurprice: response.data.EUR.USD });
              this.setState({ btcprice: response.data.BTC.USD });
              this.setState({ ethprice: response.data.ETH.USD });
              this.setState({ ltcprice: response.data.LTC.USD });
            })
            // Catch any error here
            .catch(error => {
            console.log(error)
            })
        }

    // The render method contains the JSX code which will be compiled to HTML.
                render() {
                    return (
                        <div className="today--section container">
                            <h2>Current Price</h2>
                              <div className="columns today--section__box">
                                <div className="column usd--section">
                                <img
                                  style={{width: '50%'}}
                                  src={require('../assets/dollar.png')} />
                                  <p>dollar</p>
                                  <h5>${this.state.usdprice}</h5>
                                </div>
                                <div className="column usd--section">
                                <img
                                  style={{width: '50%'}}
                                  src={require('../assets/euro.png')} />
                                  <p>euro</p>
                                  <h5>${this.state.eurprice}</h5>
                                </div>
                                <div className="column btc--section">
                                <img
                                  style={{width: '50%'}}
                                  src={require('../assets/bitcoin.png')} />
                                  <p>bitcoin</p>
                                  <h5>${this.state.btcprice}</h5>
                                </div>
                                <div className="column eth--section">
                                <img
                                  style={{width: '50%'}}
                                  src={require('../assets/ethereum.png')} />
                                  <p>ethereum</p>
                                  <h5>${this.state.ethprice}</h5>
                                </div>
                                <div className="column ltc--section">
                                <img
                                  style={{width: '50%'}}
                                  src={require('../assets/litecoin.png')} />
                                  <p>litecoin</p>
                                  <h5>${this.state.ltcprice}</h5>
                                </div>
                            </div>
                        </div>
                    )
                }

}

export default Today;
