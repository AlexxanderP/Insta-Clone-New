import React from 'react';
import Comment from "./Comment";1




class CommentSection extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                comments: this.props.comments
            
    };
    }
    render() {
        return (
            <div className='comment-section'>
            {this.state.comments.map((comment, index) => <Comment key={index} comment={comment}/>)}
        </div>
    );
    }
}

export default CommentSection;