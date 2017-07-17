# RRV

> redux-react-voting

https://github.com/gildata/RRV.git


# Learn Redux

> Introduction To State Management With React & Redux

http://codingthesmartway.com/courses/react-complete


## Store

http://redux.js.org/docs/basics/Store.html

Store 是将它们带到一起的对象。

> Store 有以下职责：

1. 保持应用 state ;
2. 允许通过 getState() 访问 state ;
3. 允许通过 dispatch(action) 更新 state ;
4. 通过 subscribe(listener) 注册监听器;
5. 通过 subscribe(listener) 返回的函数,处理注销监听器;


请注意，Redux 应用程序中只有一个 Store 。

```js

import {createStore} from 'redux';
import todoApp from './reducers';
let store = createStore(todoApp);

```

可以选择将初始状态指定为 createStore() 的第二个参数。


```js
// index.js

import {createStore} from 'redux';
import todoApp from './reducers';

let store = createStore(todoApp, window.STATE_FROM_SERVER);

```

### Dispatching Actions

> 调度行动

```js

import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './actions';

// 记录 初始 state
console.log(store.getState());

// 注册监听器 subscribe() 每次 state 改变时，都记录 state
let unsubscribe = store.subscribe(
    () => {
        console.log(store.getState());
    }
);
// 请注意，subscribe() 返回一个函数 unsubscribe() , 用于注销监听器

// Dispatch 一些 actions
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// 停止监听 state 更新
unsubscribe();
// unsubscribe() 注销监听器

```



## Actions

http://redux.js.org/docs/basics/Actions.html

> Actions 是信息的有效载荷, 将数据从应用程序发送到你的 Store。

它们是 Store 唯一的信息来源。
你可以使用 store.dispatch() 将它们发送到 Store。

```js

const ADD_TODO = 'ADD_TODO';

{
    type: ADD_TODO,
    text: 'Build my first Redux app'
}

```
> Actions 是纯 JavaScript 对象。

Actions 必须有一个 type 属性，指示正在执行的 action 的类型。

通常将类型定义为字符串常量。
一旦你的应用程序足够大，你可能需要将其移动到单独的模块中。

> 除了 type 之外，一个 action 对象的结构完全取决于你。

### Flux Standard Action

https://github.com/acdlite/flux-standard-action



```js

import { ADD_TODO, REMOVE_TODO } from '../actionTypes';

```


### Action Creators

> Action creators 正是创建 actions 的函数。

在 Redux 中 action creators 只是返回一个 action：

```js

function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    };
}

// 实际发起一个 dispatch, 将结果传递给 dispatch() 函数

dispatch(addTodo(text));
dispatch(completeTodo(index));

// 或者，绑定 action creator, 自动 dispatch

const boundAddTodo = (text) => dispatch(addTodo(text));
const boundCompleteTodo = (index) => {
    return dispatch(completeTodo(index));
};

boundAddTodo(text);
boundCompleteTodo(index);

```


```js

// actions.js

// action 类型
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// 其他 constants
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

// action creators
export function addTodo(text) {
    return {type: ADD_TODO, text};
}

export function toggleTodo(index) {
    return {type: TOGGLE_TODO, index};
}

export function setVisibilityFilter(filter) {
    return {type: SET_VISIBILITY_FILTER, filter};
}


```



## Reducers

http://redux.js.org/docs/basics/Reducers.html

> Actions 描述发生了一些事情，但不指定应用程序的 state 如何变化作为响应。
这是 reducers 的工作。


### 设计 State 形状

> 在 Redux 中，所有应用程序 state 都存储为一个的单个对象。


尝试保持数据与 UI state 分离。

https://github.com/paularmstrong/normalizr

> 根据一个模式规范化嵌套 JSON

将存储在一个对象中的每一个实体的 ID 作为一个关键字，并使用 ID 从其他实体或列表中引用它。


## 处理 Actions

> 处理 actions, 更新 state

```js

(previousState, action) => newState

```

more coming soon ...



```js

// 使用 reducers , 创建 Store
const store = createStore(AppReducer);

// https://github.com/zalmoxisus/redux-devtools-extension#usage
// redux-devtools-extension
const store = createStore(AppReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// createStore(reducer, [preloadedState], [enhancer])
// http://redux.js.org/docs/api/createStore.html


```


https://bootswatch.com/yeti/bootstrap.min.css



## combineReducers

http://redux.js.org/docs/api/createStore.html#tips

http://redux.js.org/docs/api/combineReducers.html#reducersindexjs

```js

import { combineReducers } from 'redux';
import todos from './todos';
import counter from './counter';

export default combineReducers({
    todos,
    counter
});

```









# Object.assign()

> `Object.assign(target, ...sources)`

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

```js

let obj1 = { a: 1 },
    obj2 = { b: 2 },
    obj3 = { c: 3 };
const copy = Object.assign({}, obj1, obj2, obj3);

console.log(copy);
// Object {a: 1, b: 2, c: 3}

```




# react-redux & redux 


```sh

$ npm i -S react-redux redux 

$ npm i -S react-redux 

$ npm i -S redux 

```

# Presentational Components & Container Components

http://redux.js.org/docs/basics/UsageWithReact.html#designing-component-hierarchy


> 设计组件层次结构





# webpack sources codes map


```js

{
    "main.css": "static/css/main.a58d74b1.css",
    "main.css.map": "static/css/main.a58d74b1.css.map",
    "main.js": "static/js/main.47392501.js",
    "main.js.map": "static/js/main.47392501.js.map"
}

```

`npm run build`, how to remove webpack source map ?












