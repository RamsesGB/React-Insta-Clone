import React from 'react';
import '../PostContainer/PostContainer.css';
import Post from './Post';

const PostContainer = props => {
    return(
        <div className='postContainer'>
            {/* Iterating over the dummyData file and sending data down as props to the Post.js file */}
            {props.postsData.map(obj => <Post key={obj.imageUrl} post={obj} />)}
        </div>
    );
}


export default PostContainer;