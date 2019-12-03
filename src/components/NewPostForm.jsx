import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { connect } from 'react-redux';

function NewPostForm(props) {
    let _userName = null;
    let _content = null;


function handleNewPostSubmission(event){
    event.preventDefault();
    const { dispatch } = props
    const action = {
        type: 'ADD_POST',
        id: v4(),
        userName: _userName.value,
        content: _content.value
    };
    dispatch(action);
    _username.value= '';
    _content.value = '';
}

return (
    <div>
        <form onSubmit = {handleNewPostSubmission}>
        <input type="text"
        id='name'
        placeholder='User Name'
        ref={(input) => {_userName = input;}
        }/>
        <textarea 
        id='content'
        placeholder='What is on your mind?'
        ref={(textarea) => {_content = textarea; }}/>
        <button type='submit'>Post!</button>
        </form>
    </div>
    );
 }

 NewPostForm.propTypes = {
     onNewPostCreation: PropTypes.func
 };

 export default connect()(NewPostForm);