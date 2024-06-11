const mongoose=require('mongoose');
const serverConfig=require('./server.config');
async function connectToDB(){
    try {
        if(serverConfig.NODE_ENV=='development'){
            await mongoose.connect(serverConfig.ATLAS_DB_URL);
            console.log("Connected to DB.")
        }
        
    } catch (error) {
        console.log("Unable to connect to DB Server.");
        console.log(error);
    }
}
module.exports=connectToDB;