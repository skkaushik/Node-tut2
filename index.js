const mongoose=require('mongoose');
 mongoose.connect("mongodb://127.0.0.1:27017/RECB");
        const StudentsSchema= new mongoose.Schema(
                {
                        name:String,
                        marks:Number,
                        email1:String,
                        address:String

                });
const saveDatainDb=async()=>{
        

        const StudentsModel =new mongoose.model('Students',StudentsSchema)
        let data =new StudentsModel({name:'Anju',marks:70,email1:'beautiqueen@gmail.com',address:'Balia'});
        let result = await data.save();
        console.log(result)

}

// saveDatainDb();
const updateData=async()=>{
        const Student=mongoose.model('Students',StudentsSchema);
        let data = await Student.updateOne(
                {
                        name:'Rachit'
                },
                {$set:{email1:'rachit@gamil.com'}}
        )
        console.log(data)
}

// updateData();
const deleteInDB = async ()=>{
        const Student = mongoose.model('Students', StudentsSchema);
        let data = await Student.deleteOne({name:'Sachin'})
        console.log(data);
    }

// deleteInDB();
    const findInDB = async ()=>{
        const Student = mongoose.model('Students', StudentsSchema);
        let data = await Student.find({name:'Anju'})
        console.log(data);
    }
    
    findInDB();