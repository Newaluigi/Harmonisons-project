const express = require("express")

const router = express.Router()

const articlesControllers = require("./controllers/articlesControllers")

router.get("/articles", articlesControllers.browsePublishedArticles)
router.get("/archivedarticles", articlesControllers.browseArchivedArticles)
router.get("/articles/:id", articlesControllers.read)
router.post("/articles", articlesControllers.add)
router.put("/articles/:id", articlesControllers.edit)
router.delete("/articles/:id", articlesControllers.destroy)

module.exports = router
