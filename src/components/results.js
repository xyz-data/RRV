import React, {Component} from 'react';

// https://bootswatch.com/yeti/bootstrap.min.css
// global css


// this.store.getState().??? 
// 根据 store 的 state 变化来修改 UI 的样式 width
class Results extends Component {
    constructor(props){
        super(props);
         // 接受从父组件 props 传递过来的 store
        this.store = this.props.store;
         // 通过 props 获取 store， 使用 state 处理
        this.state = {
            store: this.props.store
        }
    }
    votesAngularInPercent = () => {
        const ng2 = this.state.store.getState().angular;
        const r15 = this.state.store.getState().react;
        const vue2 = this.state.store.getState().vue;
        if (ng2) {
            return (
                ng2 / (ng2 + r15 + vue2) * 100
            );
        } else {
            return 0;
        }
    }
    votesReactInPercent() {
        const ng2 = this.state.store.getState().angular;
        const r15 = this.state.store.getState().react;
        const vue2 = this.state.store.getState().vue;
        if (this.store.getState().react) {
            return (
                r15 / (ng2 + r15 + vue2) * 100
            );
        } else {
            return 0;
        }
    }
    votesVuejsInPercent() {
        const ng2 = this.store.getState().angular;
        const r15 = this.store.getState().react;
        const vue2 = this.store.getState().vue;
        if (vue2) {
            return (
                vue2 / (ng2 + r15 + vue2) * 100
            );
        } else {
            return 0;
        }
    }
    votesAngularInPercentStyle() {
        return {
            width: this.votesAngularInPercent()+'%'
        }
    }
    votesReactInPercentStyle() {
        return {
            width: this.votesReactInPercent()+'%'
        }
    }
    votesVuejsInPercentStyle() {
        return {
            width: this.votesVuejsInPercent()+'%'
        }
    }
    render() {
        return (
            <div>
                <span className="label label-danger">
                    Angular: {this.votesAngularInPercent().toFixed(2) + '%'}
                </span>
                <div className="progress progress-striped active">
                    <div 
                        className="progress-bar progress-bar-danger" 
                        style={this.votesAngularInPercentStyle()}
                        >
                    </div>
                </div>
                <span className="label label-info">
                    React: {this.votesReactInPercent().toFixed(2) + '%'}
                </span>
                <div className="progress progress-striped active">
                    <div
                        className="progress-bar progress-bar-info"
                        style={this.votesReactInPercentStyle()}
                        >
                    </div>
                </div>
                <span className="label label-success">
                    Vue.js: {this.votesVuejsInPercent().toFixed(2) + '%'}
                </span>
                <div className="progress progress-striped active">
                    <div
                        className="progress-bar progress-bar-success"
                        style={this.votesVuejsInPercentStyle()}
                        >
                    </div>
                </div>
            </div>
        );
    }
}

export default Results;


