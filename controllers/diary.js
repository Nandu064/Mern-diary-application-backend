const express = require("express");
const Diary = require("../models/diary");

exports.addDiary = async (req, res) => {
  const body = req.body;
  const doc = await new Diary(body);
  doc.save();
  res.send(doc);
};

exports.getAllDiaries = async (req, res) => {
  const { user_id } = req.params;
  const docs = await Diary.find({ user_id });
  res.send(docs);
};

exports.getDiaryById = async (req, res) => {
  const { diary_id } = req.params;
  const docs = await Diary.find({
    _id: diary_id,
  }).populate("page_id");
  res.json(docs);
};
exports.deleteDiary = async (req, res) => {
  const { diary_id } = req.params;
  const docs = await Diary.deleteOne({ _id: diary_id });
  res.json({ message: "Deleted successfully" });
};
