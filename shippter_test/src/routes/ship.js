const express = require("express");
const shipSchema = require("../model/ship.js")
const cors = require('cors');

const router  = express.Router();
router.use(cors())


//CREATE
router.post('/ships', (req, res) => {
    const ship =  shipSchema(req.body);
    ship
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})
//SELECT ALL
router.get('/ships', (req, res) => {
    shipSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})
//SELECT ONE
router.get('/ships/:id', (req, res) => {
    const { id } = req.params;
    shipSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})
//UPDATE ONE
router.put('/ships/:id', (req, res) => {
    const { id } = req.params;
    const {name, pos_x, pos_y, pos_z, destiny, pointing_at, sail_date} = req.body;
    shipSchema
    .updateOne({_id: id },{ $set:{name, pos_x, pos_y, pos_z, destiny, pointing_at, sail_date} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})
//DELETE ONE
router.delete('/ships/:id', (req, res) => {
    const { id } = req.params;
    shipSchema
    .deleteOne({_id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})



module.exports = router;


