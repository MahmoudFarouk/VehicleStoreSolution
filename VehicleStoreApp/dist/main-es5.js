(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicle-store/vehicle-store.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicle-store/vehicle-store.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"py-5 text-center\">\r\n    <img class=\"d-block mx-auto mb-4\" src=\"https://cdn2.iconfinder.com/data/icons/car-14/100/Add_Car-512.png\" alt=\"\"\r\n         width=\"72\" height=\"72\">\r\n    <h2>Vehicle Monitoring</h2>\r\n  </div>\r\n\r\n  <div class=\"container-fluid\">\r\n    <h4 class=\"mb-3\">Filter Vehicles</h4>\r\n    <form #vehiclesStatusForm=\"ngForm\" novalidate=\"\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label for=\"drpCustomers\">Customers</label>\r\n          <select class=\"custom-select d-block w-100\" id=\"drpCustomers\" name=\"drpCustomers\" [(ngModel)]=\"selectedCustomer\">\r\n            <option value=\"\" selected disabled>Select Customer</option>\r\n            <option *ngFor=\"let customer of customers\" [value]=\"customer.id\">\r\n              {{customer.name}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Vehicle Status</label>\r\n          <div class=\"custom-control custom-radio\">\r\n            <input id=\"rpConnected\" name=\"VehcileStatus\" type=\"radio\" [(ngModel)]=\"isConnected\"\r\n                   class=\"custom-control-input\" [value]=\"true\">\r\n            <label class=\"custom-control-label\" for=\"rpConnected\">Connected</label>\r\n          </div>\r\n          <div class=\"custom-control custom-radio\">\r\n            <input id=\"rpDisconnected\" name=\"VehcileStatus\" type=\"radio\" [(ngModel)]=\"isConnected\"\r\n                   class=\"custom-control-input\" [value]=\"false\">\r\n            <label class=\"custom-control-label\" for=\"rpDisconnected\">Disconnected</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <h4 class=\"mb-3\">Vehciles Log</h4>\r\n      <div style='overflow:scroll;  height:400px;' id=\"vehicleslog\">\r\n        <div>\r\n          <div *ngFor=\"let vehicle of vehicles\">\r\n            <div class=\"alert alert-success\" role=\"alert\"\r\n                 *ngIf=\"(isConnected===undefined || isConnected===true) && vehicle.isConnected && (selectedCustomer===undefined || selectedCustomer == vehicle.customerId)\">\r\n              <span>Vehicle with VIN: ({{vehicle.vin}}) & RegNo: ({{vehicle.regNo}}) Owned by: {{vehicle.customer.vin}} at Address ({{vehicle.customer.address}}) become Connected at {{getStatusTime()| date:'dd/MM/yyyy - hh:mm'}}</span>\r\n            </div>\r\n            <div class=\"alert alert-danger\" role=\"alert\"\r\n                 *ngIf=\"(isConnected===undefined || isConnected===false) && !vehicle.isConnected && (selectedCustomer===undefined || selectedCustomer == vehicle.customerId)\">\r\n              <span>Vehicle with VIN: ({{vehicle.vin}}) & RegNo: ({{vehicle.regNo}}) Owned by: ({{vehicle.customer.name}}) at Address ({{vehicle.customer.address}}) become Disconnected at {{getStatusTime()| date:'dd/MM/yyyy - hh:mm'}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"resetForm();\">Reset</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _vehicle_store_vehicle_store_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vehicle-store/vehicle-store.component */ "./src/app/vehicle-store/vehicle-store.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _vehicle_store_vehicle_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vehicle-store/vehicle-store.service */ "./src/app/vehicle-store/vehicle-store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _vehicle_store_vehicle_store_component__WEBPACK_IMPORTED_MODULE_6__["VehicleStoreComponent"],
            ],
            exports: [],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: '', component: _vehicle_store_vehicle_store_component__WEBPACK_IMPORTED_MODULE_6__["VehicleStoreComponent"], pathMatch: 'full' },
                ]),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["NoopAnimationsModule"],
            ],
            providers: [_vehicle_store_vehicle_store_service__WEBPACK_IMPORTED_MODULE_8__["VehicleStoreService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/vehicle-store/vehicle-store.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/vehicle-store/vehicle-store.component.ts ***!
  \**********************************************************/
/*! exports provided: VehicleStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleStoreComponent", function() { return VehicleStoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _vehicle_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vehicle-store.service */ "./src/app/vehicle-store/vehicle-store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VehicleStoreComponent = /** @class */ (function () {
    function VehicleStoreComponent(http, cdr, vehicleService) {
        this.http = http;
        this.cdr = cdr;
        this.vehicleService = vehicleService;
        this.vehicles = [];
    }
    VehicleStoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllCustomers();
        this.getAllVehicles();
        setInterval(function () {
            _this.updateVehicleStatus();
            _this.getAllVehicles();
        }, 60000);
    };
    VehicleStoreComponent.prototype.ngAfterViewInit = function () {
        this.cdr.detectChanges();
    };
    VehicleStoreComponent.prototype.getAllVehicles = function () {
        var _this = this;
        this.vehicleService.getAllVehicles().subscribe(function (result) {
            _this.vehicles = _this.vehicles.concat(result.data);
        });
    };
    VehicleStoreComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this.vehicleService.getAllCustomers().subscribe(function (result) {
            _this.customers = result.data;
        });
    };
    VehicleStoreComponent.prototype.updateVehicleStatus = function () {
        this.vehicleService.updateVehicleStatus().subscribe(function (result) {
            var vehicleslogDiv = document.getElementById("vehicleslog");
            vehicleslogDiv.scrollTop = vehicleslogDiv.scrollHeight;
        });
    };
    VehicleStoreComponent.prototype.getStatusTime = function () {
        var currentDate = new Date();
        return currentDate;
    };
    VehicleStoreComponent.prototype.resetForm = function () {
        this.isConnected = undefined;
        this.selectedCustomer = undefined;
        this.vehicles = [];
        this.getAllVehicles();
    };
    VehicleStoreComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _vehicle_store_service__WEBPACK_IMPORTED_MODULE_2__["VehicleStoreService"] }
    ]; };
    VehicleStoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicle-store',
            template: __webpack_require__(/*! raw-loader!./vehicle-store.component.html */ "./node_modules/raw-loader/index.js!./src/app/vehicle-store/vehicle-store.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _vehicle_store_service__WEBPACK_IMPORTED_MODULE_2__["VehicleStoreService"]])
    ], VehicleStoreComponent);
    return VehicleStoreComponent;
}());



/***/ }),

/***/ "./src/app/vehicle-store/vehicle-store.service.ts":
/*!********************************************************!*\
  !*** ./src/app/vehicle-store/vehicle-store.service.ts ***!
  \********************************************************/
/*! exports provided: VehicleStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleStoreService", function() { return VehicleStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var VehicleStoreService = /** @class */ (function () {
    function VehicleStoreService(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
    }
    VehicleStoreService.prototype.getAllVehicles = function () {
        return this.http
            .get(this.baseUrl + 'api/vehicle/getall')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
    };
    VehicleStoreService.prototype.getAllCustomers = function () {
        return this.http.get(this.baseUrl + 'api/customer/getall')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
    };
    VehicleStoreService.prototype.updateVehicleStatus = function () {
        return this.http.post(this.baseUrl + 'api/vehicle/updatestatus', null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
    };
    VehicleStoreService.prototype.errorHandl = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    VehicleStoreService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
    ]; };
    VehicleStoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], VehicleStoreService);
    return VehicleStoreService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




function getBaseUrl() {
    return "http://localhost:1951/";
}
var providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\y7oda\source\repos\VehicleStoreSolution\VehicleStoreApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map