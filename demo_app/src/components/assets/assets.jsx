import React, { Component } from 'react';

import * as index from '../../index.js';
import './assets.css';

export default class Assets extends Component {
    state = {
        contractAddress: "",
        data: <tr></tr>
    }

    async componentDidMount() {
        this.setState({
            contractAddress: index.contract.options.address
        })
        this.getData();
    }

    render() {
        return (
            <div className="main">
                <div className="big-block">
                    <h1 >On Contract {this.state.contractAddress} </h1>
                    <table id="table">
                        <thead>
                            <tr>
                                <th>Assets</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody id="list">
                            {this.state.data}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    async getData() {
        const balance = await index.contract.methods.contractBalance().call() / Math.pow(10, 18) + " Eth";

        const element = (
            <tr>
                <td>Ether</td>
                <td>{balance}</td>
            </tr>
        );

        this.setState({ data: element });
    }
};
