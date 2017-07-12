import React, { Component } from 'react';

// import {FEWF, FEWF_R, FEWF_A, FEWF_V, voteAngular, voteReact, voteVuejs} from './actions';
import {FEWF_R, FEWF_A, FEWF_V} from './actions';
// 处理 actions 返回不同 type 的 object


import './App.css';
// https://bootswatch.com/yeti/bootstrap.min.css
// global css


// dispatch actions
// 点击图片后， store.dispatch 触发 action 执行, reducers
class App extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }
   handleVoteReact = () => {
        // this.store.dispatch(voteReact());
        this.store.dispatch(FEWF_R());
    };
    handleVoteAngular = () => {
        // this.store.dispatch(voteAngular());
        this.store.dispatch(FEWF_A());
    };
    handleVoteVuejs = () => {
        // this.store.dispatch(voteVuejs());
        this.store.dispatch(FEWF_V());
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
