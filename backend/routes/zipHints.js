var express = require('express');
var _ = require('lodash');
var request = require('request');
var router = express.Router();

const baseURL = "http://api.geonames.org/postalCodeSearchJSON?username=hxgame&country=US&maxRows=5&postalcode_startsWith=";

router.get('/', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    request(baseURL + req.query.q, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let jsonData = JSON.parse(body);
            const result = [];
            for (let data of _.get(jsonData, 'postalCodes', [])) {
                if(data.postalCode){
                    result.push(data.postalCode);
                }
            }
            res.jsonp(result);
        } else
            res.jsonp([]);
    });
});

module.exports = router;