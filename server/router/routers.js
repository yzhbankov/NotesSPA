import express from 'express';
import * as db from '../utils/DBUtils.js';

const router = express.Router();

router.use((req, res, next)=> {
    console.log('Something is happens');
    next();
});


router.get('/', (req, res)=> {
    res.send('Hello');
});

router
    .post('/notes', (req, res) => {
        console.log(req.body);
        db.addNote(req.body)
            .then(data=> {
                res.send(data);
            })
    })
    .get('/notes', (req, res)=> {
        db.listNodes()
            .then(data=> {
                res.send(data);
            });
    })
    .delete('/notes/:id', (req, res)=> {
        db.deleteNote(req.params.id)
            .then(data => {
                res.send(data);
            })
    });

export default router;