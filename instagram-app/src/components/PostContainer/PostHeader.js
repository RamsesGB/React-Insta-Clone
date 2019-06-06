import React from 'react';
import '../PostContainer/PostContainer.css';

const PostHeader = props => {
    return(
        // Creating the header for each IG post. receiving thumbnail and username from Post.js and displaying it
        <div className='postHeader'>
            <div className='thumbnailBox'>
                <img
                    className='thumbnailImg'
                    src={props.thumbnailImg}
                    alt='User profile thumbnail'
                />
            </div>
            <div>{props.username}</div>
        </div>
    );
}


export default PostHeader;