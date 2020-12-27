require('dotenv').config();

const mongoose = require('mongoose');
import bluebird from 'bluebird';

/**
 * Connect to MongoDB
 */
let connectDB = () => {
  mongoose.Promise = bluebird;
  try {
    console.log('1======', process.env.MONGODB_URI);
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: true
      })
      .then(r => console.log('Connect mongodb success!'))
      .catch(reason => console.error('Error connecting to mongo', reason));

    mongoose.connection.on('connected', () => {
      console.log('Connected to mongo instance');
    });
    mongoose.connection.on('error', (err) => {
      console.error('Error connecting to mongo', err);
    });

  } catch (error) {
    console.error('Error connecting to mongo', error);
    throw error;
  }

  //mongodb://localhost:2108/DVLChat
  // let URI = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
  // return mongoose.connect(URI, { useMongoClient: true });
};
module.exports = connectDB;

// import {MongoClient} from 'mongodb';

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