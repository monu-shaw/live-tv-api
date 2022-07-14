
const Model = require('../modal/modal');
const router = require('express').Router()


//Get by ID Method
router.get('/', async (req, res) => {
    try{
        const data = await Model.find();
      
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.get('/users/:id', async (req, res) =>{
    const data = await Model.findById(req.params.id)
    res.render('user', {data: data});
  	//res.send('respond with a resource');
});


module.exports = router;