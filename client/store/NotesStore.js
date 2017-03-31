import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher.js';
import Constants from '../constants/Constants.js';

const CHANGE_EVENT = 'change';

let _notes = [];
let _isLoading = true;
let _loadingError = null;

function formatNote(note) {
    return {
        title: note.title,
        text: note.text,
        color: note.color || 'white',
        createAt: note.createAt,
        id: note._id
    }
}

const TasksStore = Object.assign({}, EventEmitter.prototype, {
    isLoading(){
        return _isLoading;
    },
    getNotes(){
        return _notes;
    },
    emitChange(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener (callback){
        this.on(CHANGE_EVENT, callback)
    },
    removeChangeListener (callback){
        this.removeListener(CHANGE_EVENT, callback)
    }
});

AppDispatcher.register(function (action) {
    switch (action.type) {
        case(Constants.LOAD_NOTES_REQUEST):
        {
            _isLoading = true;
            TasksStore.emitChange();
            break;
        }
        case(Constants.LOAD_NOTES_SUCCESS):
        {
            _isLoading = false;
            _notes = action.notes.map(formatNote);
            _loadingError = null;

            TasksStore.emitChange();
            break;
        }
        case(Constants.LOAD_NOTES_FAIL):
        {
            _loadingError = action.error;
            TasksStore.emitChange();
            break;
        }
        default:
        {
            console.log('no such handler');
        }
    }
});

export default TasksStore;