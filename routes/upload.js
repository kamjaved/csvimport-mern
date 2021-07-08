var express = require("express");
var { post } = require("../controllers/upload");
var router = express.Router();

router.post("/", post);

module.exports = router;
