const mongoose = require('mongoose');

async function connectToDatabase() {
  try {
    const connection = await mongoose.connect("mongodb+srv://ashutoshrai126:AsHu%40123@todo.sg9v5mu.mongodb.net/?retryWrites=true&w=majority&appName=TODO", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Example operation after connection is established
    console.log("Database connection successful");

    // If you need to use `isObjectIdOrHexString` or other methods, include them here
    // For example, you can perform operations with the connection variable
  } catch (error) {
    console.error("Database connection error:", error);
  }
}

connectToDatabase();
