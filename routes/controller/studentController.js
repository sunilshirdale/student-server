var express = require('express');
var router = express.Router();
var { regstdService, getstdService } = require('../services/studentService')
router.post('/std-reg', async function (req, res) {
    console.log('reg controller called');
    var result = await regstdService(req);
    res.send(result);
})
router.get('/std-get-reg', async function (req, res) {
    console.log('get controller called');
    var result = await getstdService();
    res.send(result);
})
module.exports = router;