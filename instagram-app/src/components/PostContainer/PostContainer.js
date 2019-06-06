import React from 'react';
import '../PostContainer/PostContainer.css';
import PostHeader from './PostHeader';
import Post from './Post';

const PostContainer = props => {
    return(
        <div>
            <PostHeader />
            <Post />
        </div>
    );
}

export default PostContainer;