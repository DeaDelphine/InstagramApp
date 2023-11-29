const { allPosts, newPost, getPost, putPost, deletePost } = require("../controllers/postController");

const router = require("express").Router();

router.get("/", allPosts);
router.post("/new", newPost);
router.get("/:id", getPost);
router.put("/update/:id", putPost);
router.delete("/delete/:id", deletePost);

module.exports = router;