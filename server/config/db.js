const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log("Mongo DB Connected: ", conn.connection.host)
            console.log(`DB Name: ${conn.connection.name}`); // 👈 add this line

    }
    catch(err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB