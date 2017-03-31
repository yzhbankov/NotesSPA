import AppDispatcher from '../dispatcher/AppDispatcher.js';
import Constants from '../constants/Constants.js';

import api from '../api/notesApi.js';

const NoteActions = {
    loadNotes(){
        AppDispatcher.dispatch({
            type: Constants.LOAD_NOTES_REQUEST
        });
        api.listNotes()
            .then(({ data })=> {
                AppDispatcher.dispatch({
                    type: Constants.LOAD_NOTES_SUCCESS,
                    notes: data
                })
            })
            .catch(err=> {
                AppDispatcher.dispatch({
                    type: Constants.LOAD_NOTES_FAIL,
                    error: err
                })
            });
    },
    createNote(note){
        api.addNote(note)
            .then(()=> {
                this.loadNotes()
            })
            .catch(err=> {
                console.error(err)
            })
    },
    deleteNote(id){
        api.deleteNote(id)
            .then(()=> {
                this.loadNotes()
            })
            .catch(err=> {
                console.error(err)
            })
    }
};

export default NoteActions;