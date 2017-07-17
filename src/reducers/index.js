// 初始化 state
const initialState = {
    angular: 0,
    react: 0,
    vue: 0
};

// Reducer 用来处理 Action 触发的对状态树的更改。
// (currentState, action) => newState

// reducers 更新 state 
const AppReducers = (state = initialState, action) => {
    // 根据不同的 action.type ,修改对应的不同属性字段的 state 值 
    switch (action.type) {
        case 'VOTE_ANGULAR':
            console.log("Vote Angular!");
            return (
                // Object.assign(target, ...sources)
                // Object.assign() 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。
                // a deep copy of old object
                // Object.assign(state, {role: 'admin}); 直接修改 state 对象
                // Object.assign({}, state, {role: 'admin}); 创建一个 state 对象的新的深拷贝对象， copy
                Object.assign(
                    {}, 
                    state, 
                    {
                        angular: state.angular + 1
                    }
                )
            );
        case 'VOTE_REACT':
            console.log("Vote React!");
            return (
                Object.assign(
                    {}, 
                    state, 
                    {
                        react: state.react + 1
                    }
                )
            );
        case 'VOTE_VUE':
            console.log("Vote Vue!");
            return (
                Object.assign(
                    {}, 
                    state, 
                    {
                        vue: state.vue + 1
                    }
                )
            );
        default:
            return state;
    }
};

export {AppReducers};
export default AppReducers;

