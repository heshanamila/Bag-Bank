(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@import 'https://use.fontawesome.com/releases/v5.5.0/css/all.css';\n\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  font-weight: 400;\n  width: 100%;\n  height: 100%;\n  font-family: 'Poppins', sans-serif;\n}\n\n.feather {\n  width: 16px;\n  height: 16px;\n  vertical-align: text-bottom;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 600;\n}\n\n.media-body h1 {\n  font-weight: 300;\n  margin-bottom: 20px;\n}\n\n.media-body h1 strong {\n  font-weight: 600;\n}\n\n.media-body p {\n  margin-bottom: 10px;\n  font-weight: 300;\n}\n\n.media-body p strong {\n  margin-bottom: 10px;\n  font-weight: 600;\n}\n\n.px-logo {\n  display: block;\n  clear: both;\n  margin: 0 auto 20px;\n  width: 220px;\n}\n\n.px-logo a img {\n  width: 100%;\n}\n\n.displayTable {\n  display: table;\n  width: 100%;\n  height: 100%;\n  background: #3F51B5;\n}\n\n.displayTableCell {\n  display: table-cell;\n  vertical-align: middle;\n  width: 100%;\n  height: 100%;\n}\n\nh3 {\n  text-align: center;\n  font-size: 22px;\n  margin: 0 0 20px;\n}\n\n.authBlock {\n  margin: 0 auto;\n  max-width: 400px;\n  background: white;\n  padding: 30px 40px 10px;\n  overflow: hidden;\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, .04);\n}\n\nlabel {\n  display: block;\n  font-size: 13px;\n  padding-bottom: 5px;\n  font-weight: 600;\n}\n\n.formGroup {\n  margin-bottom: 20px;\n  float: left;\n  width: 100%;\n}\n\n.formControl {\n  width: 100%;\n  display: block;\n  padding: 15px 15px 14px;\n  border: 2px solid #e7e7e7;\n  outline: none;\n  font-size: 15px;\n  color: #444444;\n  background: #fcfcfc;\n}\n\n.formControl:focus {\n  border: 2px solid #d3d3d6\n}\n\ninput::-webkit-input-placeholder {\n  color: #BBBBBB;\n}\n\ninput::-moz-placeholder {\n  color: #BBBBBB;\n}\n\ninput:-ms-input-placeholder {\n  color: #BBBBBB;\n}\n\ninput:-moz-placeholder {\n  color: #BBBBBB\n}\n\n.displayTable .btn {\n  width: 100%;\n  border: none;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 15px 0;\n  background: #15CD72;\n  color: #ffffff;\n  cursor: pointer;\n  outline: none;\n}\n\n.displayTable .btn:hover {\n  opacity: .88;\n}\n\n.displayTable .btnSecondary {\n  background: #EEEEEE;\n  color: #404040;\n}\n\n.displayTable .googleBtn {\n  background: #eb5e4c;\n}\n\n.displayTable .facebookBtn {\n  background: #5d82d1;\n}\n\n.or {\n  text-align: center;\n  display: block;\n  color: #a0a0a0;\n  background: white;\n  position: relative;\n  margin: 5px 0 0px;\n}\n\n.orInner {\n  background: white;\n  display: inline-block;\n  z-index: 4;\n  position: relative;\n  padding: 0 12px;\n}\n\n.or:before {\n  position: absolute;\n  content: '';\n  left: 0;\n  top: 11px;\n  width: 100%;\n  height: 1px;\n  background: #e2e2e2;\n}\n\n.halfWidth {\n  width: 48.5%;\n}\n\n.left {\n  float: left;\n}\n\n.right {\n  float: right;\n}\n\n.forgotPassword {\n  text-align: center;\n  margin: -12px 0 15px 0;\n  float: left;\n  width: 100%;\n}\n\n.forgotPassword span {\n  color: #3C89EF;\n  font-size: 14px;\n  font-weight: 400;\n  cursor: pointer;\n  display: inline-block;\n  padding-top: 20px;\n}\n\n.redirectToLogin {\n  padding: 15px 0 0;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 400;\n  display: block;\n  color: rgba(255, 255, 255, .6);\n}\n\n.redirectToLogin .redirect {\n  cursor: pointer;\n  color: #ffffff;\n  text-decoration: underline;\n}\n\n/* * Sidebar */\n\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  /* Behind the navbar */\n  padding: 48px 0 0;\n  /* Height of navbar */\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n}\n\n.sidebar-sticky {\n  position: relative;\n  top: 0;\n  height: calc(100vh - 48px);\n  padding-top: .5rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sidebar-sticky {\n    position: -webkit-sticky;\n    position: sticky;\n  }\n}\n\n.sidebar .nav-link {\n  font-weight: 500;\n  color: #333;\n}\n\n.sidebar .nav-link .feather {\n  margin-right: 4px;\n  color: #999;\n}\n\n.sidebar-heading {\n  font-size: .75rem;\n  text-transform: uppercase;\n}\n\n.nav-link {\n  padding: 1.5rem 1rem;\n  border-bottom: 1px solid #dde0e2;\n  cursor: pointer;\n}\n\n.sidebar .nav-link.active,\n.sidebar a:hover,\na:not([href]):not([tabindex]):focus,\na:not([href]):not([tabindex]):hover {\n  color: #E91E63;\n  background: #efefef;\n}\n\n/* * Content */\n\n[role=\"main\"] {\n  padding-top: 48px;\n}\n\n.dasboard-text {\n  border-left: 1px solid rgb(255, 255, 255, .3);\n  color: rgb(255, 255, 255, .5);\n  display: inline-block;\n  padding: 0 0 0 14px;\n  font-size: 15px;\n  margin-left: 15px;\n  position: relative;\n  top: -1px;\n}\n\n/* * Navbar */\n\n.navbar-brand {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n}\n\n.navbar .form-control {\n  padding: .75rem 1rem;\n  border-width: 0;\n  border-radius: 0;\n}\n\n.form-control-dark {\n  color: #fff;\n  background-color: rgba(255, 255, 255, .1);\n  border-color: rgba(255, 255, 255, .1);\n}\n\n.form-control-dark:focus {\n  border-color: transparent;\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\n}\n\n.form-control:focus {\n  border-color: #00BCD4;\n  box-shadow: none;\n}\n\n.form-control {\n  font-size: 14px;\n}\n\n.bg-dark {\n  background-color: #3F51B5 !important;\n}\n\n.gap-right {\n  margin-right: 10px;\n}\n\ni {\n  width: 22px;\n  text-align: center;\n  margin-right: 5px;\n}\n\n.inner-adjust {\n  padding: 0 20px;\n}\n\n.action-block {\n  cursor: pointer;\n}\n\n.action-block .fa-edit:hover {\n  color: #009688;\n}\n\n.action-block .fa-trash-alt:hover {\n  color: #E91E63;\n}\n\n.btn-primary.focus,\n.btn-primary:focus {\n  box-shadow: none;\n}\n\n/* Pagination */\n\nbody pagination-template {\n  padding: 0;\n  margin: 8px 0 0;\n  float: left;\n  width: 100%;\n  text-align: right;\n}\n\nbody .ngx-pagination li:last-child {\n  margin: 0;\n}\n\nbody .ngx-pagination .current {\n  background: #055AF9;\n}\n\n.ngx-pagination a:hover,\n.ngx-pagination button:hover {\n  text-decoration: none;\n}\n\n/* Error */\n\n.error {\n  color: red;\n  margin-top: 5px;\n}\n\ninput.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\n\n.btn-success.disabled,\n.btn-success:disabled {\n  cursor: not-allowed;\n}\n\n/* Nav */\n\nbody .navbar {\n  padding: 6px 0 !important;\n}\n\nbody .navbar-brand {\n  background: none;\n}\n\n.brand-logo {\n  max-width: 85%;\n}\n\n.pt-3,\n.py-3 {\n  padding-top: 2.4rem !important;\n}\n\n.sidebar-sticky {\n  padding-top: 1.2rem !important;\n}\n\n/* Form */\n\nlabel {\n  font-weight: 500;\n}\n\n.form-control {\n  padding: 1.375rem .75rem;\n}\n\n/* Misc */\n\n.no-data img {\n  max-width: 420px;\n  margin: 20px auto 0;\n}\n\n.nodata-msg {\n  margin: 25px 0 15px;\n  font-size: 28px;\n  color: #a9a6c5;\n  font-weight: 300;\n  letter-spacing: .2px;\n}\n\n[role=\"main\"] {\n  padding-top: 65px;\n}\n\n.preloader {\n  min-height: 400px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -15px;\n}\n\n.custom-text {\n  font-size: 15px;\n  color: #5f5f5f;\n  letter-spacing: .2px;\n}\n\n.navbar-dark .navbar-brand {\n  margin-left: 6px;\n}\n\n.custom-text strong {\n  color: #3a3a3a;\n}\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1.4rem !important;\n}\n\n.custom-fa-plus {\n  margin: 0;\n  width: auto;\n}\n\n.user-image {\n  width: 42px;\n  height: 42px;\n  display: inline-block;\n  border-radius: 50%;\n  vertical-align: middle;\n  margin-right: 7px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 0 0;\n}\n\nbody .table thead th {\n  background: #f3f5ff;\n}\n\n.pricing-header {\n  padding-bottom: 50px;\n}\n\n.userImage {\n  max-width: 125px;\n}\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 1)\n}\n\n.card {\n  border: none\n}\n\n.list-group-item {\n  padding: 0 1.25rem 15px;\n  border: none\n}\n\n.fa-sign-out-alt {\n  position: relative;\n  top: 1px;\n}\n\n.logOutBtn {\n  cursor: pointer;\n}\n\n.no-access {\n  text-align: center;\n  font-size: 26px;\n  padding: 70px 0;\n}\n\n.rounded-circle {\n  max-width: 150px;\n}\n\n/* Responsive */\n\n@media(max-width:767px) {\n  .sidebar {\n    position: static;\n    padding: 40px 0 10px;\n    height: auto;\n  }\n\n  [role=\"main\"] {\n    padding-top: 0;\n  }\n\n  .inner-adjust {\n    padding: 0;\n  }\n\n  ul.nav.flex-column {\n    flex-direction: inherit !important;\n  }\n\n  .pt-3,\n  .py-3 {\n    padding-top: 1.5rem !important;\n  }\n\n  .brand-logo {\n    max-width: 175px;\n    margin: 0 auto;\n    display: block;\n  }\n\n  .dasboard-text {\n    display: none !important;\n  }\n\n  .sidebar-sticky {\n    padding-top: 1.9rem !important;\n    height: auto;\n  }\n\n  .sidebar-sticky .nav li {\n    width: 50%;\n    text-align: center;\n    border-right: 1px solid #c7ceff;\n  }\n\n  .sidebar-sticky .nav li:last-child {\n    border: none;\n  }\n\n  .no-data img {\n    max-width: 100%;\n    margin-top: 0;\n  }\n\n  .nodata-msg,\n  .h2,\n  h2 {\n    font-size: 1.4rem;\n  }\n\n  .custom-text {\n    font-size: 14px;\n  }\n\n  .navbar-nav {\n    float: right;\n    width: 50%;\n    text-align: right;\n    display: inherit;\n    margin: 0;\n  }\n\n  .navbar-dark .navbar-brand {\n    margin: 0;\n    width: 50%;\n    float: left;\n    display: inherit;\n  }\n\n  .sidebar {\n    padding: 40px 0 0;\n  }\n\n  footer br {\n    display: none;\n  }\n\n  .media {\n    display: block;\n  }\n\n  .rounded-circle {\n    max-width: 150px;\n    margin: 0 auto 20px !important;\n    display: block;\n  }\n\n  b,\n  strong {\n    display: block;\n  }\n\n  .displayTable {\n    background: white\n  }\n\n  .authBlock {\n    box-shadow: none\n  }\n\n  .px-logo {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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WCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixjQUFjO0VBQ2hCOztFQUVBOztJQUVFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRTtFQUNGOztFQUVBO0lBQ0U7RUFDRjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjUuMC9jc3MvYWxsLmNzcyc7XG5cbioge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG59XG5cbi5mZWF0aGVyIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubWVkaWEtYm9keSBoMSB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5tZWRpYS1ib2R5IGgxIHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tZWRpYS1ib2R5IHAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4ubWVkaWEtYm9keSBwIHN0cm9uZyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5weC1sb2dvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW46IDAgYXV0byAyMHB4O1xuICB3aWR0aDogMjIwcHg7XG59XG5cbi5weC1sb2dvIGEgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kaXNwbGF5VGFibGUge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzNGNTFCNTtcbn1cblxuLmRpc3BsYXlUYWJsZUNlbGwge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5oMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW46IDAgMCAyMHB4O1xufVxuXG4uYXV0aEJsb2NrIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAzMHB4IDQwcHggMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNHB4IDAgcmdiYSgwLCAwLCAwLCAuMDQpO1xuICBib3gtc2hhZG93OiAwIDAgNHB4IDAgcmdiYSgwLCAwLCAwLCAuMDQpO1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mb3JtR3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtQ29udHJvbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTVweCAxNXB4IDE0cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlN2U3ZTc7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM0NDQ0NDQ7XG4gIGJhY2tncm91bmQ6ICNmY2ZjZmM7XG59XG5cbi5mb3JtQ29udHJvbDpmb2N1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkM2QzZDZcbn1cblxuaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI0JCQkJCQjtcbn1cblxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI0JCQkJCQjtcbn1cblxuaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNCQkJCQkI7XG59XG5cbmlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI0JCQkJCQlxufVxuXG4uZGlzcGxheVRhYmxlIC5idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgYmFja2dyb3VuZDogIzE1Q0Q3MjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmRpc3BsYXlUYWJsZSAuYnRuOmhvdmVyIHtcbiAgb3BhY2l0eTogLjg4O1xufVxuXG4uZGlzcGxheVRhYmxlIC5idG5TZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiAjRUVFRUVFO1xuICBjb2xvcjogIzQwNDA0MDtcbn1cblxuLmRpc3BsYXlUYWJsZSAuZ29vZ2xlQnRuIHtcbiAgYmFja2dyb3VuZDogI2ViNWU0Yztcbn1cblxuLmRpc3BsYXlUYWJsZSAuZmFjZWJvb2tCdG4ge1xuICBiYWNrZ3JvdW5kOiAjNWQ4MmQxO1xufVxuXG4ub3Ige1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2EwYTBhMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiA1cHggMCAwcHg7XG59XG5cbi5vcklubmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgei1pbmRleDogNDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwIDEycHg7XG59XG5cbi5vcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6ICcnO1xuICBsZWZ0OiAwO1xuICB0b3A6IDExcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2UyZTJlMjtcbn1cblxuLmhhbGZXaWR0aCB7XG4gIHdpZHRoOiA0OC41JTtcbn1cblxuLmxlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZm9yZ290UGFzc3dvcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogLTEycHggMCAxNXB4IDA7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcmdvdFBhc3N3b3JkIHNwYW4ge1xuICBjb2xvcjogIzNDODlFRjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5yZWRpcmVjdFRvTG9naW4ge1xuICBwYWRkaW5nOiAxNXB4IDAgMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XG59XG5cbi5yZWRpcmVjdFRvTG9naW4gLnJlZGlyZWN0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi8qICogU2lkZWJhciAqL1xuLnNpZGViYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIC8qIEJlaGluZCB0aGUgbmF2YmFyICovXG4gIHBhZGRpbmc6IDQ4cHggMCAwO1xuICAvKiBIZWlnaHQgb2YgbmF2YmFyICovXG4gIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgLjEpO1xufVxuXG4uc2lkZWJhci1zdGlja3kge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XG4gIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG5Ac3VwcG9ydHMgKChwb3NpdGlvbjotd2Via2l0LXN0aWNreSkgb3IgKHBvc2l0aW9uOnN0aWNreSkpIHtcbiAgLnNpZGViYXItc3RpY2t5IHtcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgfVxufVxuXG4uc2lkZWJhciAubmF2LWxpbmsge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzMzMztcbn1cblxuLnNpZGViYXIgLm5hdi1saW5rIC5mZWF0aGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4uc2lkZWJhci1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAuNzVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5uYXYtbGluayB7XG4gIHBhZGRpbmc6IDEuNXJlbSAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZTBlMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlLFxuLnNpZGViYXIgYTpob3ZlcixcbmE6bm90KFtocmVmXSk6bm90KFt0YWJpbmRleF0pOmZvY3VzLFxuYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSk6aG92ZXIge1xuICBjb2xvcjogI0U5MUU2MztcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuLyogKiBDb250ZW50ICovXG5bcm9sZT1cIm1haW5cIl0ge1xuICBwYWRkaW5nLXRvcDogNDhweDtcbn1cblxuLmRhc2JvYXJkLXRleHQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1LCAuMyk7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjUpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAgMCAwIDE0cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMXB4O1xufVxuXG4vKiAqIE5hdmJhciAqL1xuLm5hdmJhci1icmFuZCB7XG4gIHBhZGRpbmctdG9wOiAuNzVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAuNzVyZW07XG59XG5cbi5uYXZiYXIgLmZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmc6IC43NXJlbSAxcmVtO1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5mb3JtLWNvbnRyb2wtZGFyayB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcbn1cblxuLmZvcm0tY29udHJvbC1kYXJrOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjI1KTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzAwQkNENDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJnLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y1MUI1ICFpbXBvcnRhbnQ7XG59XG5cbi5nYXAtcmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmkge1xuICB3aWR0aDogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmlubmVyLWFkanVzdCB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLmFjdGlvbi1ibG9jayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFjdGlvbi1ibG9jayAuZmEtZWRpdDpob3ZlciB7XG4gIGNvbG9yOiAjMDA5Njg4O1xufVxuXG4uYWN0aW9uLWJsb2NrIC5mYS10cmFzaC1hbHQ6aG92ZXIge1xuICBjb2xvcjogI0U5MUU2Mztcbn1cblxuLmJ0bi1wcmltYXJ5LmZvY3VzLFxuLmJ0bi1wcmltYXJ5OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLyogUGFnaW5hdGlvbiAqL1xuYm9keSBwYWdpbmF0aW9uLXRlbXBsYXRlIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiA4cHggMCAwO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5ib2R5IC5uZ3gtcGFnaW5hdGlvbiBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XG4gIGJhY2tncm91bmQ6ICMwNTVBRjk7XG59XG5cbi5uZ3gtcGFnaW5hdGlvbiBhOmhvdmVyLFxuLm5neC1wYWdpbmF0aW9uIGJ1dHRvbjpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogRXJyb3IgKi9cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4uYnRuLXN1Y2Nlc3MuZGlzYWJsZWQsXG4uYnRuLXN1Y2Nlc3M6ZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4vKiBOYXYgKi9cbmJvZHkgLm5hdmJhciB7XG4gIHBhZGRpbmc6IDZweCAwICFpbXBvcnRhbnQ7XG59XG5cbmJvZHkgLm5hdmJhci1icmFuZCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5icmFuZC1sb2dvIHtcbiAgbWF4LXdpZHRoOiA4NSU7XG59XG5cbi5wdC0zLFxuLnB5LTMge1xuICBwYWRkaW5nLXRvcDogMi40cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlYmFyLXN0aWNreSB7XG4gIHBhZGRpbmctdG9wOiAxLjJyZW0gIWltcG9ydGFudDtcbn1cblxuLyogRm9ybSAqL1xubGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgcGFkZGluZzogMS4zNzVyZW0gLjc1cmVtO1xufVxuXG4vKiBNaXNjICovXG4ubm8tZGF0YSBpbWcge1xuICBtYXgtd2lkdGg6IDQyMHB4O1xuICBtYXJnaW46IDIwcHggYXV0byAwO1xufVxuXG4ubm9kYXRhLW1zZyB7XG4gIG1hcmdpbjogMjVweCAwIDE1cHg7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgY29sb3I6ICNhOWE2YzU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAuMnB4O1xufVxuXG5bcm9sZT1cIm1haW5cIl0ge1xuICBwYWRkaW5nLXRvcDogNjVweDtcbn1cblxuLnByZWxvYWRlciB7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG5cbi5jdXN0b20tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM1ZjVmNWY7XG4gIGxldHRlci1zcGFjaW5nOiAuMnB4O1xufVxuXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1icmFuZCB7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5jdXN0b20tdGV4dCBzdHJvbmcge1xuICBjb2xvcjogIzNhM2EzYTtcbn1cblxuLm1iLTMsXG4ubXktMyB7XG4gIG1hcmdpbi1ib3R0b206IDEuNHJlbSAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWZhLXBsdXMge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4udXNlci1pbWFnZSB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xufVxuXG5ib2R5IC50YWJsZSB0aGVhZCB0aCB7XG4gIGJhY2tncm91bmQ6ICNmM2Y1ZmY7XG59XG5cbi5wcmljaW5nLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4udXNlckltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMjVweDtcbn1cblxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpXG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyOiBub25lXG59XG5cbi5saXN0LWdyb3VwLWl0ZW0ge1xuICBwYWRkaW5nOiAwIDEuMjVyZW0gMTVweDtcbiAgYm9yZGVyOiBub25lXG59XG5cbi5mYS1zaWduLW91dC1hbHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xufVxuXG4ubG9nT3V0QnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubm8tYWNjZXNzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI2cHg7XG4gIHBhZGRpbmc6IDcwcHggMDtcbn1cblxuLnJvdW5kZWQtY2lyY2xlIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLyogUmVzcG9uc2l2ZSAqL1xuQG1lZGlhKG1heC13aWR0aDo3NjdweCkge1xuICAuc2lkZWJhciB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBwYWRkaW5nOiA0MHB4IDAgMTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICBbcm9sZT1cIm1haW5cIl0ge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG5cbiAgLmlubmVyLWFkanVzdCB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIHVsLm5hdi5mbGV4LWNvbHVtbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGluaGVyaXQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wdC0zLFxuICAucHktMyB7XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJyYW5kLWxvZ28ge1xuICAgIG1heC13aWR0aDogMTc1cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuZGFzYm9hcmQtdGV4dCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNpZGViYXItc3RpY2t5IHtcbiAgICBwYWRkaW5nLXRvcDogMS45cmVtICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLnNpZGViYXItc3RpY2t5IC5uYXYgbGkge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjN2NlZmY7XG4gIH1cblxuICAuc2lkZWJhci1zdGlja3kgLm5hdiBsaTpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuICAubm8tZGF0YSBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG5cbiAgLm5vZGF0YS1tc2csXG4gIC5oMixcbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG5cbiAgLmN1c3RvbS10ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAubmF2YmFyLW5hdiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAubmF2YmFyLWRhcmsgLm5hdmJhci1icmFuZCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbiAgfVxuXG4gIC5zaWRlYmFyIHtcbiAgICBwYWRkaW5nOiA0MHB4IDAgMDtcbiAgfVxuXG4gIGZvb3RlciBiciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tZWRpYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAucm91bmRlZC1jaXJjbGUge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG8gMjBweCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgYixcbiAgc3Ryb25nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5kaXNwbGF5VGFibGUge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlXG4gIH1cblxuICAuYXV0aEJsb2NrIHtcbiAgICBib3gtc2hhZG93OiBub25lXG4gIH1cblxuICAucHgtbG9nbyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/lahiru/Documents/UCSC/Bag-Bank/angular-src/src/styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map