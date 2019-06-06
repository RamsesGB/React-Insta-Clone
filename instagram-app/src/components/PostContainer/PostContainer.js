import React from 'react';
import '../PostContainer/PostContainer.css';
import Post from './Post';

const PostContainer = props => {
    return(
        <div className='postContainer'>
            {props.postsData.map(obj => <Post key={obj.imageUrl} post={obj} />)}
        </div>
    );
}


export default PostContainer;