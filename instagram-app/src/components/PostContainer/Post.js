import React from 'react';
import '../PostContainer/PostContainer.css';
import PostHeader from './PostHeader';
import CommentSectionContainer from '../CommentSection/CommentSectionContainer';


const Post = props => {
    return(
        <div className='postBox'>
            {/* Receiving data from PostContainer. Seperating it and sending it to its respective component destinations */}
            <PostHeader
            thumbnailImg={props.post.thumbnailUrl}
            username={props.post.username}
             />
            
            <div className='postImgBox'>
                <img
                className='postImg'
                src={props.post.imageUrl}
                alt='IG post'
                />
            </div>

            <CommentSectionContainer comments={props.post.comments}/>
        </div>
    );
}

export default Post;