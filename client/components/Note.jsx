import React from 'react';

const Note = React.createClass({
    render(){
        return (
            <div>
                <div onClick={this.props.onDelete}>X</div>
                <div className='NoteTitle'>{this.props.title}</div>
                <div className='NoteText'>{this.props.text}</div>
            </div>
        )
    }
});

export default Note;