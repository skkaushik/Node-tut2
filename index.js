const exppress=require('express');
require('./config');
const Student=require('./Students');

const app = exppress();
app.use(exppress.json());
app.post("/create",async(req,resp)=>{
        let data=new Student(req.body)
        let result= await data.save()
        console.log(result)
        resp.send(result);
});

app.get("/list",async (req,resp)=>{
        let data=await Student.find();
        resp.send(data);


});

app.delete("/delete/:_id",async (req,resp)=>{
        console.log(req.params)
        let data = await Student.deleteOne(req.params)
        resp.send(data);


});

app.put("/update/:_id",async (req,resp)=>{
        console.log(req.params)
        let data = await Student.updateOne(
                req.params,
                {
                  $set:req.body      
                }
                )
        resp.send(data);


});



app.listen(4200);