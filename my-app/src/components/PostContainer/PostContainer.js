import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import "./PostContainer.css";

const PostContainer = (props) => {
    return (
        <div className="post-container">
            <div className="post-header">
                <img className="post-user-avatar" src={props.post.thumbnailUrl} alt="User's avatar" />
                <h2 className="post-user-name">{props.post.username}</h2>
            </div>
            <div className="post-image-container">
                <img className="post-image" src={props.post.imageUrl} alt=""/>
            </div>
            <CommentSection comments={props.post.comments} />
        </div>
    );
};

export default PostContainer;

//ssadsd//