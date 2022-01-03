//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/espece');

//READ
router.get("/especes", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/espece/:id", (req, res) => {
    
    controller.read(req, res);

});

module.exports = router;