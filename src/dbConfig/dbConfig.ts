import mongoose, { Connection } from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connect successfully");
    });
    connection.on("error", (err) => {
      console.log(
        `MongoDB connect error. PLease make sure MongoDB is running. ${err}`
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went arong");
    console.error(error);
  }
}
