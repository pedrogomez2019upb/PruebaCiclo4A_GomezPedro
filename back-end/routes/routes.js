const express=require('express');
const router = express.Router();
const Model=require('../model/model');
module.exports=router;

//Get all method
router.get('/get',async (req,res)=>{
    try{
        const data=await Model.find();
        res.json(data);

    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }

})

//get by id
router.get('/getOne/:id', async (req,res)=>{
    try{
        const data= await Model.findById(req.params.id);
        res.json(data);

    }
    catch(error){
        res.status(500),json({
            message:error.message
        })

    }
})

//update by id
router.patch('/update/:id', async(req,res)=>{
    try{
        const id=req.params.id;
        const updateData=req.body;
        const options= {new:true};

        const result= await Model.findByIdAndUpdate(
            id,updateData,options
        )
        res.send(result);
    }
    catch(error){
        res.status(400).json({
            message:error.message
        })

    }
})
//Post Method
router.post('/post', async (req,res)=>{
    const data=new Model({
        titulo:req.body.titulo,
        estado:req.body.estado,
        descripcion:req.body.descripcion
    })

    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);

    }
    catch(error){
        res.status(400).json({message:error.message});

    }
})


//Delete method by id
router.delete('/delete/:id', async (req,res)=>{
    try{
        const id= req.params.id
        const data = await Model.findByIdAndDelete(id);
        res.send('Eliminado');
    }
    catch(error){
        res.status(400).json({
            message:error.message
        })

    }
})