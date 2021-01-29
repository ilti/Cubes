const {Router} = require('express');

const productController = require ('./controllers/productController')
const homeController = require ('./controllers/homeController')

const router = Router() //instanciq na router

router.use('/', homeController)
router.use('/products', productController)
router.get('*', (req, res)=>{
    res.render('404') // za vsqko drugo neshto koeto iskam da otvorq kazva 404
})

module.exports = router