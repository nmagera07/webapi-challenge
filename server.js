const express = require('express')

const server = express()

server.use(express.json())

const people = [
    {
        id: 1,
        name: 'person1'
    },
    {
        id: 2,
        name: 'person2'
    },
    {
        id: 3,
        name: 'person3'
    },
    {
        id: 4,
        name: 'person4'
    },
]

const chores = [
    // {
    //     id: 1,
    //     description: '',
    //     notes: '',
    //     assignedTo: people.id,
    //     completed: false
    // },
]

server.get('/', (req, res) => {
    res.status(200).json({ message: 'welcome to the server'})
    // res.status(200).json(people)
})

server.get('/chores', (req, res) => {
    if (chores) {
        res.status(200).json(chores)
    } else {
        res.status(500).json({ error: 'Cannot get list of chores.'})
    }
})

server.post('/chores', (req, res) => {
    // const total = chores.push(chores)
    if (chores) {
        res.status(201).json(chores)
    } else {
        res.status(500).json({ error: 'Cannot add to list of chores.'})
    }
})

server.delete('/chores/:id', (req, res) => {
    if (chores.id) {
        res.status(200).json(chores)
    } else {
        res.status(500).json({ error: 'Cannot delete chore. '})
    }
})

server.put('chores/:id', (req, res) => {
    if (chores) {
        res.status(200).json(chores.pop(chores))
    } else {
        res.status(500).json({ error: 'Cannot update chore. '})
    }
})

server.get('/:id/chores', (req, res) => {
    if (person.id) {
        res.status(200).json(chores)
    } else if (!person.id) {
        res.status(404).json({ error: 'Person could not be found.'})
    } 
    if (!chores) {
        res.status(200).json([])
    }
})


module.exports = server