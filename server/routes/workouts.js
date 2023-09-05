const express = require('express')

const router = express.Router()

// GET all workouts
router.get('/', (request, response) => {
    response.json({message: 'GET all workouts'})
})

// GET a single workout
router.get('/:id', (request, response) => {
    response.json({message: 'GET a single workout'})
})

// POST a new workout
router.post('/', (request, response) => {
    response.json({message: 'POST a new workout'})
})

// DELETE a workout
router.delete('/:id', (request, response) => {
    response.json({message: 'DELETE a workout'})
})

// UPDATE a workout
router.patch('/:id', (request, response) => {
    response.json({message: 'UPDATE a workout'})
})


module.exports = router