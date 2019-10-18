const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(async (req, res) => {
    console.log('route hit')
   const data = await booksController.findAll()
   console.log('back in route')
   return res.json(data)
  })
  .post((req, res) => {
    console.log(req.body)
    return booksController.create(req.body)
  });

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
