var express = require('express');
var _ = require('lodash');
var request = require('request');
var router = express.Router();

const baseURL = "http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=XIAHUA-test-PRD-616e081a6-450e0284&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&paginationInput.entriesPerPage=50&";
/* search items by eBay API */
router.get('/', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    var params = new URLSearchParams();
    params.set('keywords', req.query.keywords);
    if (req.query.category)
        params.set('categoryId', req.query.category);
    let filterIndex = 1;
    if(req.query.location) {
        params.set('buyerPostalCode', req.query.location);
        params.set('itemFilter(0).name', 'MaxDistance');
        params.set('itemFilter(0).value', req.query.distance ? req.query.distance : 10);
        params.set('itemFilter(1).name', 'HideDuplicateItems');
        params.set('itemFilter(1).value', 'true');
    }
    else{
        params.set('itemFilter(0).name', 'HideDuplicateItems');
        params.set('itemFilter(0).value', 'true');
        filterIndex = 0;
    }
    if (req.query.shippingLocal) {
        params.set('itemFilter(' + (++filterIndex) + ').name', 'LocalPickupOnly');
        params.set('itemFilter(' + filterIndex + ').value', 'true');
    }
    if (req.query.shippingFree) {
        params.set('itemFilter(' + (++filterIndex) + ').name', 'FreeShippingOnly');
        params.set('itemFilter(' + filterIndex + ').value', 'true');
    }
    if (req.query.conditionNew || req.query.conditionUsed || req.query.conditionUnspecified) {
        params.set('itemFilter(' + (++filterIndex) + ').name', 'Condition');
        let valueIndex = 0;
        if (req.query.conditionNew)
            params.set('itemFilter(' + filterIndex + ').value(' + (valueIndex++) + ')', 'New');
        if (req.query.conditionUsed)
            params.set('itemFilter(' + filterIndex + ').value(' + (valueIndex++) + ')', 'Used');
        if (req.query.conditionUnspecified)
            params.set('itemFilter(' + filterIndex + ').value(' + (valueIndex) + ')', 'Unspecified');
    }
    params.set('outputSelector(0)', 'SellerInfo');
    params.set('outputSelector(1)', 'StoreInfo');

    console.log("access API: " + baseURL + params.toString())
    request(baseURL + params.toString(), function (error, response, body) {
        console.log("!!");
        if (!error && response.statusCode == 200) {
            let jsonData = JSON.parse(body);
            let results = [];
            if (jsonData.findItemsAdvancedResponse[0].ack[0] === "Success")
                for (item of _.get(jsonData, 'findItemsAdvancedResponse[0].searchResult[0].item', [])) {
                    let result = {};
                    result['image'] = _.get(item, 'galleryURL[0]', '');
                    result['title'] = _.get(item, 'title[0]', '');
                    let tempData = _.get(item, 'sellingStatus[0].currentPrice[0].__value__', 0);
                    result['price'] = parseFloat(tempData).toFixed(2);
                    tempData = _.get(item, 'shippingInfo[0].shippingServiceCost[0].__value__', null);
                    result['shipping'] = tempData ? parseFloat(tempData).toFixed(2) : 'N/A';
                    result['zip'] = _.get(item, 'postalCode[0]', '');
                    result['seller'] = _.get(item, 'sellerInfo[0].sellerUserName[0]', '');
                    result['itemID'] = _.get(item, 'itemId[0]', '0');
                    result['condition'] = _.get(item,'condition["0"].conditionDisplayName["0"]');
                    let shipping = {};
                    result['shippingDetail'] = shipping;
                    shipping['shippingCost'] = result['shipping'] == 'N/A' ? null : result['shipping'];
                    shipping['shippingLocation'] = _.get(item, 'shippingInfo[0].shipToLocations[0]', null);
                    tempData = _.get(item, 'shippingInfo[0].handlingTime[0]', null);
                    if (tempData)
                        tempData = tempData + (parseInt(tempData) > 1 ? ' Days' : ' Day');
                    shipping['handlingTime'] = tempData;
                    shipping['expeditedShipping'] = _.get(item, 'shippingInfo[0].expeditedShipping[0]', null);
                    shipping['oneDayShipping'] = _.get(item, 'shippingInfo[0].oneDayShippingAvailable[0]', null);
                    shipping['returnAccepted'] = _.get(item, 'returnsAccepted[0]', null);
                    results.push(result);
                }
            res.jsonp(results);
        } else {
            res.jsonp([]);
        }
    });
});

module.exports = router;
