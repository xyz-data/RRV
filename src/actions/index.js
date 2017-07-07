// actions 返回不同 type 的 object

const voteReact = () => {
    return {
        type: 'VOTE_REACT'
    }
};

const voteAngular = () => {
    return {
        type: 'VOTE_ANGULAR'
    }
};

const voteVuejs = () => {
    return {
        type: 'VOTE_VUEJS'
    }
};

export {voteReact, voteAngular, voteVuejs};

