const express = require('express');
const inventoryRouter = express.Router();
const Inventory = require('../models/inventory');
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://spencer:${process.env.MongoPassword}@woodslogging-ke6ty.mongodb.net/test?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

inventoryRouter.get('/', (req, res) => {
    client.connect((err, db) => {
        if(err) throw err;
        var dbo = db.db('inventory');
        var data = dbo.collection('inventory').find((err, result) => {
            if(err) {
                console.log(err)
                res.status(500).send(err);
            }
            console.log(result)
            db.close()
            return res.status(200).send(result);
        })
    })
})

inventoryRouter.post('/', (req, res) => {
    const newInventory = new Inventory(req.body);
    newInventory.save((err, newInventory) => {
        if(err) return res.status(500).send(err);
        return res.status(201).send(newInventory);
    })
})

inventoryRouter.get('/:id', (req, res) => {
    Inventory.findOne({_id: req.params.id}, (err, inventory) => {
        if(err) return res.status(500).send(err);
        if(!inventory) return res.status(404).send("No inventory found");
        return res.status(201).send(inventory);
    })
})

inventoryRouter.put('/:id', (req, res) => {
    Inventory.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, updatedInventory) => {
        if(err) return res.status(500).send(err);
        return res.send(updatedInventory);
    })
})

inventoryRouter.put('/:id', (req, res) => {
    Inventory.findOneAndRemove({_id: req.params.id}, (err, deletedInventory) => {
        if(err) return res.status(500).send(err);
        return res.send({message: "inventory has been successfully deleted.", deletedInventory});
    })
})

module.exports = inventoryRouter;