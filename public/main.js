(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /workspaces/BondFront/src/main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "6lK9":
/*!**************************************!*\
  !*** ./src/app/nte/nte.component.ts ***!
  \**************************************/
/*! exports provided: NteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NteComponent", function() { return NteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _near_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../near.service */ "hzt8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../input/input.component */ "zJ+v");
/* harmony import */ var _btn_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../btn/btn.component */ "xBZk");









class NteComponent {
    constructor(Near, route, http) {
        this.Near = Near;
        this.route = route;
        this.http = http;
        this.tbalance = '';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.Near.init();
            yield this.Near.tokenBalance();
            yield this.Near.getTotalSupply();
            this.tbalance = this.Near.tbalance;
            // tslint:disable-next-line: no-string-literal
            this.address = this.route.children[0].snapshot.params['address'];
            // tslint:disable-next-line: no-string-literal
            const tempAmount = this.route.children[0].snapshot.params['amount'];
            if (this.address != null || tempAmount != null) {
                const nearAcc = this.accountId();
                const stream$ = this.http.get(`near2eth/${nearAcc}/0/${tempAmount}/${this.address}`, { "responseType": "text" });
                stream$.subscribe((txid) => {
                    console.log(`https://rinkeby.etherscan.io/tx/${txid}`);
                });
            }
        });
    }
    connected() {
        return this.Near.isConnected();
    }
    connectWallet() {
        this.Near.connectWallet();
    }
    disconnectWallet() {
        this.Near.disconnectWallet();
    }
    accountId() {
        return this.Near.accountId();
    }
    balance() {
        return this.Near.balance();
    }
    getAmount(amount) {
        this.amount = amount;
    }
    getAddress(address) {
        this.address = address;
    }
    transfer() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.Near.transfer(this.amount);
            // console.log(this.address);
        });
    }
}
NteComponent.ɵfac = function NteComponent_Factory(t) { return new (t || NteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_near_service__WEBPACK_IMPORTED_MODULE_2__["NearService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
NteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NteComponent, selectors: [["dsrv-nte"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            _near_service__WEBPACK_IMPORTED_MODULE_2__["NearService"],
            { provide: 'applicationName', useValue: 'btoken.dsrvlabs.testnet' },
            { provide: 'contractName', useValue: 'btoken.dsrvlabs.testnet' },
        ])], decls: 9, vars: 6, consts: [[1, "container"], [1, "swap"], ["src", "/assets/yte.svg", 1, "abstract"], [1, "title"], ["label", "yNear", 3, "balance", "connect", "value"], ["label", "Ethereum Address", 3, "balance", "connect", "value"], ["label", "\uD83C\uDF08 Transfer", 3, "routerLink", "clicked"]], template: function NteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "yNear to Ethereum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "dsrv-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("value", function NteComponent_Template_dsrv_input_value_5_listener($event) { return ctx.getAmount($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "dsrv-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("value", function NteComponent_Template_dsrv_input_value_7_listener($event) { return ctx.getAddress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "dsrv-btn", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clicked", function NteComponent_Template_dsrv_btn_clicked_8_listener() { return ctx.transfer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("balance", ctx.tbalance);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("connect", ctx.connected());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("balance", ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("connect", "\n            ", ctx.connected(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("routerLink", "/nte/", ctx.address, "/", ctx.amount, "");
    } }, directives: [_input_input_component__WEBPACK_IMPORTED_MODULE_5__["InputComponent"], _btn_btn_component__WEBPACK_IMPORTED_MODULE_6__["BtnComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  visibility: visible;\n  pointer-events: auto;\n  height: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  height: 100%;\n}\n\n.container[_ngcontent-%COMP%]    > .swap[_ngcontent-%COMP%] {\n  margin: 2rem 2rem;\n  padding: 1rem 1rem;\n  width: 680px;\n  height: 545px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);\n  border-radius: 30px;\n}\n\n.container[_ngcontent-%COMP%]    > .swap[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n.container[_ngcontent-%COMP%]    > .swap[_ngcontent-%COMP%]    > img.abstract[_ngcontent-%COMP%] {\n  margin: 1rem auto;\n  display: block;\n  justify-content: center;\n  align-content: center;\n}\n\n.container[_ngcontent-%COMP%]    > .swap[_ngcontent-%COMP%]    > img.arrow[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  justify-content: center;\n  align-content: center;\n}\n\n.container[_ngcontent-%COMP%]    > .swap[_ngcontent-%COMP%]    > dsrv-btn[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnRlL250ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0k7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUFDUjs7QUFDUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBQ1o7O0FBRVE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBQVo7O0FBR1E7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBRFo7O0FBSVE7RUFDSSxrQkFBQTtBQUZaIiwiZmlsZSI6InNyYy9hcHAvbnRlL250ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgPiAuc3dhcCB7XG4gICAgICAgIG1hcmdpbjogMnJlbSAycmVtO1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDFyZW07XG4gICAgICAgIHdpZHRoOiA2ODBweDtcbiAgICAgICAgaGVpZ2h0OiA1NDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcblxuICAgICAgICA+IC50aXRsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICA+IGltZy5hYnN0cmFjdCB7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICA+IGltZy5hcnJvdyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICA+IGRzcnYtYnRuIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'dsrv-nte',
                templateUrl: './nte.component.html',
                styleUrls: ['./nte.component.scss'],
                providers: [
                    _near_service__WEBPACK_IMPORTED_MODULE_2__["NearService"],
                    { provide: 'applicationName', useValue: 'btoken.dsrvlabs.testnet' },
                    { provide: 'contractName', useValue: 'btoken.dsrvlabs.testnet' },
                ],
            }]
    }], function () { return [{ type: _near_service__WEBPACK_IMPORTED_MODULE_2__["NearService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _near_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./near.service */ "hzt8");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");


// import { FormControl, FormGroup, Validators } from '@angular/forms';





class AppComponent {
    constructor(Near) {
        this.Near = Near;
        this.title = 'BondToken';
        this.tbalance = '';
        this.totalSupply = '';
        this.ntbamount = '10';
        this.btnamount = '0';
    }
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.Near.init();
            yield this.Near.tokenBalance();
            yield this.Near.getTotalSupply();
            this.totalSupply = this.Near.totalSupply;
            this.tbalance = this.Near.tbalance;
        });
    }
    tokenize() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.Near.tokenize(this.ntbamount);
            yield this.Near.tokenBalance();
            this.tbalance = this.Near.tbalance;
        });
    }
    burn() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('burn');
            yield this.Near.tokenBalance();
            this.tbalance = this.Near.tbalance;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_near_service__WEBPACK_IMPORTED_MODULE_2__["NearService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["dsrv-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            _near_service__WEBPACK_IMPORTED_MODULE_2__["NearService"],
            { provide: 'applicationName', useValue: 'bToken' },
            { provide: 'contractName', useValue: 'btoken.dsrvlabs.testnet' },
        ])], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "dsrv-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'dsrv-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                providers: [
                    _near_service__WEBPACK_IMPORTED_MODULE_2__["NearService"],
                    { provide: 'applicationName', useValue: 'bToken' },
                    { provide: 'contractName', useValue: 'btoken.dsrvlabs.testnet' },
                ],
            }]
    }], function () { return [{ type: _near_service__WEBPACK_IMPORTED_MODULE_2__["NearService"] }]; }, null); })();


/***/ }),

/***/ "TRQd":
/*!**************************************!*\
  !*** ./src/app/nfy/nfy.component.ts ***!
  \**************************************/
/*! exports provided: NfyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NfyComponent", function() { return NfyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _near_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../near.service */ "hzt8");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input/input.component */ "zJ+v");
/* harmony import */ var _btn_btn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../btn/btn.component */ "xBZk");







class NfyComponent {
    constructor(Near) {
        this.Near = Near;
        this.tbalance = '';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.Near.init();
            yield this.Near.tokenBalance();
            yield this.Near.getTotalSupply();
            this.tbalance = this.Near.tbalance;
        });
    }
    connected() {
        return this.Near.isConnected();
    }
    connectWallet() {
        this.Near.connectWallet();
    }
    disconnectWallet() {
        this.Near.disconnectWallet();
    }
    accountId() {
        return this.Near.accountId();
    }
    balance() {
        return this.Near.balance();
    }
    getAmount(amount) {
        this.amount = amount;
    }
    tokenize() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.Near.tokenize(this.amount);
            // await this.Near.tokenBalance();
            // this.tbalance = this.Near.tbalance;
        });
    }
}
NfyComponent.ɵfac = function NfyComponent_Factory(t) { return new (t || NfyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_near_service__WEBPACK_IMPORTED_MODULE_2__["NearService"])); };
NfyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NfyComponent, selectors: [["dsrv-nty"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            _near_service__WEBPACK_IMPORTED_MODULE_2__["NearService"],
            { provide: 'applicationName', useValue: 'btoken' },
            { provide: 'contractName', useValue: 'btoken.dsrvlabs.testnet' },
        ])], decls: 7, vars: 2, consts: [[1, "container"], [1, "swap"], ["src", "/assets/nfy.svg", 1, "abstract"], [1, "title"], ["label", "Near", 3, "balance", "connect", "value"], ["label", "Swap Near for yNear", 3, "clicked"]], template: function NfyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Near for yNear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "dsrv-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("value", function NfyComponent_Template_dsrv_input_value_5_listener($event) { return ctx.getAmount($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "dsrv-btn", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clicked", function NfyComponent_Template_dsrv_btn_clicked_6_listener() { return ctx.tokenize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("balance", ctx.balance());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("connect", ctx.connected());
    } }, directives: [_input_input_component__WEBPACK_IMPORTED_MODULE_3__["InputComponent"], _btn_btn_component__WEBPACK_IMPORTED_MODULE_4__["BtnComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  visibility: visible;\n  pointer-events: auto;\n  height: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  height: 100%;\n}\n\n.container[_ngcontent-%COMP%]    > .swap[_ngcontent-%COMP%] {\n  margin: 2rem 2rem;\n  padding: 1rem 1rem;\n  width: 680px;\n  height: 545px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);\n  border-radius: 30px;\n}\n\n.container[_ngcontent-%COMP%]    > .swap[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n.container[_ngcontent-%COMP%]    > .swap[_ngcontent-%COMP%]    > img.abstract[_ngcontent-%COMP%] {\n  margin: 1rem auto;\n  display: block;\n  justify-content: center;\n  align-content: center;\n}\n\n.container[_ngcontent-%COMP%]    > .swap[_ngcontent-%COMP%]    > img.arrow[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  justify-content: center;\n  align-content: center;\n}\n\n.container[_ngcontent-%COMP%]    > .swap[_ngcontent-%COMP%]    > dsrv-btn[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmZ5L25meS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0k7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUFDUjs7QUFDUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBQ1o7O0FBRVE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBQVo7O0FBR1E7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBRFo7O0FBSVE7RUFDSSxrQkFBQTtBQUZaIiwiZmlsZSI6InNyYy9hcHAvbmZ5L25meS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgPiAuc3dhcCB7XG4gICAgICAgIG1hcmdpbjogMnJlbSAycmVtO1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDFyZW07XG4gICAgICAgIHdpZHRoOiA2ODBweDtcbiAgICAgICAgaGVpZ2h0OiA1NDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcblxuICAgICAgICA+IC50aXRsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICA+IGltZy5hYnN0cmFjdCB7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICA+IGltZy5hcnJvdyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICA+IGRzcnYtYnRuIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NfyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'dsrv-nty',
                templateUrl: './nfy.component.html',
                styleUrls: ['./nfy.component.scss'],
                providers: [
                    _near_service__WEBPACK_IMPORTED_MODULE_2__["NearService"],
                    { provide: 'applicationName', useValue: 'btoken' },
                    { provide: 'contractName', useValue: 'btoken.dsrvlabs.testnet' },
                ],
            }]
    }], function () { return [{ type: _near_service__WEBPACK_IMPORTED_MODULE_2__["NearService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _nfy_nfy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nfy/nfy.component */ "TRQd");
/* harmony import */ var _yfn_yfn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./yfn/yfn.component */ "nmz7");
/* harmony import */ var _nte_nte_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nte/nte.component */ "6lK9");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./input/input.component */ "zJ+v");
/* harmony import */ var _btn_btn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./btn/btn.component */ "xBZk");






// import { WindowRef } from './WindowRef';







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _input_input_component__WEBPACK_IMPORTED_MODULE_10__["InputComponent"],
        _btn_btn_component__WEBPACK_IMPORTED_MODULE_11__["BtnComponent"],
        _nfy_nfy_component__WEBPACK_IMPORTED_MODULE_7__["NfyComponent"],
        _yfn_yfn_component__WEBPACK_IMPORTED_MODULE_8__["YfnComponent"],
        _nte_nte_component__WEBPACK_IMPORTED_MODULE_9__["NteComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _input_input_component__WEBPACK_IMPORTED_MODULE_10__["InputComponent"],
                    _btn_btn_component__WEBPACK_IMPORTED_MODULE_11__["BtnComponent"],
                    _nfy_nfy_component__WEBPACK_IMPORTED_MODULE_7__["NfyComponent"],
                    _yfn_yfn_component__WEBPACK_IMPORTED_MODULE_8__["YfnComponent"],
                    _nte_nte_component__WEBPACK_IMPORTED_MODULE_9__["NteComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _near_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../near.service */ "hzt8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function HeaderComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.connectWallet(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Connect Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.disconnectWallet(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Disconnect Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "My Asset");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.balance());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.tbalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "https://explorer.testnet.near.org/accounts/", ctx_r2.accountId(), "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.accountId());
} }
class HeaderComponent {
    constructor(Near) {
        this.Near = Near;
        this.tbalance = '';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.Near.init();
            yield this.Near.tokenBalance();
            yield this.Near.getTotalSupply();
            this.tbalance = this.Near.tbalance;
        });
    }
    connected() {
        return this.Near.isConnected();
    }
    connectWallet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.Near.connectWallet();
        });
    }
    disconnectWallet() {
        this.Near.disconnectWallet();
    }
    accountId() {
        return this.Near.accountId();
    }
    balance() {
        return this.Near.balance();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_near_service__WEBPACK_IMPORTED_MODULE_2__["NearService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["dsrv-header"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            _near_service__WEBPACK_IMPORTED_MODULE_2__["NearService"],
            { provide: 'applicationName', useValue: 'btoken.dsrvlabs.testnet' },
            { provide: 'contractName', useValue: 'btoken.dsrvlabs.testnet' },
        ])], decls: 16, vars: 3, consts: [[1, "container"], [1, "left"], [1, "middle"], ["routerLink", "/nfy", "routerLinkActive", "active"], ["routerLink", "/yfn", "routerLinkActive", "active"], ["routerLink", "/nte", "routerLinkActive", "active"], [1, "right"], [3, "click", 4, "ngIf"], ["class", "info", 4, "ngIf"], [3, "click"], [1, "info"], [1, "label"], [1, "near"], [1, "ynear"], [1, "account"], ["target", "_blank", 3, "href"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "yNear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Near for yNear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "yNear for Near");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "yNear to Ethereum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HeaderComponent_button_13_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HeaderComponent_button_14_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, HeaderComponent_div_15_Template, 11, 4, "div", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.connected());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.connected());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.connected());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  visibility: visible;\n  pointer-events: auto;\n  height: 90px;\n  margin-bottom: 2rem;\n  background: #FFFFFF;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 90px;\n}\n\nnav[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-content: center;\n  width: 100%;\n  max-width: 960px;\n  height: 100%;\n  margin: 0 2rem;\n}\n\nnav[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%]    > .left[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100px;\n  justify-content: space-around;\n  align-content: center;\n  align-items: center;\n}\n\nnav[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%]    > .middle[_ngcontent-%COMP%] {\n  display: flex;\n  width: 500px;\n  justify-content: space-around;\n  align-content: center;\n  align-items: center;\n}\n\nnav[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%]    > .middle[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: flex;\n  font-family: Noto Sans KR;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 23px;\n  \n  text-align: center;\n  \n  color: #5F6877;\n  text-decoration: none;\n}\n\nnav[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%]    > .middle[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:link, nav[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%]    > .middle[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:visited, nav[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%]    > .middle[_ngcontent-%COMP%]    > ahover[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\nnav[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%]    > .middle[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%] {\n  color: #1C2432;\n  border-bottom: 5px solid #0064FF;\n}\n\nnav[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%]    > .right[_ngcontent-%COMP%] {\n  display: flex;\n  width: 150px;\n  justify-content: space-around;\n  align-content: center;\n  align-items: center;\n}\n\nnav[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%]    > .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: Noto Sans KR;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #FFFFFF;\n  background: #0064FF;\n  padding: 10px 20px;\n  border-radius: 21px;\n  border: none;\n}\n\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: sticky;\n  width: 100%;\n  height: 40px;\n  background: #0064FF;\n}\n\n.info[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  max-width: 960px;\n}\n\n.info[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%]    > .label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-family: Noto Sans KR;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 9px;\n  \n  \n  color: #FFFFFF;\n  padding: 0 10px;\n  height: 9px;\n  border-right: 1px solid #4C92FF;\n}\n\n.info[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%]    > .near[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  display: inline-flex;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 15px;\n  text-align: right;\n  color: #FFFFFF;\n}\n\n.info[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%]    > .near[_ngcontent-%COMP%]::after {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 11px;\n  line-height: 15px;\n  \n  text-align: right;\n  \n  color: #99C1FF;\n  padding: 0 5px;\n  content: \"Near\";\n}\n\n.info[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%]    > .ynear[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  display: inline-flex;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 15px;\n  text-align: right;\n  color: #FFFFFF;\n}\n\n.info[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%]    > .ynear[_ngcontent-%COMP%]::after {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 11px;\n  line-height: 15px;\n  \n  text-align: right;\n  \n  color: #99C1FF;\n  padding: 0 5px;\n  content: \"yNear\";\n}\n\n.info[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%]    > .account[_ngcontent-%COMP%] {\n  padding-right: 3rem;\n  margin-left: auto;\n  font-family: Noto Sans KR;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  \n  \n  color: #FFFFFF;\n}\n\n.info[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%]    > .account[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:link, .info[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%]    > .account[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, .info[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%]    > .account[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #FFFFFF;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDSTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDUjs7QUFDUTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ1o7O0FBRVE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUFaOztBQUNZO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQWhCOztBQUNnQjtFQUNJLHFCQUFBO0FBQ3BCOztBQUVnQjtFQUNJLGNBQUE7RUFDQSxnQ0FBQTtBQUFwQjs7QUFLUTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBSFo7O0FBS1k7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUhoQjs7QUFTQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBTko7O0FBUUk7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQU5SOztBQVFRO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUVBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtBQVBaOztBQVVRO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBUlo7O0FBVVk7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBRUEsU0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVRoQjs7QUFhUTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVhaOztBQWFZO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUVBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBWmhCOztBQWdCUTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUVBLFVBQUE7RUFDQSxjQUFBO0FBZlo7O0FBaUJZO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBZmhCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGhlaWdodDogOTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG59XG5cbm5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTBweDtcblxuICAgID4gLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMCAycmVtO1xuXG4gICAgICAgID4gLmxlZnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgID4gLm1pZGRsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgPiBhIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBOb3RvIFNhbnMgS1I7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICAgICAgICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgICAgICAgICAgICAgIC8qIGZfZGdyYXkgKi9cbiAgICAgICAgICAgICAgICBjb2xvcjogIzVGNjg3NztcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgJjpsaW5rLCAmOnZpc2l0ZWQsICZob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFDMjQzMjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMwMDY0RkY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgPiAucmlnaHQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBOb3RvIFNhbnMgS1I7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDY0RkY7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIxcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQ6ICMwMDY0RkY7XG5cbiAgICA+IC5jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA5NjBweDtcblxuICAgICAgICA+IC5sYWJlbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTm90byBTYW5zIEtSO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA5cHg7XG4gICAgICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuXG4gICAgICAgICAgICAvKiB3aGl0ZSAqL1xuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDlweDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0QzkyRkY7XG4gICAgICAgIH1cblxuICAgICAgICA+IC5uZWFyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICAgICAgICAgICAgLyogcF84MCAqL1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTlDMUZGO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdOZWFyJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgID4gLnluZWFyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICAgICAgICAgICAgLyogcF84MCAqL1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTlDMUZGO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICd5TmVhcic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICA+IC5hY2NvdW50IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBOb3RvIFNhbnMgS1I7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuXG4gICAgICAgICAgICAvKiB3aGl0ZSAqL1xuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG5cbiAgICAgICAgICAgID4gYTpsaW5rLCBhOnZpc2l0ZWQsIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'dsrv-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
                providers: [
                    _near_service__WEBPACK_IMPORTED_MODULE_2__["NearService"],
                    { provide: 'applicationName', useValue: 'btoken.dsrvlabs.testnet' },
                    { provide: 'contractName', useValue: 'btoken.dsrvlabs.testnet' },
                ],
            }]
    }], function () { return [{ type: _near_service__WEBPACK_IMPORTED_MODULE_2__["NearService"] }]; }, null); })();


/***/ }),

/***/ "hzt8":
/*!*********************************!*\
  !*** ./src/app/near.service.ts ***!
  \*********************************/
/*! exports provided: NearService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearService", function() { return NearService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! near-api-js */ "2etw");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bn.js */ "OZ/i");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_3__);





// 가스가 너무 높아서 안되는 거였음... ㅠㅠ
const DEPOSIT_OF_GAS = new bn_js__WEBPACK_IMPORTED_MODULE_3___default.a('300000000000000');
class NearService {
    constructor(applicationName, contractName) {
        this.applicationName = applicationName;
        this.contractName = contractName;
        this.nearConfig = {
            networkId: 'testnet',
            nodeUrl: 'https://rpc.testnet.near.org',
            contractName: '',
            walletUrl: 'https://wallet.testnet.near.org',
            helperUrl: 'https://helper.testnet.near.org',
        };
        this.currentUser = {
            accountId: '',
            balance: undefined
        };
        this.nearConfig.contractName = contractName;
        this.currentUser.accountId = '';
        this.currentUser.balance = '';
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.near = yield near_api_js__WEBPACK_IMPORTED_MODULE_2__["connect"](Object.assign({ deps: {
                    keyStore: new near_api_js__WEBPACK_IMPORTED_MODULE_2__["keyStores"].BrowserLocalStorageKeyStore()
                } }, this.nearConfig));
            this.wallet = new near_api_js__WEBPACK_IMPORTED_MODULE_2__["WalletConnection"](this.near, 'btoken');
            if (this.wallet.getAccountId()) {
                this.currentUser = {
                    accountId: this.wallet.getAccountId(),
                    balance: (yield this.wallet.account().state()).amount
                };
            }
            this.contract = yield new near_api_js__WEBPACK_IMPORTED_MODULE_2__["Contract"](this.wallet.account(), this.nearConfig.contractName, {
                // View methods are read-only – they don't modify the state, but usually return some value
                viewMethods: ['get_balance', 'get_allowance', 'get_total_supply'],
                // Change methods can modify the state, but you don't receive the returned value when called
                changeMethods: ['deposit', 'burn', 'approve', 'transfer'],
            });
        });
    }
    connectWallet() {
        this.wallet.requestSignIn(this.nearConfig.contractName, this.applicationName);
    }
    disconnectWallet() {
        this.wallet.signOut();
        this.currentUser = { accountId: '', balance: '' };
    }
    accountId() {
        return this.currentUser.accountId;
    }
    balance() {
        return this.currentUser.balance;
    }
    getTotalSupply() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.totalSupply = yield this.contract.get_total_supply();
            }
            catch (err) {
                this.totalSupply = '0';
            }
        });
    }
    tokenBalance() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.tbalance = yield this.contract.get_balance({ owner_id: this.accountId() });
            }
            catch (_a) {
                this.tbalance = '0';
            }
        });
    }
    tokenize(amount) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const tmp = new bn_js__WEBPACK_IMPORTED_MODULE_3___default.a(amount || '0').mul(new bn_js__WEBPACK_IMPORTED_MODULE_3___default.a('10').pow(new bn_js__WEBPACK_IMPORTED_MODULE_3___default.a('24')));
            // console.log(tmp.toString());
            yield this.wallet.account().functionCall(this.nearConfig.contractName, 'deposit', undefined, DEPOSIT_OF_GAS, tmp);
            // const receipt = await this.contract.deposit({}, DEPOSIT_OF_GAS, new BN(amount || '0').mul(new BN('10').pow(new BN('24'))));
        });
    }
    transfer(amount) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const tmp = new bn_js__WEBPACK_IMPORTED_MODULE_3___default.a(amount || '0');
            yield this.contract.transfer({
                // tslint:disable-next-line: object-literal-key-quotes
                'new_owner_id': 'lock.dsrvlabs.testnet',
                // tslint:disable-next-line: object-literal-key-quotes
                'amount': tmp.toString()
            }, DEPOSIT_OF_GAS, new bn_js__WEBPACK_IMPORTED_MODULE_3___default.a('1330000000000000000000000'));
        });
    }
    latestTxid() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const tmp = yield this.wallet.account().getAccountDetails();
            console.log(tmp);
            return '';
        });
    }
    isConnected() {
        return this.currentUser.accountId.length > 0;
    }
}
NearService.ɵfac = function NearService_Factory(t) { return new (t || NearService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"]('applicationName', 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"]('contractName', 8)); };
NearService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NearService, factory: NearService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NearService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: ['applicationName']
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: ['contractName']
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "nmz7":
/*!**************************************!*\
  !*** ./src/app/yfn/yfn.component.ts ***!
  \**************************************/
/*! exports provided: YfnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YfnComponent", function() { return YfnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class YfnComponent {
    constructor() { }
    ngOnInit() {
    }
}
YfnComponent.ɵfac = function YfnComponent_Factory(t) { return new (t || YfnComponent)(); };
YfnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YfnComponent, selectors: [["dsrv-ytn"]], decls: 2, vars: 0, template: function YfnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ytn works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3lmbi95Zm4uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YfnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dsrv-ytn',
                templateUrl: './yfn.component.html',
                styleUrls: ['./yfn.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nfy_nfy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nfy/nfy.component */ "TRQd");
/* harmony import */ var _yfn_yfn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./yfn/yfn.component */ "nmz7");
/* harmony import */ var _nte_nte_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nte/nte.component */ "6lK9");







const routes = [
    {
        path: 'nfy',
        component: _nfy_nfy_component__WEBPACK_IMPORTED_MODULE_2__["NfyComponent"]
    },
    {
        path: 'yfn',
        component: _yfn_yfn_component__WEBPACK_IMPORTED_MODULE_3__["YfnComponent"]
    },
    {
        path: 'nte',
        component: _nte_nte_component__WEBPACK_IMPORTED_MODULE_4__["NteComponent"],
        children: [
            {
                path: ':address/:amount',
                component: _nte_nte_component__WEBPACK_IMPORTED_MODULE_4__["NteComponent"],
            }
        ]
    },
    { path: '', redirectTo: '/nfy', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xBZk":
/*!**************************************!*\
  !*** ./src/app/btn/btn.component.ts ***!
  \**************************************/
/*! exports provided: BtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnComponent", function() { return BtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BtnComponent {
    constructor() {
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onClick(event) {
        this.clicked.emit(true);
    }
}
BtnComponent.ɵfac = function BtnComponent_Factory(t) { return new (t || BtnComponent)(); };
BtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BtnComponent, selectors: [["dsrv-btn"]], inputs: { label: "label" }, outputs: { clicked: "clicked" }, decls: 3, vars: 1, consts: [[1, "container"], [3, "click"]], template: function BtnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BtnComponent_Template_button_click_1_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  margin: 1rem;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  width: 100%;\n}\n\n.container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  width: 450px;\n  height: 60px;\n  font-family: Noto Sans KR;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 23px;\n  \n  text-align: center;\n  \n  color: #FFFFFF;\n  background: #0064FF;\n  border-radius: 6px;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnRuL2J0bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUVBLFVBQUE7RUFDQSxjQUFBO0VBRUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFEUiIsImZpbGUiOiJzcmMvYXBwL2J0bi9idG4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDFyZW07XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgPiBidXR0b24ge1xuICAgICAgICB3aWR0aDogNDUwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IE5vdG8gU2FucyBLUjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLyogd2hpdGUgKi9cbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XG5cbiAgICAgICAgYmFja2dyb3VuZDogIzAwNjRGRjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BtnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dsrv-btn',
                templateUrl: './btn.component.html',
                styleUrls: ['./btn.component.scss']
            }]
    }], function () { return []; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['label']
        }], clicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "zJ+v":
/*!******************************************!*\
  !*** ./src/app/input/input.component.ts ***!
  \******************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function InputComponent_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-after", ctx_r0.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.balance);
} }
class InputComponent {
    constructor() {
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onKeyup(event) {
        this.value.emit(event.target.value);
    }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
InputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["dsrv-input"]], inputs: { label: "label", balance: "balance", connected: ["connect", "connected"] }, outputs: { value: "value" }, decls: 6, vars: 2, consts: [[1, "container"], [1, "info"], [1, "name"], ["class", "balance", 4, "ngIf"], ["placeholder", "0.0", 3, "keyup"], [1, "balance"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputComponent_label_4_Template, 2, 2, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function InputComponent_Template_input_keyup_5_listener($event) { return ctx.onKeyup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.connected);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n}\n\n.container[_ngcontent-%COMP%]    > .info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-content: center;\n  width: 450px;\n}\n\n.container[_ngcontent-%COMP%]    > .info[_ngcontent-%COMP%]    > .name[_ngcontent-%COMP%] {\n  font-family: Noto Sans KR;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 23px;\n  \n  letter-spacing: -0.03em;\n  color: #1C2432;\n}\n\n.container[_ngcontent-%COMP%]    > .info[_ngcontent-%COMP%]    > .balance[_ngcontent-%COMP%] {\n  font-family: Noto Sans KR;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 17px;\n  \n  letter-spacing: -0.02em;\n  margin-left: auto;\n  color: #5F6877;\n}\n\n.container[_ngcontent-%COMP%]    > .info[_ngcontent-%COMP%]    > .balance[_ngcontent-%COMP%]::before {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 11px;\n  line-height: 17px;\n  \n  text-align: center;\n  letter-spacing: -0.03em;\n  \n  color: #8B8F97;\n  content: \"Balance \";\n}\n\n.container[_ngcontent-%COMP%]    > .info[_ngcontent-%COMP%]    > .balance[_ngcontent-%COMP%]::after {\n  font-family: Noto Sans KR;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 17px;\n  \n  text-align: center;\n  letter-spacing: -0.04em;\n  \n  color: #8B8F97;\n  content: \" \" attr(data-after);\n}\n\n.container[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  display: flex;\n  \n  background: #F0F4FA;\n  \n  border: 1px solid #D6E0EC;\n  box-sizing: border-box;\n  border-radius: 6px;\n  height: 55px;\n  width: 450px;\n  padding: 1rem;\n  color: #1C2432;\n}\n\n.container[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:focus {\n  border: 1px solid #0064FF;\n  color: #0064FF;\n}\n\n.container[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]::placeholder {\n  color: #B5B8BD;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5wdXQvaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUNJO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBQ1I7O0FBQ1E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBRUEsY0FBQTtBQUFaOztBQUdRO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtBQUZaOztBQUlZO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBRUEsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUhoQjs7QUFNWTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUVBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QUFMaEI7O0FBV0k7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLGNBQUE7QUFWUjs7QUFZUTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQVZaOztBQWFRO0VBQ0ksY0FBQTtBQVhaIiwiZmlsZSI6InNyYy9hcHAvaW5wdXQvaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5cbiAgICA+IC5pbmZvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA0NTBweDtcblxuICAgICAgICA+IC5uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBOb3RvIFNhbnMgS1I7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzZW07XG4gICAgXG4gICAgICAgICAgICBjb2xvcjogIzFDMjQzMjtcbiAgICAgICAgfVxuXG4gICAgICAgID4gLmJhbGFuY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE5vdG8gU2FucyBLUjtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcblxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBjb2xvcjogIzVGNjg3NztcblxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTU1JSAqL1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDNlbTtcblxuICAgICAgICAgICAgICAgIC8qIGZfZ3JheSAqL1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOEI4Rjk3O1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdCYWxhbmNlICc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTm90byBTYW5zIEtSO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDRlbTtcblxuICAgICAgICAgICAgICAgIC8qIGZfZ3JheSAqL1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOEI4Rjk3O1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiIGF0dHIoZGF0YS1hZnRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgID4gaW5wdXQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAvKiBiZ19iYXNpYyAqL1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjBGNEZBO1xuICAgICAgICAvKiBiZ19saW5lICovXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNENkUwRUM7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgICB3aWR0aDogNDUwcHg7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG5cbiAgICAgICAgY29sb3I6ICMxQzI0MzI7XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA2NEZGO1xuICAgICAgICAgICAgY29sb3I6ICMwMDY0RkY7XG4gICAgICAgIH1cblxuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogI0I1QjhCRDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dsrv-input',
                templateUrl: './input.component.html',
                styleUrls: ['./input.component.scss']
            }]
    }], function () { return []; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['label']
        }], balance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['balance']
        }], connected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['connect']
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map