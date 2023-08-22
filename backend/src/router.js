const express = require("express")

const router = express.Router()

const articlesControllers = require("./controllers/articlesControllers")

router.get("/articles", articlesControllers.browse)
router.get("/articles/:id", articlesControllers.read)
router.post("/articles", articlesControllers.add)
router.put("/articles/:id", articlesControllers.edit)
router.delete("/articles/:id", articlesControllers.destroy)

module.exports = router
