
import mongoose from 'mongoose';

const Connection = async (username, password) => {
    
   
    try {
       await mongoose.connect(URL, { useNewUrlParser: true });
        
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;