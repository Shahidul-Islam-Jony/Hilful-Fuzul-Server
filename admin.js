// for update user email without email verification.but it is not recommanded
// Delete user as super Admin
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount)
});
module.exports = admin;
