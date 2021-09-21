const{Router}=require("express")
const express= require("express")
const router=express.Router()
const Tarea=require("../models/tareas")
router.get("/",(req,res)=>{

    res.render("index")
})

router.post("/agregarActividad", (req,res)=>{

    console.log(req.body)
   
    res.send("datos recibidos")
})

module.exports=router;