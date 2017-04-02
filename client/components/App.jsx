import React from 'react';

import NoteEditor from './NoteEditor.jsx';
import NotesList from './NotesList.jsx';

import NotesStore from '../store/NotesStore.js';
import NotesAction from '../actions/NotesActions.js';

import './style/App.less';

function getStateFromStore() {
    return {
        notes: NotesStore.getNotes(),
        loading: NotesStore.isLoading()
    }
}

const App = React.createClass({
    getInitialState(){
        return getStateFromStore();
    },
    componentWillMount(){
        NotesAction.loadNotes();
    },
    componentDidMount(){
        NotesStore.addChangeListener(this._onChange);
    },
    componentWillUnmount() {
        NotesStore.removeChangeListener(this._onChange);
    },
    handleNoteAdd(newNote){
        NotesAction.createNote(newNote);
    },
    handleNoteDelete(note){
        NotesAction.deleteNote(note.id);
    },
    render(){
        return (
            <div>
                <h1 className="AppTitle"> Notes Editor </h1>
                <NoteEditor noteAdd={this.handleNoteAdd} />
                <NotesList notes={this.state.notes} noteDelete={this.handleNoteDelete} />
            </div>
        )
    },
    _onChange(){
        this.setState(getStateFromStore);
    }
});

export default App;