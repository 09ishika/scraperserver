const mongoose = require('mongoose'); 
require('../Link'); 
require('../calling') 
mongoose.set('strictQuery', false); 
const DB = process.env.DATABASE; 
try { mongoose.connect(DB); 
    console.log(
        "✅ Connected to database"); 
} catch (error) {
     console.log("❌ Error connecting to database, error"); 
    }
