const express = require("express");
const cors = require("cors");
const { connect } = require("./helper/db_connect");
const PORT = 5001;
const app = express();

app.use(cors());

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  connect();
});

app.use("/api", require("./routes/index"));
