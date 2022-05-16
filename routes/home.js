const express = required("express")
const router = express.Router()
const homeController = required('../controllers/homeController')

router.get('/', homeController.index)
router.get('/login', homeController.login)

module.exports = router