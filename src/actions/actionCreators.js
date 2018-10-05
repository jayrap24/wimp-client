// these are javascript events that get fired when a user click something
//increment
export function increment(index){
    return {
        //type is the will be the name of the object
        type: 'INCREMENT_ LIKES',
        index: index
    }
}

//add comment
export function addComment(postId, author, comment){
    //console.log("dispatching add comment")
    return{
        type: "ADD_COMMENT",
        postId: postId,
        author: author,
        comment: comment
    }
}


//remove comment
export function removeComment(postId, i){
    return {
        type: "REMOVE_COMMENT",
        i: i,
        postId: postId
    }
}


