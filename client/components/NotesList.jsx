import React from 'react';

import Note from './Note.jsx';
import Masonry from 'react-masonry-component';

import './style/NotesList.less';

const NotesList = React.createClass({
    render(){
        const masonryOptions = {
            itemSelector: '.Note',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        };
        return (
            <div>
                <h1 className="NotesListTitle">My notes</h1>
                <Masonry
                    options={masonryOptions}>
                    {this.props.notes.map(note =>
                        <Note
                            key={note.id}
                            title={note.title}
                            color={note.color}
                            onDelete={this.props.noteDelete.bind(null, note)}
                            text={note.text}>
                        </Note>
                    )}
                </Masonry>
            </div>
        )
    }
});

export default NotesList;