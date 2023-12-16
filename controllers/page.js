const express = require("express");
const Page = require("../models/page");

const Diary = require("../models/diary");
const { updatepageIds } = require("./diary");
exports.addPage = async (req, res) => {
  const body = req.body;
  console.log("body: ", body);
  const doc = await new Page(body);
  doc.save();
  const diaryDoc = await Diary.updateOne(
    { _id: body?.diary_id },
    { $push: { page_id: doc?._id } }
  );
  if (diaryDoc?.acknowledged) {
    res.json({ message: "Page added successfully" });
  }
};
