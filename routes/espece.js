//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/espece');

//CREATE
router.post("/espece", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/especes", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/espece/:id", (req, res) => {
    
    controller.read(req, res);

});

module.exports = router;