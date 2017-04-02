import React from 'react';

import NoteActions from '../actions/NotesActions.js';

import './style/NoteEditor.less';

const NoteEditor = React.createClass({
    getInitialState(){
        return {
            title: '',
            text: '',
            color: 'white'
        }
    },
    handleTitleChange(event){
        this.setState({"title": event.target.value});
    },
    handleTextChange(event){
        this.setState({"text": event.target.value});
    },
    handleColorChange(event){
        document.querySelectorAll('.colorPicker').forEach(function (item) {
            item.removeAttribute('id');
        });
        event.target.setAttribute('id', "activeColorBtn");

        this.setState({
            color: event.target.getAttribute('data-color')
        })
    },
    handleNoteAdd(){
        const newNote = {
            title: this.state.title,
            text: this.state.text,
            color: this.state.color
        };
        this.props.noteAdd(newNote);
        this.setState({
            title: '',
            text: '',
            color: 'white'
        });
    },
    render(){
        return (
            <div className="NoteEditor">
                <div>
                    <input
                        className="NoteEditorTitle"
                        type='text'
                        placeholder='Enter title'
                        value={this.state.title}
                        onChange={this.handleTitleChange}></input>
                </div>
                <div>
                    <input
                        className="NoteEditorText"
                        type='text'
                        placeholder='Enter text'
                        value={this.state.text}
                        onChange={this.handleTextChange}></input>
                </div>
                <div className='NoteEditorColor'>
                    <div
                        className='colorPicker NoteEditorColorWhite'
                        data-color='white'
                        id='activeColorBtn'
                        onClick={this.handleColorChange}></div>
                    <div
                        className='colorPicker NoteEditorColorRed'
                        data-color='#ff0000'
                        onClick={this.handleColorChange}></div>
                    <div
                        className='colorPicker NoteEditorColorOrange'
                        data-color='#ff8000'
                        onClick={this.handleColorChange}></div>
                    <div
                        className='colorPicker NoteEditorColorGreen'
                        data-color='#bfff00'
                        onClick={this.handleColorChange}></div>
                    <div
                        className='colorPicker NoteEditorColorBlue'
                        data-color='#00ffff'
                        onClick={this.handleColorChange}></div>
                    <div
                        className='colorPicker NoteEditorColorMagento'
                        data-color='#bf00ff'
                        onClick={this.handleColorChange}></div>
                </div>

                <div>
                    <button
                        className="NoteEditorBtn"
                        disabled={(!this.state.text) || (!this.state.title)}
                        onClick={this.handleNoteAdd}>
                        Add
                    </button>
                </div>
            </div>
        )
    }
});

export default NoteEditor;