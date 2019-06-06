import React from 'react';
import '../CommentSection/CommentSection.css';
import Comment from './Comment';
import CommentInput from './CommentInput';
// import PropTypes from 'prop-types';

class CommentSectionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        };
    }
    render() {
        return (
            <div>
                {this.state.comments.map((obj, i) => <Comment key={i} comment={obj} />)}
                <CommentInput />
            </div>
        )
    }
// Getting unexpected error. says the '.' in line 24 should be a ';'

    // CommentSectionContainer.propTypes = {
    //     comments: PropTypes.arrayOf(
    //       PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    //     )
    //   };
}


  
export default CommentSectionContainer;