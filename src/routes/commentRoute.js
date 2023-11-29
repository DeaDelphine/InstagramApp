const { allComments, newComment, getComment, putComment, deleteComment } = require("../controllers/commentController");

const router = require("express").Router();

router.get("/", allComments);
router.post("/new", newComment);
router.get("/:id", getComment);
router.put("/update/:id", putComment);
router.delete("/delete/:id", deleteComment);

module.exports = router;