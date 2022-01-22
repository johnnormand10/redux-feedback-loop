const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET request
router.get('/', (req, res) => {
    let queryText = `
        SELECT * FROM "feedback" ORDER BY "date" ASC;
    `;

    pool.query(queryText).then( result => {
        res.send(result.rows);
        //checking what result.rows is
        console.log('GET request result.rows is:', result.rows);
    })
    .catch((err) => {
        console.log('ERROR in GET request', err);
        res.sendStatus(500);
    });
})

//POST request
router.post('/', (req, res) => {
    let newFeedback = req.body;
    //checking what made it to the server
    console.log('newFeedback in the server is:', newFeedback);

    let queryText = `
        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);
    `;

    let queryParams = [
        newFeedback.feeling,
        newFeedback.understanding,
        newFeedback.support,
        newFeedback.comments
    ];
    

    pool.query(queryText, queryParams)
        .then(result => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('ERROR  in POST request in server', err);
            res.sendStatus(500);
        });
})

//PUT request
router.put('/:id', (req, res) => {
    //checking what the id is 
    console.log('req.params.id id PUT request is:', req.params.id);
    //assigning the id to a variable
    const userId = req.params.id;
    //checking the status
    console.log('variable userId is:', userId);

    let queryText = `
        UPDATE "feedback" SET "userId" = $1 WHERE "id" = $2;
    `;
    
    let queryParams = [
        userId,
        req.params.id
    ]

    pool.query(queryText, queryParams)
        .then(result => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('ERROR in PUT request in server', err);
            res.sendStatus(500);  
        });
})

//DELETE request
router.delete('/delete/:id', (req, res) => {
    //assigning what we want to delete to a variable
    const feedbackToDelete = req.params.id;

    let queryText =`
        DELETE FROM "feedback" WHERE "id" = $1;
    `;

    let queryParams = [
        feedbackToDelete
    ];

    pool.query(queryText, queryParams)
        .then(result => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('ERROR in DELETE request in server', err);
            res.sendStatus(500);
        });
})

module.exports = router;