const mongoose = require('mongoose');
const username = process.env.ATLAS_USERNAME
const dbPassword = process.env.ATLAS_PASSWORD
const db = process.env.DB




mongoose.connect((`mongodb+srv://${username}:${dbPassword}@serverlessinstance0.svsa0fs.mongodb.net/${db}`), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));



const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://GaryMagill22:<${dbPassword}>@serverlessinstance0.svsa0fs.mongodb.net/?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('Error in DB connection:', err.message);
        process.exit(1); // Exit with failure code
    }
};

module.exports = connectDB;















