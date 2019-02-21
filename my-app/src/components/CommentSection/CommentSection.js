import React from 'react';





class CommentSection extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                comments: props.comments
            
    };
    }
    render() {
        return (
            <div className='comment-section'>
                {this.state.comments.map((comment, index) => <CommentSection key={index} comment={comment} />)}
        </div>
    );
    }
}

export default CommentSection;