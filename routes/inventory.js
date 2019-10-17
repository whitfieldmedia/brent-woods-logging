const express = require('express');
const inventoryRouter = express.Router();
const Inventory = require('../models/inventory');

inventoryRouter.get('/', (req, res) => {
    Inventory.find((err, inventory) => {
        if(err)  {
            console.log(err)
            return res.status(500).send(err);
        }
        console.log(inventory)
        return res.status(200).send(inventory)
    })
})

inventoryRouter.post('/', (req, res) => {
    var newInventory = new Inventory(req.body);
    newInventory.save((err, newInventory) => {
        if(err) return res.status(500).send(err);
        return res.status(201).send(newInventory);
    })
})

// inventoryRouter.get('/:id', (req, res) => {
//     Inventory.findOne({_id: req.params.id}, (err, inventory) => {
//         if(err) return res.status(500).send(err);
//         if(!inventory) return res.status(404).send("No inventory found");
//         return res.status(201).send(inventory);
//     })
// })

inventoryRouter.put('/:id', (req, res) => {
    Inventory.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, updatedInventory) => {
        if(err) return res.status(500).send(err);
        return res.send(updatedInventory);
    })
})

inventoryRouter.delete('/:id', (req, res) => {
    Inventory.findOneAndRemove({_id: req.params.id}, (err, deletedInventory) => {
        if(err) return res.status(500).send(err);
        return res.send({message: "inventory has been successfully deleted.", deletedInventory});
    })
})

module.exports = inventoryRouter;