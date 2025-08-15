const express=require("express");
const app=express();
const port=3000;
const path=require("path");
const {v4:uuidv4} = require("uuid");
const methodOverride=require("method-override");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

app.use(methodOverride("_method"));

let notes=[
    {
        id:"1",
        name:"My routine",
        list:["wakeup","exercise","swimming","meditate","swimming","BreakFast","Coding"]
    },
    {
        id:"2",
        name:"Diet Plan",
        list:["Oatmeal", "Banana", "GrilledChicken", "BrownRice", "Salad", "Apple", "Yogurt"]
    },
    {
        id:"3",
        name:"Goals to Achieve",
        list:["LearnGuitar", "ReadBooks", "ExerciseDaily", "SaveMoney", "TravelMore", "ImproveCooking", "Meditate"]
    }
]

// http://localhost:3000/notes

app.get("/notes",(req,res)=>{
    res.render("index",{notes});
});

app.get("/notes/list/:id",(req,res)=>{
    let {id}=req.params;
    let note=notes.find((p)=>id===p.id);
    res.render("list",{note})
})

app.get("/notes/new",(req,res)=>{               
    res.render("newList");
})

app.post("/notes",(req,res)=>{
    let {name}=req.body;
    let id=uuidv4();
    let list=[];
    notes.push({id,name,list});
    res.redirect(`/notes/${id}/item`);
})

app.get("/notes/new/:id",(req,res)=>{
    let {id}=req.params;
    let note=notes.find((p)=>id===p.id);
    res.render("edit_list_name",{note});
})

app.get("/notes/:id/item",(req,res)=>{
    let {id}=req.params;
    let note=notes.find((p)=>id===p.id);
    res.render("item_add",{note});
})

app.put("/notes/:id",(req,res)=>{
    let {name}=req.body;
    let {id}=req.params;

    let note=notes.find((p)=>id===p.id);
    note.name=name;
    res.redirect("/notes");
})

app.post("/notes/:id/item",(req,res)=>{
    let {item}=req.body;
    let {id}=req.params;
    let note=notes.find((p)=>p.id===id);
    if (!note) {
    return res.status(404).send("Note not found");
    }
    note.list.push(item);
    res.redirect(`/notes/${id}/item`);
})

app.delete("/notes/:id",(req,res)=>{
    let {id}=req.params;
    notes=notes.filter((p)=>p.id !== id);
    res.redirect("/notes");
})

app.listen(port,()=>{
    console.log(`Server is listening at Port: ${port}`);
    
})