import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import * as handle from '../phantom.js';
import '../main.css';
import './authorizers.css';

// import Fortmatic from 'fortmatic';
// const fmPhantom = new Fortmatic.Phantom('pk_test_0DBC72C8476764F8');

class Deploy extends Component {
    render() {
        return (
            <div className="main">
                <div className="bigBlock">
                    <a className="otherBtn" onClick={handle.deploying} href="!#">Deploy Contract</a>
                    <div>
                        <input type="text" id="contractAdd" placeholder="Enter existing contract address" />
                        <a className="otherBtn" onClick={handle.contractConnect} href="!#">Connect to Contract</a>
                    </div>
                </div>
            </div>
        );
    }
}

class Vault extends Component {
    render() {
        return (
            <div className="main">
                <div className="bigBlock">
                    <div id="pending">
                        <h1 className="head_boxPD">Pending Transactions</h1>
                        {/* <ol id="pendingList"></ol> */}
                        {/* <select name="transaction" id="pendTxns"></select> */}
                        {/* <a className="cmpBtn" onClick={this.getCompTx} >Get CompositionTx</a> */}
                        <table>
                            <thead>
                                <tr>
                                    <th >Tx Hash</th>
                                    <th >To</th>
                                    <th >Amount</th>
                                </tr>
                            </thead>
                            <tbody id="list">

                            </tbody>
                        </table>
                    </div>

                    {/* <div id="balDiv">
                        <h1>Balance</h1>
                        <p id="balance"></p>
                        <a className="refreshBtn" onClick={handle.getBalance}>Refresh</a>
                    </div> */}

                    <a className="signTran" onClick={this.signPendingTx} href="!#">Sign Transaction</a>
                    <div className="compBox" id="compositionTx"></div>
                </div>
            </div>
        );
    }

    // async getCompTx() {
    //     var div = document.getElementById('compositionTx');
    //     while (div.firstChild) {
    //         div.removeChild(div.firstChild);
    //     }

    //     var sel = document.getElementById('pendTxns');
    //     handle.getComp(sel.value);
    // }

    // async signPendingTx() {
    //     var sel = document.getElementById('pendTxns');
    //     handle.signContract(sel.value);
    // }
}

export {
    Deploy,
    Vault
};