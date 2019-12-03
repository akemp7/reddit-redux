import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postList: []
        };
        this.handleNewPostToList = this.handleNewPostToList.bind(this);
        this.handleLike = this.handleLike.bind(this);
    }
    handleNewPostToList(newPost) {
        var newPostList = this.state.postList.slice();
        newPostList.push(newPost);
        this.setState({postList: newPostList});
    }

    render () {
        return(
            <div>
                <Post/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        postList : state
    };
};

App.propTypes = {
    postList: PropTypes.object
};

export default withRouter(connect 
    (mapStateToProps)(App));