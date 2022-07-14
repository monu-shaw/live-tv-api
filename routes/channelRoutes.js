const express = require('express');
const Model = require('../modal/channelModel');
var cors = require('cors')
const router = express.Router()


//Post Method
router.post('/post',  async (req, res) => {
    const data = new Model({
        name: req.body.name.toLowerCase(),
        imgUrl: req.body.imgUrl? null:req.body.imgUrl,
        low: req.body.low ===''? null:req.body.low,
        mid: req.body.mid ===''? null:req.body.mid,
        high: req.body.high ===''? null:req.body.high,
        category: req.body.category.toLowerCase()
    });
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})



//Get all Method
router.get('/getAll',  async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id',async (req, res) => {
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
        const data = await Model.find({category: { $regex: '.*' + req.params.id + '.*' }});
        data.length !== 0? res.json(data) : res.json({error: 'Not Found'})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.status(200).json(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        const data2 = await Model.find();
        res.status(200).json(data2)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
// Same Category
router.get('/getSelected/:id', async (req, res) => {
    try{
        const data = await Model.find({category: { $regex: '.*' + req.params.id + '.*' }});
        data.length !== 0? res.json(data) : res.json({ error: 'Not Found'})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router;