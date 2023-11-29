const { allPosts, newPost, getPost, putPost, deletePost } = require("../controllers/postController");

const router = require("express").Router();
const multer = require("multer");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    },
});

const upload = multer({ storage: storage });

router.get("/", allPosts);
router.post("/new", upload.single('image'), newPost);
router.get("/:id", getPost);
router.put("/update/:id", putPost);
router.delete("/delete/:id", deletePost);

module.exports = router;