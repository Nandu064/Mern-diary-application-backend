const mongoose = require("mongoose");

const PageSchema = mongoose.Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "users" },
    diary_id: { type: Schema.Types.ObjectId, ref: "diary" },
    content: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model("pages", PageSchema, "pages");
