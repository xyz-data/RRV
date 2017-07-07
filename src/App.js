import React, { Component } from 'react';

import {voteAngular, voteReact, voteVuejs} from './actions';
// 处理 actions 返回不同 type 的 object

import './App.css';
// https://bootswatch.com/yeti/bootstrap.min.css
// global css


// dispatch actions
// 点击图片后， store.xxx 触发 action 执行, reducers
class App extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }
    handleVoteAngular = () => {
        this.store.dispatch(voteAngular());
    };
    handleVoteReact = () => {
        this.store.dispatch(voteReact());
    };
    handleVoteVuejs = () => {
        this.store.dispatch(voteVuejs());
    };
    render() {
        return (
            <div>
                <div className="jumbotron" style={{'textAlign': 'center'}}>
                    <img src="logo.jpg" height="96" alt="https://www.xgqfrms.xyz"></img>
                    <h2>What is your favorite front-end framework in 2017?</h2>
                    <h4>Click on the logos below to vote!</h4>
                    <br />
                    <div className="row">
                        <div className="col-xs-offset-3 col-xs-2">
                            <img src="angular_logo.png" height="96" alt="Angular" onClick={this.handleVoteAngular}></img>
                        </div>
                        <div className="col-xs-2">
                            <img src="react_logo.png" height="96" alt="Angular" onClick={this.handleVoteReact}></img>
                        </div>
                        <div className="col-xs-2">
                            <img src="vuejs_logo.png" height="96" alt="Angular" onClick={this.handleVoteVuejs}></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
