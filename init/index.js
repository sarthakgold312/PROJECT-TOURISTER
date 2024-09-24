const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");
const DB_URL = process.env.ATLASDB_URL;
const url = process.env.M_URL; 


main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb+srv://aryaappatel:dNtk7C3fKFsiAP7D@cluster0.ilflx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}




const initDB = async()=>{
    await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj) => ({ ...obj, owner:'66f1fca24c4d2c1cd9023e78'}));
    await Listing.insertMany(initdata.data);
    console.log("data was initilized");
};
initDB();