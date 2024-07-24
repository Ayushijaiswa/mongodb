const mongoose =require("mongoose");



main().catch(err=>console.log(err))
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,

});
const User =mongoose.model("User",userSchema);
//const user1=new User({
    //name:"evem",
    //email:"evemm@gmail.com",
  //  age:89,
//});
//user1.save().then((res)=>console.log(res)).catch((err)=>console.log(err));
User.find({age:{$gt:80}}).then((res)=>{
    console.log(res[0].name);
})
User.updateOne({name:"adam"},{age:90}).then((res)=>console.log(res));
User.findOneAndUpdate({name:"adam"},{age:900},{new:true}).then((res)=>console.log(res))
User.deleteOne({name:"evem"}).then((res)=>console.log(res));
