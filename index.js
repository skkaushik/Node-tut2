const getData=require('./mongodb')
// getData().then((response)=>{
//         response.find({}).toArray().then((data)=>{
//                 console.log(data)
//         })

// });

const main=async ()=>{
        let data = await getData();
        data= await data.find().toArray();
        console.log(data);
}

main();