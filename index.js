const mongoose=require('mongoose');
const main=async()=>{
        await mongoose.connect("mongodb://127.0.0.1:27017/RECB");
        const StudentsSchema= new mongoose.Schema(
                {
                        name:String,
                        marks:Number
                });

        const StudentsModel =new mongoose.model('Students',StudentsSchema)
        let data =new StudentsModel({name:'Rachit',marks:76});
        let result = await data.save();
        console.log(result)

}

main();