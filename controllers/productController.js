const {Router}= require('express')
const productService = require('../services/productService')

const router = Router()

    router.get('/', (req, res)=> {
        let products = productService.getAll(req.query) //ako nqma nishto vrashta vsi4ko, ako ima query vrashta querito

        res.render('home', {title: 'Browse', products })
    })

    router.get('/create', (req,res)=>{
        res.render('create', {title: 'Create'})
    })

    router.post('/create', (req, res)=>{
        //console.log('created!');
        //console.log(req.body); // za da mojem da vzemem dannte ot create formata POST
        //validate inputs - if(req.body.name.length = ...)

        productService.create(req.body)      // prashtame req.body obekta na funkciqta 

        //res.send('created') just to check if works
        res.redirect('/products')
    })

    router.get('/details/:productId', (req, res)=>{
        console.log(req.params.productId);

        let product = productService.getOne(req.params.productId)
        
        res.render('details', {title: 'Product Details', product}) // podavame title na stranicata i product s IDto
    })

module.exports = router