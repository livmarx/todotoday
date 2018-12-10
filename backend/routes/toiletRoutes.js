const express = require('express');
const router = express.Router();

const { db, Toilet } = require('../db/index');

// Get all toilets
router.get('/', async function(req, res, next) {
  console.log('In get-all-toilets route');
  try {
    const allToilet = await Toilet.findAll();
    console.log('All Toilets!');
    res.status(200).send(allToilet);
  } catch (error) {
    next(error);
  }
});

// Get particular toilet
router.get('/:toiletId', async function(req, res, next) {
  try {
    const id = req.params.toiletId;
    const particularUsersToilet = await Toilet.findById(id);
    console.log('Particular Toilet!');
    res.status(200).send(particularUsersToilet);
  } catch (error) {
    next(error);
  }
});

// // Create a list
router.post('/', async function(req, res, next) {
  try {
    const newToilet = await Toilet.create(req.body);
    res
      .status(201)
      .send({ message: 'Made new Toilet! Woo!', newList: newToilet });
  } catch (error) {
    next(error);
  }
});

// Update particular list
router.put('/:id', async function(req, res, next) {
  try {
    const toiletToUpdate = await Toilet.findById(req.params.id);
    const updatedToilet = await toiletToUpdate.update(req.body);
    res
      .status(201)
      .send({ message: 'Updated a Toilet! Woo!', updatedList: updatedToilet });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
