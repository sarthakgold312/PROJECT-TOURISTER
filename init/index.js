const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

// const URL_ = "mongodb://127.0.0.1:27017/TripTales";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect('mongodb+srv://aryaappatel:dNtk7C3fKFsiAP7D@cluster0.ilflx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
};

const initDB = async()=>{
    await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj) => ({ ...obj, owner:'W0MRXMu9LICorF5ltEZeFJSPblETwdqT'}));
    await Listing.insertMany(initdata.data);
    console.log("data was initilized");
};
initDB();