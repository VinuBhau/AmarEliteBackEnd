const { MongoClient } = require('mongodb');

const mongoURI = 'mongodb+srv://anirudhmore96:Fullstackanirudh96@apartmentcluster.sa5bh.mongodb.net/';

const client = new MongoClient(mongoURI); // ✅ Removed deprecated options

client.connect()
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch((err) => {
    console.error('❌ Failed to connect to MongoDB:', err);
  });

module.exports = client;
