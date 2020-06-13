// const mongoose = require("mongoose");

// exports.dbConnection1 = async () => {
//   const db = process.env.DATABASE1.replace(
//     "<PASSWORD>",
//     process.env.DATABASE_PASSWORD
//   );
//   const dbConnection1 = await mongoose.connect(db, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
//   });
//   return dbConnection1;
// };

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://sunny:sunnyharsh@123@cluster0-3gshx.mongodb.net/natours?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    DeprecationWarning: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
);
module.exports = mongoose;
