import React from 'react';
import Comment from "./Comment";
import PropTypes from 'prop-types';




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

CommentSection.propTypes = {
    dummyData: PropTypes.arrayOf (
        PropTypes.shape({
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                username: PropTypes.string.isRequired,
                text: PropTypes.string
    })
)}))};
export default CommentSection;