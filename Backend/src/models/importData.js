// const { MongoClient } = require('mongodb');
// const fs = require('fs');

// // Connection URI
// const uri = "mongodb+srv://HarborReads:MongoDB%40HR12@cluster0.nhckanx.mongodb.net/harborreads?retryWrites=true&w=majority" ;

// // Create a new MongoClient
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function importData() {
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();

//         // Specify the database and collection
//         const database = client.db('harborreads');
//         const collection = database.collection('userprofile');

//         // Read data from JSON file
//         const jsonData = JSON.parse(fs.readFileSync('jsonviewer.json', 'utf8'));

//         // Insert data into MongoDB
//         await collection.insertMany(jsonData);

//         console.log('Data imported successfully');
//     } finally {
//         // Close the client connection
//         await client.close();
//     }
// }

// // Call the importData function
// importData().catch(console.error);
