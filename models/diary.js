const mongoose = require("mongoose");

const DiarySchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    page_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "pages" }],
    name: String,
    year: String,
    caption: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model("diary", DiarySchema, "diary");
