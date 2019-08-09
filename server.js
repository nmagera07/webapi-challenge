const express = require('express')

const server = express()

server.use(express.json())

let people = [
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

let chores = [
    
]

let choreId = chores.length



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
    const { description, notes, assignedTo, completed } = req.body
    const body = {id: choreId, description, notes, assignedTo: chores.length, completed: false}
    if (!description) {
        res.status(404).json({ error: 'Description is needed to add a chore. '})
    }
    if (chores) {
        chores.push(body)
        choreId++
        res.status(201).json(chores)
    } else {
        res.status(500).json({ error: 'Cannot add to list of chores.'})
    }
})

server.delete('/chores/:id', (req, res) => {
    const { id } = req.params
    const foundChore = chores.find(chore => chore.id == id)

    if (foundChore) {
        chores = chores.filter(chore => chore.id != id)
        res.status(200).json(chores)
    } else {
        res.status(500).json({ error: 'No chore could be found for that ID'})
    }

})

server.put('/chores/:id', (req, res) => {
    const { id } = req.params
    const { description, notes} = req.body
    const findChore = chore => {
        return chore.id == id
    }

    const foundChore = chores.find(findChore)
    if (foundChore) {
        if (description) foundChore.description = description
        if (notes) foundChore.notes = notes
        res.status(200).json(chores)
    } else {
        res.status(500).json({ error: 'Cannot update chore. '})
    }
})

server.get('/chores/:id', (req, res) => {
    const { id } = req.params
    const findChore = chore => {
        return chore.id == id
    }

    const foundChore = chores.find(findChore)
    
    console.log(req.body)
    
    if (foundChore) {
        
        res.status(200).json(chores)
    } else  {
        res.status(404).json({ error: 'Person could not be found.'})
    } 
    if (!chores) {
        res.status(200).json([])
    }
})

server.get(`/chores?completed=`, (req, res) => {
    req.completed = req.query.completed
    console.log(req.completed)

    if (completed === true) {
        res.status(200).json(chores)
    } else {
        res.status(200).json([])
    }
    if (completed === '') {
        res.status(200).json(chores)
    }
})


module.exports = server