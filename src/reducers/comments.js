


//a reducer takes in 2 things
// 1. the action (info about what happened which is like an eventlistenter) 
//2. a copy of current state
// then updates the state with the new data

function postComments(state = [], action){
    switch(action.type){
        case 'ADD_COMMENT':
            //return the new state with the new comment
            return [...state,{
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':

            return [
                ...state.slice(0,action.i),
                ...state.slice(action.i + 1)
            ]
           
        default:
            return state;
        
    }
}

function comments(state = [], action){
    if(typeof action.postId !== 'undefined'){
        return {
            // take the current state
            ...state,
            // overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}


export default comments;