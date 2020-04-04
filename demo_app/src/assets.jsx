import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as index from './index.js';

export default class Assets extends Component {
    async componentDidMount() {
        document.getElementById('thing').innerHTML = 'On contract ' + index.contract.options.address;
        this.getData();
    }

    render() {
        return (
            <div className="main">
                <div className="bigBlock">
                    <h1 id="thing">On Contract </h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Assets</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody id="body"></tbody>
                    </table>
                </div>
            </div>
        );
    }

    async getData() {
        const balance = await index.contract.methods.contractBalance().call();

        const element = (
            <tr>
                <td>Ether</td>
                <td>{balance}</td>
            </tr>
        );
        
        ReactDOM.render(element, document.getElementById('body'));
        console.log('rendered');
    }
};
