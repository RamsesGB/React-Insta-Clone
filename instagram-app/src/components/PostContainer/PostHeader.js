import React from 'react';
import '../PostContainer/PostContainer.css';

const PostHeader = props => {
    return(
        // Creating the header for each IG post. receiving thumbnail and username from Post.js and displaying it
        <div>
            <img
                className='thumbnailImg'
                src={props.thumbnailImg}
                alt='User profile thumbnail'
                />
            <p>{props.username}</p>
        </div>
    );
}

export default PostHeader;