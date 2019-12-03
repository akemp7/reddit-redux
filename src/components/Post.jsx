import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
    const postInfo = 
    <div>
        <h3>{props.userName}</h3>
        <p>{props.content}</p>
    </div>
}

Post.propTypes = {
    userName: PropTypes.string,
    content: PropTypes.string
};

export default Post;