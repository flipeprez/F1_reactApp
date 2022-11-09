const express = require('express');
const teamschema =require('../models/team');
const router = express.Router();

//create a team
router.post('/teams', (req, res)=>{
    //here we are going to create de f1 teams
    const team = teamschema(req.body);
    team 
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({err}));
});

//get all teamdata with .get()
router.get('/teams', (req, res)=>{
    //here we are going to find de f1 teams with .find()
    teamschema 
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({err}));
});

//get one teamdata with .get()
router.get('/teams/:id', (req, res)=>{
    //here we are going to find de f1 teams with .findById()
    const {id} = req.params;
    teamschema 
        .findById(id)
        .then((data) => res.json(data))
        .catch((err) => res.json({err}));
});

//update teamdata with .put()
router.put('/teams/:id', (req, res)=>{
    //here we are going to update f1 teams with .updateOne()
    const {id} = req.params;
    const { name, foundation, victories, championshipwins, lastdriver1, lastdriver2 } = req.body;
    teamschema 
        .updateOne({_id : id }, { $set: {name, foundation, victories, championshipwins, lastdriver1, lastdriver2} })
        .then((data) => res.json(data))
        .catch((err) => res.json({err}));
});

//update teamdata with .delete()
router.delete('/teams/:id', (req, res)=>{
    //here we are going to find de f1 teams with .findById()
    const {id} = req.params;
    teamschema 
        .deleteOne({_id: id })
        .then((data) => res.json(data))
        .catch((err) => res.json({err}));
});
module.exports = router;