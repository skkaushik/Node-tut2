const exppress=require('express');
require('./config');
const Student=require('./Students');

const app = exppress();
app.use(exppress.json());

app.get("/search/:key",async (req,resp)=>{
        console.log(req.params.key)
        let data=await Student.find(
                {

                        "$or":[
                                {"name":{$regex:req.params.key}}
                        ]
                }
        );
        resp.send(data);

})




app.listen(4200);