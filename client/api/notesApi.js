import axios from 'axios';

export default {
    listNotes(){
        return axios.get('https://react-flux-notes-app.herokuapp.com/notes');
    },
    addNote(data){
        return axios.post('https://react-flux-notes-app.herokuapp.com/notes', data);
    },
    deleteNote(id){
        return axios.delete('https://react-flux-notes-app.herokuapp.com/notes/' + id)
    }
}