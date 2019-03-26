const express = require("express");
const controller = require("../controllers/article.controller");
const dao = require("../dao/article.dao");
const router = express.Router();

// middlewares
const checkIDInput = function (req, res, next) {  
    if(isNaN(req.params.id)) {
        res.status(400).json("Invalid ID supplied");
    } else {
        next();
    }
};
const checkIDExists = function (req, res, next) {
    //TODO : use dao.exists
    Book.count({ where: { id: req.params.id } }).then(count => {
        if (count != 0) {
            next();
        } else {
            //console.log("Book not found");
            res.status(400).json("Book not found");
        }
    }); 
};

//DOC router.METHOD(ENDPOINT, [MIDDLEWARES], CONTROLLER.FUNCTION)

router.get('/', controller.list);

router.post('/', controller.create);

router.get('/:id', [checkIDInput, checkIDExists], controller.get);

router.put('/:id', [checkIDInput, checkIDExists], controller.update);

router.delete('/:id', [checkIDInput, checkIDExists], controller.remove);

module.exports = router;