const mongoose = require("mongoose");

const DiarySchema = mongoose.Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "users" },
    page_id: [{ type: Schema.Types.ObjectId, ref: "pages" }],
    name: String,
    year: Number,
    caption: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model("diary", DiarySchema, "diary");
