const mongoose = require('mongoose');
const db = process.env.DATABASE;

const connect = async () => {
    try {
        await mongoose.connect(db , {
          useNewUrlParser: true,
          useUnifiedTopology: true
        });
        console.log("✅ db connected");
    } catch (err) {
        console.log("❌ db connection failed", error);
    }
    mongoose.connection.on("disconnected", () => { console.log("❌ db disconnected"); });
    mongoose.connection.on("reconnected", () => { console.log("✅ db reconnected"); });
}
 
export default { connect };