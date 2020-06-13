const mongoose = require("mongoose");

exports.dbConnection2 = async () => {
  const db = process.env.DATABASE2;
  const dbConnection2 = await mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
  return dbConnection2;
};
