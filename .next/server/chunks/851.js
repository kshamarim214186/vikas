"use strict";
exports.id = 851;
exports.ids = [851];
exports.modules = {

/***/ 5851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9226);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(799);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(887);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







function ContactusForm(props) {
  const title = props.title;
  const contact_type = props.type;
  const {
    0: state,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    txtname: '',
    txtemail: '',
    txtmobile: '',
    txtmessage: '',
    errorshow: false,
    successshow: false,
    message: ''
  });

  function Submit() {
    let errmessage = '',
        success = true;

    if (state.txtname.length < 3) {
      errmessage = 'अपना सही नाम दर्ज करें';
      success = false;
    } else if (state.txtemail === "") {
      errmessage = 'अपना सही ईमेल आइडी दर्ज करें';
      success = false;
    } else if (state.txtmobile.length < 10) {
      errmessage = 'अपना सही मोबाईल न. दर्ज करें';
      success = false;
    } else if (state.txtmessage.length < 10) {
      errmessage = 'अपना सही मैसेज दर्ज करें';
      success = false;
    }

    if (!success) {
      setData(prevState => ({
        txtname: prevState.txtname,
        txtemail: prevState.txtemail,
        txtmobile: prevState.txtmobile,
        txtmessage: prevState.txtmessage,
        errorshow: true,
        successshow: false,
        message: errmessage
      }));
      return;
    }

    const name = state.txtname;
    const email = state.txtemail;
    const mobile = state.txtmobile;
    const message = state.txtmessage;
    const application_id = config.application_id;
    const client_ip = "192.168.1.1";
    const contactObj = {
      name,
      email,
      mobile,
      message,
      contact_type,
      application_id,
      client_ip
    };
    fetchServerData('/', config.CONTACTUS_SUBMIT, contactObj).then(obj => {
      if (obj === "OK") {
        setData(prevState => ({
          txtname: '',
          txtemail: '',
          txtmobile: '',
          txtmessage: '',
          errorshow: false,
          successshow: true,
          message: ''
        }));
      } else {
        setData(prevState => ({
          txtname: prevState.txtname,
          txtemail: prevState.txtemail,
          txtmobile: prevState.txtmobile,
          txtmessage: prevState.txtmessage,
          errorshow: true,
          successshow: false,
          message: obj
        }));
      }
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    className: "row",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "col-12 gedf-main p-2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "card gedf-card bg-light",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h5", {
          className: "card-header info-color white-text text-center py-4 pscolor",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("strong", {
            children: title
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "card-body p-4",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "border_b"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "text-muted",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.InputGroup, {
              className: "mb-3 mt-4",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.InputGroup.Prepend, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.InputGroup.Text, {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faUser
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                id: "txtname",
                value: state.txtname,
                onChange: e => setData(prevState => ({
                  txtname: e.target.value,
                  txtemail: prevState.txtemail,
                  txtmobile: prevState.txtmobile,
                  txtmessage: prevState.txtmessage,
                  errorshow: false,
                  successshow: false,
                  message: ''
                })),
                placeholder: "\u0928\u093E\u092E",
                "aria-label": "\u0928\u093E\u092E",
                "aria-describedby": "txtname"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.InputGroup, {
              className: "mb-3 mt-4",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.InputGroup.Prepend, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.InputGroup.Text, {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faEnvelope
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                id: "txtemail",
                value: state.txtemail,
                onChange: e => setData(prevState => ({
                  txtname: prevState.txtname,
                  txtemail: e.target.value,
                  txtmobile: prevState.txtmobile,
                  txtmessage: prevState.txtmessage,
                  errorshow: false,
                  successshow: false,
                  message: ''
                })),
                placeholder: "\u0908\u092E\u0947\u0932",
                "aria-label": "\u0908\u092E\u0947\u0932",
                "aria-describedby": "txtemail"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.InputGroup, {
              className: "mb-3 mt-4",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.InputGroup.Prepend, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.InputGroup.Text, {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPhone
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                id: "txtmobile",
                value: state.txtmobile,
                onChange: e => setData(prevState => ({
                  txtname: prevState.txtname,
                  txtemail: prevState.txtemail,
                  txtmobile: e.target.value,
                  txtmessage: prevState.txtmessage,
                  errorshow: false,
                  successshow: false,
                  message: ''
                })),
                placeholder: "\u092E\u094B\u092C\u093E\u0907\u0932",
                "aria-label": "\u092E\u094B\u092C\u093E\u0907\u0932",
                "aria-describedby": "txtmobile"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.InputGroup, {
              className: "mb-3 mt-4",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.InputGroup.Prepend, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.InputGroup.Text, {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faEdit
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                id: "txtmessage",
                value: state.txtmessage,
                onChange: e => setData(prevState => ({
                  txtname: prevState.txtname,
                  txtemail: prevState.txtemail,
                  txtmobile: prevState.txtmobile,
                  txtmessage: e.target.value,
                  errorshow: false,
                  successshow: false,
                  message: ''
                })),
                as: "textarea",
                placeholder: "\u0938\u0902\u0926\u0947\u0936",
                "aria-label": "\u0938\u0902\u0926\u0947\u0936",
                "aria-describedby": "txtmessage"
              })]
            }), state.errorshow ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Alert, {
              id: "errormessage",
              variant: "danger",
              className: "mt-2 mb-2",
              children: state.message
            }, "1") : "", state.successshow ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Alert, {
              id: "successmessage",
              variant: "success",
              className: "mt-2 mb-2",
              children: "\u0906\u092A\u0915\u093E \u0938\u0902\u0926\u0947\u0936 \u0939\u092E\u0947 \u092A\u094D\u0930\u093E\u092A\u094D\u0924 \u0939\u094B \u0917\u092F\u093E \u0939\u0948\u0964"
            }, "2") : "", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
              id: "btnsubmit",
              className: "mt-4 btn-ps",
              size: "lg",
              block: true,
              onClick: () => Submit(),
              children: "Submit"
            })]
          })]
        })]
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactusForm);

/***/ })

};
;