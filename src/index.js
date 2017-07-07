import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import App from './App';
// dispatch actions
import Results from './components/results';
// 根据 state 变化展示不同的 UI 
import AppReducer from './reducers';
// import {AppReducer} from './reducers';
// bugs : must be a root reducer, can not be use as a module
// reducers 处理 action, 更新 state

import './index.css';

// 使用 reducers , 创建 Store
// const store = createStore(AppReducer);

// https://github.com/zalmoxisus/redux-devtools-extension#usage
// redux-devtools-extension
const store = createStore(AppReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// createStore(reducer, [preloadedState], [enhancer])
// http://redux.js.org/docs/api/createStore.html


// 封装 root 组件,  App 与 Results 共享唯一的一个 Store
const Root = () => {
    return(
        <div className="container">
            <App store={store} />
            <hr/>
            <Results store={store} />
        </div>
    );
};

function render () {
    ReactDOM.render(
        <Root />
        ,
        document.getElementById('root')
    );
}

// 父组件上， 注销 state 监听器
store.subscribe(render);

render();


