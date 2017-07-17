// actions 返回不同 type 的 object

/* 
    const voteReact = () => {
        return {
            type: 'VOTE_REACT',
            payload : {
                text: 'react 15'
            }
        }
    };

    const voteAngular = () => {
        return {
            type: 'VOTE_ANGULAR',
            payload : {
                text: 'ng 2'
            }
        }
    };

    const voteVuejs = () => {
        return {
            type: 'VOTE_VUEJS',
            payload : {
                text: 'vue 2'
            }
        }
    };
*/

// 使用 Action Creators 生成 action
// Action Creators 是一个 pure function，它最后会返回一个 action 对象

const FrontEndWebFrameworks = (type, text) => {
    return {
        type: `${type}`,
        payload : {
            text: `${text}`
        }
    };
};

const FEWF = FrontEndWebFrameworks;

console.log(`FEWF`, typeof FEWF);
// function

// const FEWF_R = FEWF('VOTE_REACT', 'REACT new');
// object
const FEWF_R = () => {
    return FEWF('VOTE_REACT', 'REACT new');
};
console.log(`FEWF_R`, typeof FEWF_R);
// function

// const FEWF_A = FEWF('VOTE_ANGULAR', 'ANGULAR new');
const FEWF_A = () => {
    return FEWF('VOTE_ANGULAR', 'ANGULAR new');
};


// const FEWF_V = FEWF('VOTE_VUE', 'VUE new');
const FEWF_V = () => {
    return FEWF('VOTE_VUE', 'VUE new');
};



// 要触发一个 action 只要调用
// dispatch: dispatch(FEWF(`type`, `text`));

// export {FEWF, FEWF_R, FEWF_A, FEWF_V, voteReact, voteAngular, voteVuejs};
export {FEWF, FEWF_R, FEWF_A, FEWF_V};

export default FEWF;


/* 

VM7979:3 Uncaught Error: Actions must be plain objects. Use custom middleware for async actions.


*/





