// tuka shte pravim neshto za zapisvane na cubovete
const uniqid = require('uniqid')    //za rabota s id-tata nova bibleoteka
const Cube = require('../models/Cube') // .. oznacava vynshna papka
const fs = require('fs')
const path = require('path') // po hubav nacin e da se polzva path bibleotekata ot fs file // nqma da go pravim s path

let productsData = require('../config/products.json')

function getAll(query) {
    //return productsData // shte go ostavim zashtoto moje bi shte ni trqbva
    let result = productsData;

    if (query.search) {
        result = result.filter(x => x.name.toLowerCase().includes(query.search))
    }

    if (query.from){
        result = result.filter(x=> Number(x.level)>=query.from)
    }
    if (query.to){
        result = result.filter(x=> Number(x.level)<=query.to)
    }
    return (result)
}

function getOne(id) {
    return productsData.find(x => x.id == id) // tova e kato natisnem details tazi funkciq da vrashta ID to na cuba
}

function create(data) {
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel) // davame funckiqta i to generira ID



    productsData.push(cube)
    fs.writeFile(__dirname + '/../config/products.json', JSON.stringify(productsData), (err) => {   // ot tekustata papka se varni nazad v json fayla
        if (err) {
            console.log(err);
            return
        }
    })
}

module.exports = {
    create,  // tova e zada moje da se izvikva s productService.create(...neshto si )
    getAll,
    getOne
}