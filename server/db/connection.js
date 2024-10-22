const mongoose=require('mongoose');
const url=`mongodb+srv://ananyasen4237:GJWFS1NyAaXPT25d@cluster0.uluex.mongodb.net/ChatApp?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(url).then(()=>
{
    console.log('connection successful');
}).catch((err)=> console.log('no connection'));