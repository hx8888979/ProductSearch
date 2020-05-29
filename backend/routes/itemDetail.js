var express = require('express');
var request = require('request');
var _ = require('lodash');
var router = express.Router();

function constructStringPair(dataHolder, name, value) {
    if (value) {
        dataHolder.push({name: name, value: value});
    }
}

const photoURL = "https://www.googleapis.com/customsearch/v1?cx=002604374728888102159:3gbv-k6zbgi&imgSize=huge&imgType=news&num=8&searchType=image&key=AIzaSyB9tnhUdzNgaAA1iPOIHjk0zIgrQiEPVG4&";
const itemDetailURL = "http://open.api.ebay.com/shopping?callname=GetSingleItem&responseencoding=JSON&appid=XIAHUA-test-PRD-616e081a6-450e0284&siteid=0&version=967&IncludeSelector=Description,Details,ItemSpecifics&ItemID=";
const similarItemsURL = "http://svcs.ebay.com/MerchandisingService?OPERATION-NAME=getSimilarItems&SERVICE-NAME=MerchandisingService&SERVICE-VERSION=1.1.0&CONSUMER-ID=XIAHUA-test-PRD-616e081a6-450e0284&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&maxResults=20&itemId=";
const timeRegExp = /(?:P)(\d+)(?:D)/;
router.get('/', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let retObject = {};
    let photosRequest = new Promise(resolve => {
        let params = new URLSearchParams();
        params.set("q", req.query.itemTitle);
        request(photoURL + params.toString(), function (error, response, body) {
            let photos = [];
            retObject['photos'] = photos;
            if (!error && response.statusCode == 200) {
                let jsonData = JSON.parse(body);
                for (let item of _.get(jsonData, 'items', [])) {
                    photos.push(item.link);
                }
            }
            resolve();
        })
    });
    let detailsRequest = new Promise(resolve =>
        request(itemDetailURL + encodeURI(req.query.itemID), function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let jsonData = JSON.parse(body);
                let info = {};
                let itemSpecifics = [];
                let seller = {};
                info['image'] = _.get(jsonData, 'Item.PictureURL', []);
                info['url'] = _.get(jsonData, 'Item.ViewItemURLForNaturalSearch', '');
                info['itemSpecifics'] = itemSpecifics;
                let temp = _.get(jsonData, 'Item.GlobalShipping', null);
                info['globalShipping'] = temp != null ? (temp ? 'Yes' : 'No') : temp;
                info['returnsAccepted']=_.get(jsonData, 'Item.ReturnPolicy.ReturnsAccepted');
                info['refund']=_.get(jsonData, 'Item.ReturnPolicy.Refund');
                info['returnsWithin']=_.get(jsonData,'Item.ReturnPolicy.ReturnsWithin');
                info['shippingCostPaidBy']=_.get(jsonData,'Item.ReturnPolicy.ShippingCostPaidBy');
                constructStringPair(itemSpecifics, 'Subtitle', _.get(jsonData, 'Item.Subtitle', null));
                let price = _.get(jsonData, 'Item.CurrentPrice.Value', null);
                if (price) {
                    constructStringPair(itemSpecifics, 'Price', '$' + parseFloat(price).toFixed(2));
                }
                constructStringPair(itemSpecifics, 'Location', _.get(jsonData, 'Item.Location', null));
                for (item of _.get(jsonData, 'Item.ItemSpecifics.NameValueList', [])) {
                    constructStringPair(itemSpecifics, item.Name, item.Value[0]);
                }
                seller['id'] = _.get(jsonData, 'Item.Seller.UserID', null);
                seller['feedbackScore'] = _.get(jsonData, 'Item.Seller.FeedbackScore', null);
                seller['popularity'] = _.get(jsonData, 'Item.Seller.PositiveFeedbackPercent', null);
                seller['feedbackRatingStar'] = _.get(jsonData, 'Item.Seller.FeedbackRatingStar', null);
                seller['topRated'] = _.get(jsonData, 'Item.Seller.TopRatedSeller', null);
                seller['storeName'] = _.get(jsonData, 'Item.Storefront.StoreName', null);
                seller['buyProductAt'] = _.get(jsonData, 'Item.Storefront.StoreURL', null);
                retObject['info'] = info;
                retObject['seller'] = seller;
            }
            resolve();
        }));
    let similarItemsRequest = new Promise(resolve =>
        request(similarItemsURL + req.query.itemID, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let jsonData = JSON.parse(body);
                let similarProducts = [];
                for (let item of _.get(jsonData, 'getSimilarItemsResponse.itemRecommendations.item', [])) {
                    let returnItem = {};
                    returnItem['image'] = _.get(item, 'imageURL');
                    returnItem['productName'] = _.get(item, 'title');
                    returnItem['price'] = _.get(item, 'buyItNowPrice.__value__');
                    returnItem['shippingCost'] = _.get(item, 'shippingCost.__value__');
                    returnItem['daysLeft'] = timeRegExp.test(_.get(item, 'timeLeft')) ? RegExp.$1 : 0;
                    returnItem['url'] = _.get(item, 'viewItemURL', 'javascript:void(0)');
                    similarProducts.push(returnItem);
                }
                retObject['similarProducts'] = similarProducts;
            }
            resolve();
        }));
    Promise.all([photosRequest, detailsRequest, similarItemsRequest]).then(() => res.jsonp(retObject));
});

module.exports = router;
