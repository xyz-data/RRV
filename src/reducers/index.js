// 初始化 state
const initialState = {
    angular: 0,
    react: 0,
    vuejs: 0
};


// reducers 更新 state 
const AppReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'VOTE_ANGULAR':
            console.log("Vote Angular!");
            return (
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
        case 'VOTE_VUEJS':
            console.log("Vote Vue.jsc!");
            return (
                Object.assign(
                    {}, 
                    state, 
                    {
                        vuejs: state.vuejs + 1
                    }
                )
            );
        default:
            return state;
    }
};

export {AppReducers};
export default AppReducers;

