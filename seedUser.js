var seeder = require("mongoose-seed");
var mongoose = require("mongoose");

// Connect to MongoDB via Mongoose
seeder.connect(
  // "mongodb+srv://randi:rama0809@cluster0.hjb1s.mongodb.net/db_staycation?retryWrites=true&w=majority",
  "mongodb://localhost:27017/db_ridho",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
  function () {
    // Load Mongoose models
    seeder.loadModels([
      "./models/Users",
    ]);

    // Clear specified collections
    seeder.clearModels(
      [
        "Users",
      ],
      function () {
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function () {
          seeder.disconnect();
        });
      }
    );
  }
);

var data = [
  {
    model: "Users",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903345"),
        username: "ridho",
        password: "ridho",
        role: "admin",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903346"),
        username: "admin",
        password: "rahasia",
        role: "admin",
      },
    ],
  },
];
