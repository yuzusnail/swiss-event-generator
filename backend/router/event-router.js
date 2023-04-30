const express = require('express')
const router = express.Router();

// GET
router.get('/', (req, res) => {
    res.json({msg: "GET All events"});
})

router.get('/:event-id', (req, res) => {
    res.json({msg: "GET event info"});
}) 

// POST
router.post('/', (req, res)=>{
    res.json({msg: "POST event entry"});
})

router.post('/:event-id', (req, res) => {
    res.json({msg: "POST event list entry"});
})

router.delete('/:event-id', (req, res) => {
    res.json({msg: "DELETE event entry"})
})

router.patch('/:event-id', (req, res) => {
    res.json({msg: "PATCH event list entry"})
})

module.exports = router;