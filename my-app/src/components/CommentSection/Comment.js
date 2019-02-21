import React from 'react';



const Comment = (props) => {
    return (
        <div className="comment">
            <span>@{props.comment.username}: </span>
            <span>{props.comment.text}</span>
        </div>
    );
};


export default Comment; 