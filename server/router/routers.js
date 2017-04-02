import express from 'express';
import ejs from 'ejs';

import * as db from '../utils/DBUtils.js';

const router = express.Router();

router.use((req, res, next)=> {
    console.log('Something is happens');
    next();
});

router.use(express.static(__dirname + '/public'));
router.set('views', __dirname + '/public');
router.engine('html', ejs.renderFile);
router.set('view engine', 'html');

router.get('/', (req, res)=> {
    res.render('public/index.html');
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