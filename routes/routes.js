const express = require('express');
const Model = require('../modal/modal');

const router = express.Router()

//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name.toLowerCase(),
        age: req.body.age
    })

    try {
        const dataToSave = await data.save((err)=>{
            if (err) {
                 console.log(err);           
             }
            else
                return this.dataToSave;
        });
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})



//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//Get by ID Method
router.get('/getSelected/:id', async (req, res) => {
    try{
        const data = await Model.find({name: { $regex: '.*' + req.params.id + '.*' }});
        data.length !== 0? res.json(data) : res.json({error: 'Not Found'})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

module.exports = router;