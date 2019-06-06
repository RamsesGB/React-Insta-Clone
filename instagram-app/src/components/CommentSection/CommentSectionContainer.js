import React from 'react';
import '../CommentSection/CommentSection.css';
import Comment from './Comment';
import CommentInput from './CommentInput';

const CommentSectionContainer = props => {
    return(
        <div>
            <Comment />
            <CommentInput />
        </div>
    );
}

export default CommentSectionContainer;