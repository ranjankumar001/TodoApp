const express=require('express');
const model=require('./todo.model')
const router=express.Router();

router.get('/', (req, res) => {
    model.find()
    .then(data=> res.json(data))
    .catch(err=>res.status(400).json('Error'+err))
});

router.get('/:id', (req, res) => {
    model.findById(req.params.id)
    .then(data=> res.json(data))
    .catch(err=>res.status(400).json('Error'+err))
});

router.post('/add', (req, res) => {
    let todo=new model(req.body);
    todo.save()
    .then(()=>res.json('todo added'))
    .catch(err=>res.status(400).json('Error'+err));
});

router.post('/update/:id', (req, res) => {
    model.findById(req.params.id)
    .then(data=>{
        data.todo_description=req.body.todo_description;
        data.todo_responsible=req.body.todo_responsible;
        data.todo_priority=req.body.todo_priority;
        data.todo_completed=req.body.todo_completed;

        data.save()
        .then(()=> res.json("data updated"))
        .catch(err=> res.status(400).json("Error"+err))
    })
    .catch(err=> res.status(400).json("Error"+err))
});

router.delete('/:id', (req, res) => {
    model.findByIdAndDelete(req.params.id)
    .then(()=> res.json("todo deleted"))
    .catch(err=>res.status(400).json('Error'+err))
});
module.exports=router;