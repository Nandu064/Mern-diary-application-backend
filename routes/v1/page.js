const express = require("express");
const router = express.Router();
const Page = require("../../controllers/page");
// router.get("/get-user-by-id/:id", Users.getUserById);
// router.post("/add-diary", Diary.addDiary);
// router.get("/:user_id", Diary.getAllDiaries);
router.post("/add-page", Page.addPage);
// router.post("/login", Users.login);
module.exports = router;
