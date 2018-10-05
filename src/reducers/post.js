//a reducer takes in 2 things
// 1. the action (info about what happened which is like an eventlistenter) 
//2. a copy of current state
// then updates the state with the new data

function posts(state = [], action){
    switch(action.type){
        case 'INCREMENT_LIKES' :
            const i = action.index;
            return [
                ...state.slice(0,i), //before the one we are updating
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i,1),
        ]
        default:
        return state;
    }
}


export default posts;