const express = require("express");
const router = express.Router();
const Diary = require("../../controllers/diary");
// router.get("/get-user-by-id/:id", Users.getUserById);
router.post("/add-diary", Diary.addDiary);
router.get("/:user_id", Diary.getAllDiaries);
router.get("/get-diary-by-id/:diary_id", Diary.getDiaryById);
router.delete("/delete/:diary_id", Diary.deleteDiary);

// router.post("/login", Users.login);
module.exports = router;
