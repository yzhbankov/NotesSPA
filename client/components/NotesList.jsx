import React from 'react';

import Note from './Note.jsx';
import Masonry from 'react-masonry-component';


const NotesList = React.createClass({
    render(){
        const masonryOptions = {
            itemSelector: '.Note',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        };
        return (
            <Masonry
                options={masonryOptions}>
                <h1>Hello iam a list</h1>
                {this.props.notes.map(note=>
                        <Note
                            key={note.id}
                            title={note.title}
                            color={note.color}
                            onDelete={this.props.noteDelete.bind(null, note)}
                            text={note.text}>
                        </Note>
                )}
            </Masonry>
        )
    }
});

export default NotesList;