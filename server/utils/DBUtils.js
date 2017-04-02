import mongoose from 'mongoose';

import '../models/NoteModel.js';

const Note = mongoose.model('Note');

export function setUpConnection() {
    mongoose.connect("mongodb://yzhbankov:password1360@ds147900.mlab.com:47900/heroku_7mlgjgmk");
}

export function listNodes() {
    return Note.find();
}

export function addNote(data) {
    const note = Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createAt: new Date()
    });
    return note.save();
}

export function deleteNote(id) {
    return Note.findById(id).remove();
}