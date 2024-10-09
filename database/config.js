const mongoose = require( 'mongoose' );
require( 'dotenv' ).config();


const dbConnection = async () => {


 try {

  await mongoose.connect( process.env.MONGODB_CNN, {});

  console.log( 'Base de datos online' );

 } catch ( error ) {
  console.log( error );
 };

};




module.exports = {
 dbConnection,

};