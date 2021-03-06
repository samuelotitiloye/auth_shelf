const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', async(req, res) => {
    const getItemsQuery = `SELECT * FROM "item" ORDER BY "id" ASC;`
    try {
        const getItemsData = await pool.query(getItemsQuery);
        res.send(getItemsData.rows);
    } catch (error) {
        console.log('Error with get server route:', error);
    }
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    const addItemQuery = `INSERT INTO "item" ("description", "image_url", "user_id") VALUES ($1, $2, $3);`;
    pool.query(addItemQuery).then(() => {
        res.sendStatus(201); // respond CREATED
    }).catch(error => {
        console.log('Error with INSERT item query,', error);
        res.sendStatus(500);
    })
});

// url: api/shelf?itemID=${item id here }&userID{user id here}
/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/', (req, res) => {
    const deleteItemQuery = `DELETE FROM "item" WHERE "item"."id"=$1 AND "item"."user_id"=2;`;
    pool.query(deleteItemQuery, [req.query.itemID, req.query.userID]).then(() => {
        res.sendStatus(200); // response OK
    }).catch(error => {
        console.log('Error with DELETE item query,', error);
        res.sendStatus(500);
    });
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;