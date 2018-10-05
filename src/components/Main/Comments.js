import React, { Component } from 'react';

class Comments extends Component {
    constructor() {
        super();
        this.renderComment = this.renderComment.bind(this);
      }

    renderComment(comment, i,){
        console.log(this.props.removeComment())
        return (
            <div className="comment" key={i}>
                <p>
                <strong>{comment.user}</strong>
                {comment.text}
                <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
                </p>
            </div>
        )
        
    };

    //Function used for the form 
    //get the text out of the inputs
    handleSubmit(event){ 
        event.preventDefault();
       // console.log("submitting form")
       //console.log(this.refs);
       const postId = this.props.params.postId;
       const author = this.refs.author.value;
       const comment = this.refs.comment.value;
       //this updates the state ->Comments reducer -> action creators
       this.props.addComment(postId,author,comment)

       this.refs.commentForm.reset();
      
       
       

    };

    render(){
        
        return(
            <div>
                 <iframe className="player" type="text/html" width="300" height="200"
                        src={this.props.post.vid_src}
                        frameBorder="0" />
                <span>{this.props.postComments.map(this.renderComment)}</span> 
                <form ref="commentForm" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden />
                </form>
            </div>
        )
    }
}

export default Comments;
 