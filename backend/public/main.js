(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-search-form class=\"text-white col-12 rounded mt-3\" style=\"background-color: #1f1f26;\"\n                 (search)=\"resultList.fetchSearchResult($event)\" (reset)=\"resultList.reset()\"></app-search-form>\n<app-result-list class=\"col-12 p-0\" #resultList></app-result-list>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-form/search-form.component */ "./src/app/search-form/search-form.component.ts");
/* harmony import */ var _result_list_result_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./result-list/result-list.component */ "./src/app/result-list/result-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./item-detail/item-detail.component */ "./src/app/item-detail/item-detail.component.ts");
/* harmony import */ var _item_detail_tab_photos_tab_photos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./item-detail/tab-photos/tab-photos.component */ "./src/app/item-detail/tab-photos/tab-photos.component.ts");
/* harmony import */ var _item_detail_tab_similar_products_tab_similar_products_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./item-detail/tab-similar-products/tab-similar-products.component */ "./src/app/item-detail/tab-similar-products/tab-similar-products.component.ts");
/* harmony import */ var _item_detail_tab_info_tab_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./item-detail/tab-info/tab-info.component */ "./src/app/item-detail/tab-info/tab-info.component.ts");
/* harmony import */ var _item_detail_tab_shipping_tab_shipping_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./item-detail/tab-shipping/tab-shipping.component */ "./src/app/item-detail/tab-shipping/tab-shipping.component.ts");
/* harmony import */ var _item_detail_tab_seller_tab_seller_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./item-detail/tab-seller/tab-seller.component */ "./src/app/item-detail/tab-seller/tab-seller.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_8__["SearchFormComponent"],
                _result_list_result_list_component__WEBPACK_IMPORTED_MODULE_9__["ResultListComponent"],
                _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_11__["ItemDetailComponent"],
                _item_detail_tab_photos_tab_photos_component__WEBPACK_IMPORTED_MODULE_12__["TabPhotosComponent"],
                _item_detail_tab_similar_products_tab_similar_products_component__WEBPACK_IMPORTED_MODULE_13__["TabSimilarProductsComponent"],
                _item_detail_tab_info_tab_info_component__WEBPACK_IMPORTED_MODULE_14__["TabInfoComponent"],
                _item_detail_tab_shipping_tab_shipping_component__WEBPACK_IMPORTED_MODULE_15__["TabShippingComponent"],
                _item_detail_tab_seller_tab_seller_component__WEBPACK_IMPORTED_MODULE_16__["TabSellerComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_6__["RoundProgressModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/item-detail/item-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/item-detail/item-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\r\n  color: black;\r\n}\r\n.nav-tabs .nav-link.active {\r\n  color: white;\r\n  background-color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS1kZXRhaWwvaXRlbS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tZGV0YWlsL2l0ZW0tZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxpbmsge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4ubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/item-detail/item-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/item-detail/item-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"show\" [@slideInOut]>\n  <div *ngIf=\"onProgress\" class=\"progress\">\n    <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"50\"\n         aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 50%\"></div>\n  </div>\n  <div *ngIf=\"currentItem && itemDetail\">\n    <h4 class=\"text-center\">{{currentItem.title}}</h4>\n    <div class=\"d-flex align-self-start justify-content-between\">\n      <div>\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"goBack()\">\n          <i class=\"material-icons\">arrow_back_ios</i>List\n        </button>\n      </div>\n      <div class=\"d-flex align-items-stretch\">\n        <a target=\"_blank\" [href]=\"getShareLink()\"><img src=\"assets/img/facebook.png\" width=\"40\" height=\"40\"/></a>\n        <button *ngIf=\"requestService.isInWishList(currentItem.itemID);else addToCart\"\n                type=\"button\" class=\"btn btn-light\" (click)=\"requestService.deleteWishListItem(currentItem.itemID)\">\n          <i class=\"material-icons\" style=\"color: #af7d11\">remove_shopping_cart</i></button>\n        <ng-template #addToCart>\n          <button type=\"button\" class=\"btn btn-light\" (click)=\"requestService.addWishListItem(currentItem)\">\n            <i class=\"material-icons\">add_shopping_cart</i></button>\n        </ng-template>\n      </div>\n    </div>\n    <ul class=\"nav nav-tabs justify-content-end\">\n      <li *ngFor=\"let tab of detailField; index as i;last as isLast\" class=\"nav-item\">\n        <a class=\"nav-link px-1 px-sm-3\" [class.d-none]=\"isLast\" [class.d-sm-block]=\"isLast\" [class.active]=\"i == activeTabIndex\" (click)=\"activeTabIndex = i\"\n           href=\"javascript:void(0);\">{{tab}}</a>\n        <a *ngIf=\"isLast\" class=\"nav-link d-sm-none px-1\" [class.active]=\"i == activeTabIndex\" (click)=\"activeTabIndex = i\"\n           href=\"javascript:void(0);\">Related</a>\n      </li>\n    </ul>\n    <app-tab-info [hidden]=\"activeTabIndex != 0\" [info]=\"itemDetail.info\"></app-tab-info>\n    <app-tab-photos [hidden]=\"activeTabIndex != 1\" [photos]=\"itemDetail.photos\"></app-tab-photos>\n    <app-tab-shipping [hidden]=\"activeTabIndex != 2\" [shipping]=\"itemDetail.shipping\"></app-tab-shipping>\n    <app-tab-seller [hidden]=\"activeTabIndex != 3\" [seller]=\"itemDetail.seller\"></app-tab-seller>\n    <app-tab-similar-products [hidden]=\"activeTabIndex != 4\"\n                              [similarProducts]=\"itemDetail.similarProducts\"></app-tab-similar-products>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/item-detail/item-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/item-detail/item-detail.component.ts ***!
  \******************************************************/
/*! exports provided: ItemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailComponent", function() { return ItemDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.service */ "./src/app/request.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");




var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(requestService) {
        this.requestService = requestService;
        this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.detailField = ['Product', 'Photos', 'Shipping', 'Seller', 'Similar Products'];
        this.activeTabIndex = 0;
        this.onProgress = false;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
    };
    ItemDetailComponent.prototype.selectedItem = function (item) {
        if (this.currentItem !== item) {
            this.currentItem = item;
            this.updateData();
        }
    };
    ItemDetailComponent.prototype.updateData = function () {
        var _this = this;
        this.onProgress = true;
        this.itemDetail = null;
        this.requestService.getItemDetails(this.currentItem.itemID, this.currentItem.title).subscribe(function (item) {
            _this.itemDetail = item;
            _this.itemDetail.shipping = _this.currentItem.shippingDetail;
            _this.onProgress = false;
            console.log(_this.itemDetail);
        });
    };
    ItemDetailComponent.prototype.goBack = function () {
        this.activeTabIndex = 0;
        this.back.emit();
    };
    ItemDetailComponent.prototype.getShareLink = function () {
        return 'https://www.facebook.com/dialog/share?app_id=420004688576679&display=popup&redirect_uri=http%3A%2F%2Flocalhost&quote=' +
            'Buy ' + this.currentItem.title + ' at $' + this.currentItem.price + ' from link below.&href=' + this.itemDetail.info.url;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemDetailComponent.prototype, "back", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ItemDetailComponent.prototype, "show", void 0);
    ItemDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-detail',
            template: __webpack_require__(/*! ./item-detail.component.html */ "./src/app/item-detail/item-detail.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(-100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(0%)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(100%)' }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./item-detail.component.css */ "./src/app/item-detail/item-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());



/***/ }),

/***/ "./src/app/item-detail/item-detail.ts":
/*!********************************************!*\
  !*** ./src/app/item-detail/item-detail.ts ***!
  \********************************************/
/*! exports provided: ItemDetail, Info, Shipping, Seller, SimilarProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetail", function() { return ItemDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shipping", function() { return Shipping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Seller", function() { return Seller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimilarProduct", function() { return SimilarProduct; });
var ItemDetail = /** @class */ (function () {
    function ItemDetail() {
    }
    return ItemDetail;
}());

var Info = /** @class */ (function () {
    function Info() {
    }
    return Info;
}());

var Shipping = /** @class */ (function () {
    function Shipping() {
    }
    return Shipping;
}());

var Seller = /** @class */ (function () {
    function Seller() {
    }
    return Seller;
}());

var SimilarProduct = /** @class */ (function () {
    function SimilarProduct() {
    }
    return SimilarProduct;
}());



/***/ }),

/***/ "./src/app/item-detail/tab-info/tab-info.component.css":
/*!*************************************************************!*\
  !*** ./src/app/item-detail/tab-info/tab-info.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tZGV0YWlsL3RhYi1pbmZvL3RhYi1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/item-detail/tab-info/tab-info.component.html":
/*!**************************************************************!*\
  !*** ./src/app/item-detail/tab-info/tab-info.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-dark table-striped\">\n  <tr>\n    <td>Product Images</td>\n    <td><a href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#imageViewer\">View Product Images Here</a></td>\n  </tr>\n  <tr *ngFor=\"let tableRow of info.itemSpecifics\">\n    <td>{{tableRow.name}}</td>\n    <td>{{tableRow.value}}</td>\n  </tr>\n</table>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"imageViewer\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Product Images</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div id=\"pictures\" class=\"carousel slide m-2\" data-ride=\"carousel\">\n          <div class=\"carousel-inner\">\n            <div *ngFor=\"let url of info.image;first as f;\" class=\"carousel-item rounded p-2 bg-dark\" [class.active]=\"f\">\n              <a target=\"_blank\" [href]=\"url\"><img [src]=\"url\" class=\"w-100 p-1 bg-white img-fluid\"></a>\n            </div>\n            <a class=\"carousel-control-prev\" href=\"#pictures\" role=\"button\" data-slide=\"prev\">\n              <span class=\"carousel-control-prev-icon bg-dark\" aria-hidden=\"true\"></span>\n            </a>\n            <a class=\"carousel-control-next\" href=\"#pictures\" role=\"button\" data-slide=\"next\">\n              <span class=\"carousel-control-next-icon bg-dark\" aria-hidden=\"true\"></span>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/item-detail/tab-info/tab-info.component.ts":
/*!************************************************************!*\
  !*** ./src/app/item-detail/tab-info/tab-info.component.ts ***!
  \************************************************************/
/*! exports provided: TabInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabInfoComponent", function() { return TabInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _item_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-detail */ "./src/app/item-detail/item-detail.ts");



var TabInfoComponent = /** @class */ (function () {
    function TabInfoComponent() {
    }
    TabInfoComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _item_detail__WEBPACK_IMPORTED_MODULE_2__["Info"])
    ], TabInfoComponent.prototype, "info", void 0);
    TabInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab-info',
            template: __webpack_require__(/*! ./tab-info.component.html */ "./src/app/item-detail/tab-info/tab-info.component.html"),
            styles: [__webpack_require__(/*! ./tab-info.component.css */ "./src/app/item-detail/tab-info/tab-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabInfoComponent);
    return TabInfoComponent;
}());



/***/ }),

/***/ "./src/app/item-detail/tab-photos/tab-photos.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/item-detail/tab-photos/tab-photos.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 576px) {\r\n  .card-space {\r\n    height: 300px;\r\n  }\r\n}\r\n@media (max-width: 575.98px) {\r\n  .card-space {\r\n    height: 0px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS1kZXRhaWwvdGFiLXBob3Rvcy90YWItcGhvdG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBQ0E7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaXRlbS1kZXRhaWwvdGFiLXBob3Rvcy90YWItcGhvdG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAuY2FyZC1zcGFjZSB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICAuY2FyZC1zcGFjZSB7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/item-detail/tab-photos/tab-photos.component.html":
/*!******************************************************************!*\
  !*** ./src/app/item-detail/tab-photos/tab-photos.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mx-0 mb-2\">\n  <div class=\"col-sm p-1\">\n    <div *ngIf=\"photos[0]\" class=\"row bg-dark p-2 m-0\">\n      <a target=\"_blank\" [href]=\"photos[0]\"><img class=\"img-fluid\" [src]=\"photos[0]\"></a></div>\n    <div *ngIf=\"photos[3]\" class=\"row bg-dark p-2 m-0 mt-2\">\n      <a target=\"_blank\" [href]=\"photos[3]\"><img class=\"img-fluid\" [src]=\"photos[3]\"></a></div>\n  </div>\n  <div class=\"col-sm p-1\">\n    <div *ngIf=\"photos[1]\" class=\"row bg-dark p-2 m-0\">\n      <a target=\"_blank\" [href]=\"photos[1]\"><img class=\"img-fluid\" [src]=\"photos[1]\"></a></div>\n    <div *ngIf=\"photos[4]\" class=\"row bg-dark p-2 m-0 mt-2\">\n      <a target=\"_blank\" [href]=\"photos[4]\"><img class=\"img-fluid\" [src]=\"photos[4]\"></a></div>\n    <div *ngIf=\"photos[6]\" class=\"row bg-dark p-2 m-0 mt-2\">\n      <a target=\"_blank\" [href]=\"photos[6]\"><img class=\"img-fluid\" [src]=\"photos[6]\"></a></div>\n  </div>\n  <div class=\"col-sm p-1\">\n    <div *ngIf=\"photos[2]\" class=\"row bg-dark p-2 m-0\">\n      <a target=\"_blank\" [href]=\"photos[2]\"><img class=\"img-fluid\" [src]=\"photos[2]\"></a></div>\n    <div *ngIf=\"photos[5]\" class=\"row bg-dark p-2 m-0 mt-2\">\n      <a target=\"_blank\" [href]=\"photos[5]\"><img class=\"img-fluid\" [src]=\"photos[5]\"></a></div>\n    <div *ngIf=\"photos[7]\" class=\"row bg-dark p-2 m-0 mt-2\">\n      <a target=\"_blank\" [href]=\"photos[7]\"><img class=\"img-fluid\" [src]=\"photos[7]\"></a></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/item-detail/tab-photos/tab-photos.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/item-detail/tab-photos/tab-photos.component.ts ***!
  \****************************************************************/
/*! exports provided: TabPhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPhotosComponent", function() { return TabPhotosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabPhotosComponent = /** @class */ (function () {
    function TabPhotosComponent() {
    }
    TabPhotosComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TabPhotosComponent.prototype, "photos", void 0);
    TabPhotosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab-photos',
            template: __webpack_require__(/*! ./tab-photos.component.html */ "./src/app/item-detail/tab-photos/tab-photos.component.html"),
            styles: [__webpack_require__(/*! ./tab-photos.component.css */ "./src/app/item-detail/tab-photos/tab-photos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabPhotosComponent);
    return TabPhotosComponent;
}());



/***/ }),

/***/ "./src/app/item-detail/tab-seller/tab-seller.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/item-detail/tab-seller/tab-seller.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".round-index {\r\n  position: relative;\r\n}\r\n.round-index span {\r\n  position: absolute;\r\n  top: 5px;\r\n  width: 36px;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS1kZXRhaWwvdGFiLXNlbGxlci90YWItc2VsbGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tZGV0YWlsL3RhYi1zZWxsZXIvdGFiLXNlbGxlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdW5kLWluZGV4IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnJvdW5kLWluZGV4IHNwYW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVweDtcclxuICB3aWR0aDogMzZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/item-detail/tab-seller/tab-seller.component.html":
/*!******************************************************************!*\
  !*** ./src/app/item-detail/tab-seller/tab-seller.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-dark table-striped\">\n  <tr *ngIf=\"seller.id\">\n    <td colspan=\"2\"><h2 class=\"text-center\">{{seller.id.toUpperCase()}}</h2></td>\n  </tr>\n  <tr *ngIf=\"seller.feedbackScore\">\n    <td>Feedback Score</td>\n    <td>{{seller.feedbackScore}}</td>\n  </tr>\n  <tr *ngIf=\"seller.popularity\">\n    <td>Popularity</td>\n    <td><div class=\"round-index\">\n      <round-progress [max]=\"100\" [current]=\"seller.popularity\" [color]=\"'green'\" [radius]=\"18\" [stroke]=\"2\" [clockwise]=\"false\"></round-progress>\n      <span>{{seller.popularity}}</span></div>\n    </td>\n  </tr>\n  <tr *ngIf=\"seller.feedbackRatingStar\">\n    <td>Feedback Rating Star</td>\n    <td><i class=\"material-icons\" [style.color]=\"seller.feedbackRatingStar.toLowerCase()\">{{getStar()}}</i></td>\n  </tr>\n  <tr *ngIf=\"seller.topRated\">\n    <td>Top Rated</td>\n    <ng-template *ngIf=\"seller.topRated == 'true';then trueIcon else falseIcon\"></ng-template>\n  </tr>\n  <tr *ngIf=\"seller.storeName\">\n    <td>Store Name</td>\n    <td>{{seller.storeName}}</td>\n  </tr>\n  <tr *ngIf=\"seller.buyProductAt\">\n    <td>Buy Product At</td>\n    <td><a target=\"_blank\" [href]=\"seller.buyProductAt\">Store</a></td>\n  </tr>\n</table>\n<ng-template #trueIcon><td><i class=\"material-icons\" style=\"color: green;\">check</i></td></ng-template>\n<ng-template #falseIcon><td><i class=\"material-icons\" style=\"color: red;\">close</i></td></ng-template>\n"

/***/ }),

/***/ "./src/app/item-detail/tab-seller/tab-seller.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/item-detail/tab-seller/tab-seller.component.ts ***!
  \****************************************************************/
/*! exports provided: TabSellerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabSellerComponent", function() { return TabSellerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _item_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-detail */ "./src/app/item-detail/item-detail.ts");



var TabSellerComponent = /** @class */ (function () {
    function TabSellerComponent() {
    }
    TabSellerComponent.prototype.ngOnInit = function () {
    };
    TabSellerComponent.prototype.getStar = function () {
        if (this.seller.feedbackScore) {
            return parseInt(this.seller.feedbackScore, 10) >= 10000 ? 'stars' : 'star_border';
        }
        return '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _item_detail__WEBPACK_IMPORTED_MODULE_2__["Seller"])
    ], TabSellerComponent.prototype, "seller", void 0);
    TabSellerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab-seller',
            template: __webpack_require__(/*! ./tab-seller.component.html */ "./src/app/item-detail/tab-seller/tab-seller.component.html"),
            styles: [__webpack_require__(/*! ./tab-seller.component.css */ "./src/app/item-detail/tab-seller/tab-seller.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabSellerComponent);
    return TabSellerComponent;
}());



/***/ }),

/***/ "./src/app/item-detail/tab-shipping/tab-shipping.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/item-detail/tab-shipping/tab-shipping.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tZGV0YWlsL3RhYi1zaGlwcGluZy90YWItc2hpcHBpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/item-detail/tab-shipping/tab-shipping.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/item-detail/tab-shipping/tab-shipping.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-dark table-striped\">\n  <tr *ngIf=\"shipping.shippingCost\">\n    <td>Shipping Cost</td>\n    <td>{{getShipping(shipping.shippingCost)}}</td>\n  </tr>\n  <tr *ngIf=\"shipping.shippingLocation\">\n    <td>Shipping Location</td>\n    <td>{{shipping.shippingLocation}}</td>\n  </tr>\n  <tr *ngIf=\"shipping.handlingTime\">\n    <td>Handling Time</td>\n    <td>{{shipping.handlingTime}}</td>\n  </tr>\n  <tr *ngIf=\"shipping.expeditedShipping\">\n    <td>Expedited Shipping</td>\n    <ng-template *ngIf=\"shipping.expeditedShipping == 'true';then trueIcon else falseIcon\"></ng-template>\n  </tr>\n  <tr *ngIf=\"shipping.oneDayShipping\">\n    <td>One Day Shipping</td>\n    <ng-template *ngIf=\"shipping.oneDayShipping == 'true';then trueIcon else falseIcon\"></ng-template>\n  </tr>\n  <tr *ngIf=\"shipping.returnAccepted\">\n    <td>Return Accept</td>\n    <ng-template *ngIf=\"shipping.returnAccepted == 'true';then trueIcon else falseIcon\"></ng-template>\n  </tr>\n</table>\n<ng-template #trueIcon><td><i class=\"material-icons\" style=\"color: green;\">check</i></td></ng-template>\n<ng-template #falseIcon><td><i class=\"material-icons\" style=\"color: red;\">close</i></td></ng-template>\n"

/***/ }),

/***/ "./src/app/item-detail/tab-shipping/tab-shipping.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/item-detail/tab-shipping/tab-shipping.component.ts ***!
  \********************************************************************/
/*! exports provided: TabShippingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabShippingComponent", function() { return TabShippingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _item_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-detail */ "./src/app/item-detail/item-detail.ts");



var TabShippingComponent = /** @class */ (function () {
    function TabShippingComponent() {
    }
    TabShippingComponent.prototype.ngOnInit = function () {
    };
    TabShippingComponent.prototype.getShipping = function (price) {
        return parseFloat(price) === 0 ? 'Free Shipping' : '$' + price;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _item_detail__WEBPACK_IMPORTED_MODULE_2__["Shipping"])
    ], TabShippingComponent.prototype, "shipping", void 0);
    TabShippingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab-shipping',
            template: __webpack_require__(/*! ./tab-shipping.component.html */ "./src/app/item-detail/tab-shipping/tab-shipping.component.html"),
            styles: [__webpack_require__(/*! ./tab-shipping.component.css */ "./src/app/item-detail/tab-shipping/tab-shipping.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabShippingComponent);
    return TabShippingComponent;
}());



/***/ }),

/***/ "./src/app/item-detail/tab-similar-products/tab-similar-products.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/item-detail/tab-similar-products/tab-similar-products.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  width: 150px;\r\n  height: 150px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS1kZXRhaWwvdGFiLXNpbWlsYXItcHJvZHVjdHMvdGFiLXNpbWlsYXItcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9pdGVtLWRldGFpbC90YWItc2ltaWxhci1wcm9kdWN0cy90YWItc2ltaWxhci1wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/item-detail/tab-similar-products/tab-similar-products.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/item-detail/tab-similar-products/tab-similar-products.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"checkData(); else similarItems\" class=\"alert alert-warning my-3\" role=\"alert\">No Records.</div>\n<ng-template #similarItems>\n  <div class=\"row my-3\">\n    <div class=\"col-sm-2\">\n      <select class=\"form-control mr-3\" name=\"method\" [(ngModel)]=\"sortMethod\" (change)=\"sort()\">\n        <option value=\"0\">Default</option>\n        <option value=\"1\">Product Name</option>\n        <option value=\"2\">Days Left</option>\n        <option value=\"3\">Price</option>\n        <option value=\"4\">Shipping Cost</option>\n      </select>\n    </div>\n    <div class=\"col-sm-2\">\n      <select class=\"form-control\" name=\"order\" [(ngModel)]=\"sortOrder\" [disabled]=\"sortMethod == '0'\"\n              (change)=\"sort()\">\n        <option value=\"0\">Ascending</option>\n        <option value=\"1\">Descending</option>\n      </select>\n    </div>\n  </div>\n  <div>\n    <div class=\"card mb-2\" style=\"background-color: #202329\"\n         *ngFor=\"let product of sortedProducts | slice:0:(itemLimit == -1? 5: itemLimit)\">\n      <div class=\"row no-gutters\">\n        <div class=\"col-md-2 align-items-center\">\n          <a target=\"_blank\" [href]=\"product.url\"><img [src]=\"product.image\" class=\"m-3\"></a>\n        </div>\n        <div class=\"col-md-10\">\n          <div class=\"card-body\">\n            <div class=\"card-text\"><a style=\"color: #4a7075\" target=\"_blank\" [href]=\"product.url\">{{product.productName}}</a></div>\n            <div class=\"card-text\" style=\"color: #8fab88\">Price: ${{product.price}}</div>\n            <div class=\"card-text\" style=\"color: #b5a37a\">Shipping Cost: ${{product.shippingCost}}</div>\n            <div class=\"card-text\" style=\"color: white\">Days Left: {{product.daysLeft}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex justify-content-center\" [class.py-5]=\"itemLimit==-1\" [class.my-3]=\"itemLimit>-1\">\n      <button (click)=\"itemLimit == -1 ? itemLimit = sortedProducts.length: itemLimit = -1\"\n              class=\"btn btn-primary\" type=\"button\"> {{itemLimit == -1 ? 'Show More' : 'Show Less'}}</button>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/item-detail/tab-similar-products/tab-similar-products.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/item-detail/tab-similar-products/tab-similar-products.component.ts ***!
  \************************************************************************************/
/*! exports provided: TabSimilarProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabSimilarProductsComponent", function() { return TabSimilarProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabSimilarProductsComponent = /** @class */ (function () {
    function TabSimilarProductsComponent() {
        this.sortMethod = '0';
        this.sortOrder = '0';
        this.itemLimit = -1;
    }
    TabSimilarProductsComponent.prototype.ngOnInit = function () {
    };
    TabSimilarProductsComponent.prototype.checkData = function () {
        if (!this.similarProducts || this.similarProducts.length === 0) {
            return true;
        }
        return false;
    };
    TabSimilarProductsComponent.prototype.sort = function (change) {
        if (change === void 0) { change = false; }
        if (change) {
            this.sortedProducts = this.similarProducts.slice(0);
            return;
        }
        var method = parseInt(this.sortMethod, 10);
        var order = parseInt(this.sortOrder, 10);
        switch (method) {
            case 0:
                this.sortedProducts = this.similarProducts.slice(0);
                break;
            case 1:
                this.sortedProducts.sort(function (a, b) { return (order === 0 ? 1 : -1) * a.productName.localeCompare(b.productName); });
                break;
            case 2:
                this.sortedProducts.sort(function (a, b) { return (order === 0 ? 1 : -1) * (parseInt(a.daysLeft, 10) - parseInt(b.daysLeft, 10)); });
                break;
            case 3:
                this.sortedProducts.sort(function (a, b) { return (order === 0 ? 1 : -1) * (parseFloat(a.price) - parseFloat(b.price)); });
                break;
            case 4:
                this.sortedProducts.sort(function (a, b) { return (order === 0 ? 1 : -1) * (parseFloat(a.shippingCost) - parseFloat(b.shippingCost)); });
                break;
        }
    };
    TabSimilarProductsComponent.prototype.ngOnChanges = function (changes) {
        if (changes.similarProducts) {
            this.sort(true);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TabSimilarProductsComponent.prototype, "similarProducts", void 0);
    TabSimilarProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab-similar-products',
            template: __webpack_require__(/*! ./tab-similar-products.component.html */ "./src/app/item-detail/tab-similar-products/tab-similar-products.component.html"),
            styles: [__webpack_require__(/*! ./tab-similar-products.component.css */ "./src/app/item-detail/tab-similar-products/tab-similar-products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabSimilarProductsComponent);
    return TabSimilarProductsComponent;
}());



/***/ }),

/***/ "./src/app/request.service.ts":
/*!************************************!*\
  !*** ./src/app/request.service.ts ***!
  \************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RequestService = /** @class */ (function () {
    function RequestService(http) {
        this.http = http;
        this.initWishList();
    }
    RequestService.prototype.initWishList = function () {
        this.wishListLookup = new Set();
        this.wishList = JSON.parse(window.localStorage.getItem('wishList'));
        if (this.wishList) {
            for (var _i = 0, _a = this.wishList; _i < _a.length; _i++) {
                var item = _a[_i];
                this.wishListLookup.add(item.itemID);
            }
        }
        else {
            this.wishList = new Array();
        }
    };
    RequestService.prototype.deleteWishListItem = function (id) {
        if (this.wishListLookup.has(id)) {
            this.wishList.splice(this.wishList.findIndex(function (item) { return item.itemID === id; }), 1);
            this.wishListLookup.delete(id);
            window.localStorage.setItem('wishList', JSON.stringify(this.wishList));
        }
    };
    RequestService.prototype.isInWishList = function (id) {
        return this.wishListLookup.has(id);
    };
    RequestService.prototype.addWishListItem = function (item) {
        if (!this.wishListLookup.has(item.itemID)) {
            this.wishList.push(item);
            this.wishListLookup.add(item.itemID);
            window.localStorage.setItem('wishList', JSON.stringify(this.wishList));
        }
    };
    RequestService.prototype.requestWishList = function () {
        return this.wishList;
    };
    RequestService.prototype.getLocation = function () {
        return this.http.get('http://ip-api.com/json');
    };
    RequestService.prototype.getZipHint = function (q) {
        return this.http.get('/zip?q=' + q);
    };
    RequestService.prototype.getSearchResults = function (searchModel) {
        var urlParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        Object.keys(searchModel).forEach(function (value) {
            if (!(searchModel[value] === '' || !searchModel[value])) {
                urlParams = urlParams.set(value, searchModel[value]);
            }
        });
        return this.http.get('/search', { params: urlParams });
    };
    RequestService.prototype.getItemDetails = function (id, title) {
        var urlParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        urlParams = urlParams.set('itemID', id).set('itemTitle', title);
        return this.http.get('/itemDetail', { params: urlParams });
    };
    RequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "./src/app/result-list/result-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/result-list/result-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  width: 100px;\r\n  height: 100px;\r\n}\r\n\r\n.selected {\r\n  background-color: #bdbec2 !important;\r\n}\r\n\r\n.top {\r\n  top: 0;\r\n}\r\n\r\ntd,th {\r\n  white-space:nowrap\r\n}\r\n\r\n.nav-pills a{\r\n  color: black!important;\r\n}\r\n\r\n.nav-pills .nav-link.active {\r\n  color: white!important;\r\n  background-color: black;\r\n}\r\n\r\n.page-link {\r\n  color: black;\r\n}\r\n\r\n.page-item.active .page-link {\r\n  background-color: black;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0LWxpc3QvcmVzdWx0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxNQUFNO0FBQ1I7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdC1saXN0L3Jlc3VsdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGJlYzIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG50ZCx0aCB7XHJcbiAgd2hpdGUtc3BhY2U6bm93cmFwXHJcbn1cclxuXHJcbi5uYXYtcGlsbHMgYXtcclxuICBjb2xvcjogYmxhY2shaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUge1xyXG4gIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5wYWdlLWxpbmsge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/result-list/result-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/result-list/result-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-3 d-flex justify-content-center\">\n  <ul class=\"nav nav-pills\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" [class.active]=\"!isWishList\" href=\"javascript:void(0)\"\n         (click)=\"changeList(false)\">Results</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" [class.active]=\"isWishList\" href=\"javascript:void(0)\"\n         (click)=\"changeList(true)\">Wish List</a>\n    </li>\n  </ul>\n</div>\n<div class=\"position-relative\">\n  <div *ngIf=\"!showDetail\" [@slideInOut]>\n    <div *ngIf=\"onProgress\" class=\"progress\">\n      <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"50\"\n           aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 50%\"></div>\n    </div>\n    <div *ngIf=\"warning && !isWishList\" class=\"alert alert-warning mx-3\" role=\"alert\">{{warning}}</div>\n    <div *ngIf=\"(!isWishList && items && !warning) || isWishList\" class=\"row m-0 justify-content-end\">\n      <button type=\"button\" class=\"btn btn-light col-auto\" [disabled]=\"!selectedItem\"\n              (click)=\"getDetail()\">Detail\n        <i class=\"material-icons\">arrow_forward_ios</i>\n      </button>\n    </div>\n    <div *ngIf=\"warning && isWishList\" class=\"alert alert-warning mt-3 mx-3\" role=\"alert\">{{warning}}</div>\n    <div *ngIf=\"items && !warning\">\n      <div class=\"p-1 p-sm-3\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-dark table-striped table-hover\">\n            <tr>\n              <th>#</th>\n              <th>Image</th>\n              <th>Title</th>\n              <th>Price</th>\n              <th>Shipping</th>\n              <th *ngIf=\"!isWishList\">Zip</th>\n              <th>Seller</th>\n              <th>Wish List</th>\n            </tr>\n            <tr *ngFor=\"let item of items | slice:getSlicePoint(true):getSlicePoint(false); index as i;\"\n                [class.selected]=\"item == selectedItem\">\n              <td>{{isWishList ? i + 1 : currentPage * 10 + i + 1}}</td>\n              <td><img *ngIf=\"item.image!==''\" [src]=\"item.image\"></td>\n              <td><a href=\"javascript:void(0)\" (click)=\"getDetail(currentPage * 10 + i)\"\n                     [matTooltip]=\"item.title\">{{cutTitle(item.title)}}</a>\n              </td>\n              <td>${{item.price}}</td>\n              <td>{{getShipping(item.shipping)}}</td>\n              <td *ngIf=\"!isWishList\">{{item.zip}}</td>\n              <td>{{item.seller}}</td>\n              <td>\n                <button *ngIf=\"requestService.isInWishList(item.itemID);else addToCart\"\n                        type=\"button\" class=\"btn btn-light\"\n                        (click)=\"requestService.deleteWishListItem(item.itemID); checkData()\">\n                  <i class=\"material-icons\" style=\"color: #af7d11\">remove_shopping_cart</i>\n                </button>\n                <ng-template #addToCart>\n                  <button type=\"button\" class=\"btn btn-light\" (click)=\"requestService.addWishListItem(item)\">\n                    <i class=\"material-icons\">add_shopping_cart</i>\n                  </button>\n                </ng-template>\n              </td>\n            </tr>\n            <tr *ngIf=\"isWishList\">\n              <td colspan=\"5\"></td>\n              <td>Total Shopping</td>\n              <td>${{getTotalShopping()}}</td>\n            </tr>\n          </table>\n        </div>\n        <nav *ngIf=\"items && !isWishList\" aria-label=\"Results pages\">\n          <ul class=\"pagination justify-content-center\">\n            <li class=\"page-item\" [class.disabled]=\"currentPage == 0\">\n              <a class=\"page-link border-0\" href=\"javascript:void(0);\" (click)=\"currentPage = currentPage - 1\">\n                <span>&laquo;</span> Previous</a></li>\n            <ng-container *ngFor=\"let page of getPageNum(); index as i; last as islast\">\n              <li class=\"page-item\" [class.active]=\"i == currentPage\">\n                <a class=\"page-link border-0\" href=\"javascript:void(0);\" (click)=\"currentPage = i\">{{i + 1}}</a></li>\n              <li *ngIf=\"islast\" class=\"page-item\" [class.disabled]=\"currentPage >= i\">\n                <a class=\"page-link border-0\" href=\"javascript:void(0);\" (click)=\"currentPage = currentPage + 1\">\n                  Next <span>&raquo;</span></a></li>\n            </ng-container>\n          </ul>\n        </nav>\n      </div>\n    </div>\n  </div>\n  <app-item-detail [show]=\"showDetail\" class=\"position-absolute w-100 top\"\n                   (back)=\"showDetail = false\"></app-item-detail>\n</div>\n"

/***/ }),

/***/ "./src/app/result-list/result-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/result-list/result-list.component.ts ***!
  \******************************************************/
/*! exports provided: ResultListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultListComponent", function() { return ResultListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.service */ "./src/app/request.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../item-detail/item-detail.component */ "./src/app/item-detail/item-detail.component.ts");





var ResultListComponent = /** @class */ (function () {
    function ResultListComponent(requestService) {
        this.requestService = requestService;
        this.showDetail = false;
        this.isWishList = false;
        this.currentPage = 0;
        this.selectedItem = null;
        this.onProgress = false;
        this.warning = null;
        this.lastSubscription = null;
    }
    ResultListComponent.prototype.ngOnInit = function () {
    };
    ResultListComponent.prototype.changeList = function (isWishList) {
        if (isWishList !== this.isWishList) {
            this.isWishList = isWishList;
            this.selectedItem = null;
            if (this.isWishList) {
                if (this.items) {
                    this.historySearchResult = this.items;
                }
                this.attachWishListData();
            }
            else if (this.historySearchResult) {
                this.items = this.historySearchResult;
                this.historySearchResult = null;
            }
            else {
                this.items = null;
            }
            this.warning = null;
            this.checkData();
        }
    };
    ResultListComponent.prototype.cutTitle = function (title) {
        if (title.length > 35) {
            var temp = title.split(' ');
            var len = 36;
            title = '';
            for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
                var word = temp_1[_i];
                len -= 1 + word.length;
                if (len >= 0) {
                    title += word + ' ';
                }
                else {
                    break;
                }
            }
            title = title.trim();
            title += '...';
        }
        return title;
    };
    ResultListComponent.prototype.attachWishListData = function () {
        this.items = this.requestService.requestWishList();
        this.checkData();
    };
    ResultListComponent.prototype.checkData = function () {
        if (this.items && this.items.length === 0) {
            this.warning = 'No Records.';
        }
    };
    ResultListComponent.prototype.fetchSearchResult = function (searchData) {
        var _this = this;
        this.reset();
        this.onProgress = true;
        this.lastSubscription = this.requestService.getSearchResults(searchData).subscribe(function (items) {
            _this.reset();
            _this.items = items;
            _this.onProgress = false;
            _this.checkData();
            console.log(_this.items);
        }, function (err) {
            _this.reset();
            _this.items = null;
            _this.onProgress = false;
            _this.warning = err.message;
        });
    };
    ResultListComponent.prototype.reset = function () {
        this.showDetail = false;
        this.warning = null;
        this.currentPage = 0;
        this.selectedItem = null;
        this.isWishList = false;
        this.items = this.historySearchResult = null;
        if (this.onProgress) {
            this.lastSubscription.unsubscribe();
            this.onProgress = false;
            this.lastSubscription = null;
        }
    };
    ResultListComponent.prototype.getTotalShopping = function () {
        var amount = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            amount += parseFloat(item.price);
        }
        return amount.toFixed(2);
    };
    ResultListComponent.prototype.getSlicePoint = function (isStart) {
        if (isStart) {
            return this.isWishList ? 0 : this.currentPage * 10;
        }
        else {
            return this.isWishList ? this.items.length : (this.currentPage + 1) * 10;
        }
    };
    ResultListComponent.prototype.getPageNum = function () {
        return this.items ? Array(Math.ceil(this.items.length / 10)) : [];
    };
    ResultListComponent.prototype.getDetail = function (id) {
        if (id != null && id < this.items.length) {
            this.selectedItem = this.items[id];
        }
        this.showDetail = true;
        this.itemDetailComponent.selectedItem(this.selectedItem);
    };
    ResultListComponent.prototype.getShipping = function (price) {
        if (price !== 'N/A') {
            return parseFloat(price) === 0 ? 'Free Shipping' : '$' + price;
        }
        return price;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_4__["ItemDetailComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_4__["ItemDetailComponent"])
    ], ResultListComponent.prototype, "itemDetailComponent", void 0);
    ResultListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-result-list',
            template: __webpack_require__(/*! ./result-list.component.html */ "./src/app/result-list/result-list.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(-100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(0%)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(100%)' }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./result-list.component.css */ "./src/app/result-list/result-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]])
    ], ResultListComponent);
    return ResultListComponent;
}());



/***/ }),

/***/ "./src/app/search-form/search-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/search-form/search-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group.required .col-form-label:after {\r\n  content:\"*\";\r\n  color:red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWZvcm0vc2VhcmNoLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gtZm9ybS9zZWFyY2gtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAucmVxdWlyZWQgLmNvbC1mb3JtLWxhYmVsOmFmdGVyIHtcclxuICBjb250ZW50OlwiKlwiO1xyXG4gIGNvbG9yOnJlZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/search-form/search-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/search-form/search-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mx-auto\" style=\"max-width: 800px;\">\n  <form (ngSubmit)=\"submit()\" #form=\"ngForm\">\n    <h3 class=\"text-center py-4\">Product Search</h3>\n    <div class=\"form-group row required\">\n      <label class=\"col-sm-3 col-form-label\" for=\"keywords\">Keyword</label>\n      <div class=\"col-sm-9\">\n        <input class=\"form-control\" type=\"text\" id=\"keywords\" name=\"keywords\"\n               placeholder=\"Enter Product Name(eg. iPhone8)\"\n               required [(ngModel)]=\"inputModel.keywords\" #keywords=\"ngModel\"\n               [class.is-invalid]=\"keywords.invalid && (keywords.dirty || keywords.touched)\">\n        <div class=\"invalid-feedback\">Please enter a keyword.</div>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-3 col-form-label\" for=\"category\">Category</label>\n      <div class=\"col-sm-3\">\n        <select class=\"form-control\" id=\"category\" name=\"category\" [(ngModel)]=\"inputModel.category\">\n          <option value=\"-1\" selected>All Categories</option>\n          <option value=\"550\">Art</option>\n          <option value=\"2984\">Body</option>\n          <option value=\"267\">Books</option>\n          <option value=\"11450\">Clothing, Shoes & Accessories</option>\n          <option value=\"58058\">Computers/Tablets & Networking</option>\n          <option value=\"26395\">Health & Beauty</option>\n          <option value=\"11233\">Music</option>\n          <option value=\"1249\">Video Games & Consoles</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-3 col-form-label\">Condition</label>\n      <div class=\"col-sm-9\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" id=\"condition-new\" name=\"condition.new\" type=\"checkbox\"\n                 [(ngModel)]=\"inputModel.conditionNew\">\n          <label class=\"form-check-label\" for=\"condition-new\">New</label>\n        </div>\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" id=\"condition-used\" name=\"condition.used\" type=\"checkbox\"\n                 [(ngModel)]=\"inputModel.conditionUsed\">\n          <label class=\"form-check-label\" for=\"condition-used\">Used</label>\n        </div>\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" id=\"condition-unspecified\" name=\"condition.unspecified\" type=\"checkbox\"\n                 [(ngModel)]=\"inputModel.conditionUnspecified\">\n          <label class=\"form-check-label\" for=\"condition-unspecified\">Unspecified</label>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-3 col-form-label\">Shipping Options</label>\n      <div class=\"col-sm-9\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" id=\"shipping-local\" name=\"shipping.local\" type=\"checkbox\"\n                 [(ngModel)]=\"inputModel.shippingLocal\">\n          <label class=\"form-check-label\" for=\"shipping-local\">Local Pickup</label>\n        </div>\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" id=\"shipping-free\" name=\"shipping.free\" type=\"checkbox\"\n                 [(ngModel)]=\"inputModel.shippingFree\">\n          <label class=\"form-check-label\" for=\"shipping-free\">Free Shipping</label>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-3 col-form-label\">Distance (Miles)</label>\n      <div class=\"col-sm-3\">\n        <input class=\"form-control\" name=\"distance\" type=\"text\" placeholder=\"10\" [(ngModel)]=\"inputModel.distance\">\n      </div>\n    </div>\n\n    <div class=\"form-group row required\">\n      <label class=\"col-sm-3 col-form-label\">From</label>\n      <div class=\"col-sm-9\">\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"radio\" id=\"from-location\" name=\"from\" (change)=\"fromZip = false\"\n                 [checked]=\"!fromZip\">\n          <label for=\"from-location\" class=\"form-check-label\">Current Location</label>\n        </div>\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"radio\" id=\"from-zip\" name=\"from\" (change)=\"fromZip = true\"\n                 [checked]=\"fromZip\">\n          <label for=\"from-zip\" class=\"form-check-label\">Other. Please specify zip code:</label>\n        </div>\n        <div>\n          <input #locationInput class=\"form-control\" pattern=\"[0-9]{5}\" name=\"location\" type=\"text\"\n                 [disabled]=\"!fromZip\" [(ngModel)]=\"inputModel.location\" [matAutocomplete]=\"zipHints\"\n                 (keyup)=\"keyUp.next($event)\" required #location=\"ngModel\"\n                 [class.is-invalid]=\"location.invalid && (location.dirty || location.touched)\">\n          <mat-autocomplete #zipHints=\"matAutocomplete\">\n            <mat-option *ngFor=\"let zip of zips\" [value]=\"zip\">{{zip}}</mat-option>\n          </mat-autocomplete>\n          <div class=\"invalid-feedback\">Please enter a zip code.</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-6\">\n        <button class=\"btn btn-light mr-3\" [disabled]=\"form.invalid || !hereZip\" type=\"submit\"><i\n          class=\"material-icons\">search</i>Search\n        </button>\n        <button class=\"btn btn-light\" type=\"button\" (click)=\"onReset(form)\"><i class=\"material-icons\">clear_all</i>Clear</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/search-form/search-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/search-form/search-form.component.ts ***!
  \******************************************************/
/*! exports provided: SearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return SearchFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-model */ "./src/app/search-form/search-model.ts");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request.service */ "./src/app/request.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var SearchFormComponent = /** @class */ (function () {
    function SearchFormComponent(requestService) {
        var _this = this;
        this.requestService = requestService;
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.reset = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inputModel = new _search_model__WEBPACK_IMPORTED_MODULE_2__["SearchModel"]();
        this.fromZip = false;
        this.keyUp = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.keyUp.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) { return event.target.value; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (search) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(150)); })).subscribe(function (value) {
            requestService.getZipHint(value).subscribe(function (zips) { return _this.zips = zips; });
        });
    }
    SearchFormComponent.prototype.onReset = function (form) {
        form.reset(new _search_model__WEBPACK_IMPORTED_MODULE_2__["SearchModel"]());
        this.fromZip = false;
        this.zips = null;
        this.reset.emit();
    };
    SearchFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.requestService.getLocation().subscribe(function (item) {
            _this.hereZip = item.zip;
            console.log('fetched zip ' + item.zip);
        }, function (err) {
            alert('Some Error occurred When locate your location.\npage will be refreshed soon.');
            location.reload();
        });
    };
    SearchFormComponent.prototype.submit = function () {
        var submitModel = Object.assign({}, this.inputModel);
        if (!this.fromZip) {
            submitModel.location = this.hereZip;
        }
        if (submitModel.category === '-1') {
            delete (submitModel.category);
        }
        this.search.emit(submitModel);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('locationInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchFormComponent.prototype, "locationInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchFormComponent.prototype, "search", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchFormComponent.prototype, "reset", void 0);
    SearchFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-form',
            template: __webpack_require__(/*! ./search-form.component.html */ "./src/app/search-form/search-form.component.html"),
            styles: [__webpack_require__(/*! ./search-form.component.css */ "./src/app/search-form/search-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]])
    ], SearchFormComponent);
    return SearchFormComponent;
}());



/***/ }),

/***/ "./src/app/search-form/search-model.ts":
/*!*********************************************!*\
  !*** ./src/app/search-form/search-model.ts ***!
  \*********************************************/
/*! exports provided: SearchModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModel", function() { return SearchModel; });
var SearchModel = /** @class */ (function () {
    function SearchModel() {
        this.category = '-1';
    }
    return SearchModel;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hx888\OneDrive\Documents\My Project\HTML\CSCI571\HW8\Front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map