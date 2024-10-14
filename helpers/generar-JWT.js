const jwt = require( 'jsonwebtoken' );
const fs = require('fs');

const privateKey = fs.readFileSync('./privateKey.key')


const generarJWT = ( uid = '' ) => {
 return new Promise( ( resolve, reject ) => {

  const payload = { uid };

  jwt.sign( payload, privateKey, {
   expiresIn: '4h',
   algorithm: 'RS256',
   allowInsecureKeySizes: true
  }, ( err, token ) => {

   if ( err ) {
    console.log( err );
    reject( 'No se pudo generar el token' );
   } else {
    resolve( token );
   }
  } );

 } );

};



module.exports = {
 generarJWT
};
