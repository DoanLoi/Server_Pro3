const mongoose = require("mongoose");
import bluebird from "bluebird";
require("dotenv").config();
console.log("====", process.env.MONGODB_URI);
let connectDB = () => {
  mongoose.Promise = bluebird;
  try {
    mongoose.connect('mongodb+srv://admin:admin@cluster0.livbm.mongodb.net/HomeLynh?authSource=admin&replicaSet=atlas-ot4snx-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true&retryWrites=false', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: true
    });
    mongoose.connection.on("connected", () => {
      console.log("Connected to mongo instance");
    });
    mongoose.connection.on("error", (err) => {
      console.error("Error connecting to mongo", err);
    });

  } catch (error) {
    console.error("Error connecting to mongo", err);
  }

  //mongodb://localhost:2108/DVLChat
  // let URI = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
  // return mongoose.connect(URI, { useMongoClient: true });
};
module.exports = connectDB;


// let connectDB = async() => {
//   /**
//    * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//    * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//    */
//   const mongoUri =
//   "mongodb+srv://admin:admin@cluster0.livbm.mongodb.net/facebook?retryWrites=true&w=majority";

//   const client = new MongoClient(mongoUri, {
//     useUnifiedTopology: true
//   });

//   try {
//       // Connect to the MongoDB cluster
//       let connect = await client.connect();
//       console.log(connect);
//   } catch (e) {
//       console.error(e);
//   } finally {
//       await client.close();
//   }
// }

// module.exports = connectDB;