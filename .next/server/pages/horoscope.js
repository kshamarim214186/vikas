"use strict";
(() => {
var exports = {};
exports.id = 220;
exports.ids = [220];
exports.modules = {

/***/ 9522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6873);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7795);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






function ListItemRashiDaily(props) {
  const obj = props.item;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: "row",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "col-12 gedf-main news-" + obj.news_id,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "card gedf-card",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "card-body p-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "row d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "col-4",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                className: "image_effect",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((react_lazyload__WEBPACK_IMPORTED_MODULE_1___default()), {
                  height: 85,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                    src: obj.rashi_sign_image,
                    title: obj.rashi_name,
                    alt: obj.rashi_name,
                    className: "img_effect1 featured_img"
                  })
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "col-8 pl-2",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h2", {
                className: "rashi-heading m-1",
                children: react_html_parser__WEBPACK_IMPORTED_MODULE_2___default()(obj.rashi_daily_description)
              })
            })]
          })
        })
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItemRashiDaily);

/***/ }),

/***/ 214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6873);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





function ListItemRashiWeekly(props) {
  const obj = props.item;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: "row",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "col-12 gedf-main news-" + obj.news_id,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "card gedf-card",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "card-body p-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "row d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "col-4",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                className: "image_effect",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((react_lazyload__WEBPACK_IMPORTED_MODULE_1___default()), {
                  height: 85,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
                    src: obj.rashi_sign_image,
                    title: obj.rashi_name,
                    alt: obj.rashi_name,
                    className: "img_effect1 featured_img"
                  })
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "col-8 pl-2",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h2", {
                className: "rashi-heading m-1",
                children: obj.rashi_weekly_description
              })
            })]
          })
        })
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItemRashiWeekly);

/***/ }),

/***/ 9230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6873);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7795);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






function ListItemRashiYearly(props) {
  const obj = props.item;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: "row",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "col-12 gedf-main news-" + obj.news_id,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "card gedf-card",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "card-body p-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "row d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "col-4",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                className: "image_effect",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((react_lazyload__WEBPACK_IMPORTED_MODULE_1___default()), {
                  height: 85,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                    src: obj.rashi_sign_image,
                    title: obj.rashi_name,
                    alt: obj.rashi_name,
                    className: "img_effect1 featured_img"
                  })
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "col-8 pl-2",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h4", {
                className: "mt-2"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h2", {
                className: "rashi-heading m-1",
                children: react_html_parser__WEBPACK_IMPORTED_MODULE_2___default()(obj.rashi_daily_description)
              })]
            })]
          })
        })
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItemRashiYearly);

/***/ }),

/***/ 7690:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Horoscope),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var _Components_HeaderOld__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7895);
/* harmony import */ var _Components_ListItemRashiDaily__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9522);
/* harmony import */ var _Components_ListItemRashiWeekly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(214);
/* harmony import */ var _Components_ListItemRashiYearly__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9230);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var _Components_Left__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1785);
/* harmony import */ var _Components_Right__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7534);
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3064);
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7659);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2312);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(799);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(887);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_Right__WEBPACK_IMPORTED_MODULE_8__]);
_Components_Right__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


















function Horoscope({
  gethometopsection,
  getrighdata
}) {
  const headercontent = gethometopsection.Table;
  const dailyData = gethometopsection.Table1;
  const weeklyData = gethometopsection.Table2;
  const monthlyData = gethometopsection.Table3;
  const yearlyData = gethometopsection.Table4;
  const rightaudio = getrighdata.Table2;
  const tendring = getrighdata.Table;
  const url = 'state-hindi-news';
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: {
        max: 4000,
        min: 3000
      },
      items: 6
    },
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 6
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 3
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 3
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("title", {
        children: headercontent[0].meta_title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("meta", {
        name: "keywords",
        content: headercontent[0].meta_keywords
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("meta", {
        name: "description",
        content: headercontent[0].meta_description
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("link", {
        rel: "canonical",
        href: _next_config__WEBPACK_IMPORTED_MODULE_9__.SiteUrl
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
      className: "d-none d-md-block",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
        className: "row mtop-desktop pl-5 pr-5",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
          className: "col-12 gedf-main text-center p-0",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
            className: "gedf-card text-center ad-728-90",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
              className: "ad-728-90",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                className: "adunitContainer",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                  className: "adBox",
                  id: "adSlot-0",
                  "data-google-query-id": "CIe92N_O_PMCFZIItwAdmZoKEQ",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                    id: "google_ads_iframe_21715648431/prabhasakshi_react_website/prabhasakshi_react_website_728_90_0__container__"
                  })
                })
              })
            })
          })
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Components_HeaderOld__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
      className: "container p-0",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Components_Left__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
          className: "col-md-6 bg-white mt-3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
            className: "container-fluid p-3",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
              className: "row",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("nav", {
                  "aria-label": "breadcrumb",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("ol", {
                    className: "breadcrumb",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("li", {
                      className: "breadcrumb-item",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faHome
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("li", {
                      className: "breadcrumb-item active",
                      "aria-current": "page",
                      children: "\u0930\u093E\u0936\u093F\u092B\u0932"
                    })]
                  })
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
              className: "row mtop-desktop d-block d-sm-none",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                className: "col-12 gedf-main text-center p-0",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                  className: "gedf-card text-center ad-300-250",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                    className: "ad-300-250",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                      className: "adunitContainer",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                        className: "adBox",
                        id: "adSlot-7"
                      })
                    })
                  })
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
              className: "row mt-2",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                className: "col-12 card gedf-card",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)((react_multi_carousel__WEBPACK_IMPORTED_MODULE_11___default()), {
                  responsive: responsive,
                  swipeable: true,
                  draggable: true,
                  showDots: false,
                  ssr: true,
                  customTransition: "all .5",
                  removeArrowOnDeviceType: ["tablet", "mobile"],
                  deviceType: "mobile",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                    className: "p-2",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__.default, {
                      href: "/horoscope/aries/",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("img", {
                        src: "/images/horoscope/horoscope_aries.png",
                        alt: "\u092E\u0947\u0937",
                        className: "rashifal-image"
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                    className: "p-2",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__.default, {
                      href: "/horoscope/taurus/",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("img", {
                        src: "/images/horoscope/horoscope_taurus.png",
                        alt: "\u0935\u0943\u0937\u092D",
                        className: "rashifal-image"
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                    className: "p-2",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__.default, {
                      href: "/horoscope/gemini/",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("img", {
                        src: "/images/horoscope/horoscope_gemini.png",
                        alt: "\u092E\u093F\u0925\u0941\u0928",
                        className: "rashifal-image"
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                    className: "p-2",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__.default, {
                      href: "/horoscope/cancer/",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("img", {
                        src: "/images/horoscope/horoscope_cancer.png",
                        alt: "\u0915\u0930\u094D\u0915",
                        className: "rashifal-image"
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                    className: "p-2",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__.default, {
                      href: "/horoscope/leo/",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("img", {
                        src: "/images/horoscope/horoscope_leo.png",
                        alt: "\u0938\u093F\u0902\u0939",
                        className: "rashifal-image"
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                    className: "p-2",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__.default, {
                      href: "/horoscope/virgo/",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("img", {
                        src: "/images/horoscope/horoscope_virgo.png",
                        alt: "\u0915\u0928\u094D\u092F\u093E",
                        className: "rashifal-image"
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                    className: "p-2",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__.default, {
                      href: "/horoscope/libra/",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("img", {
                        src: "/images/horoscope/horoscope_libra.png",
                        alt: "\u0924\u0941\u0932\u093E",
                        className: "rashifal-image"
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                    className: "p-2",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__.default, {
                      href: "/horoscope/scorpio/",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("img", {
                        src: "/images/horoscope/horoscope_scorpio.png",
                        alt: "\u0935\u0943\u0936\u094D\u091A\u093F\u0915",
                        className: "rashifal-image"
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                    className: "p-2",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__.default, {
                      href: "/horoscope/sagittarius/",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("img", {
                        src: "/images/horoscope/horoscope_sagittarius.png",
                        alt: "\u0927\u0928\u0941",
                        className: "rashifal-image"
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                    className: "p-2",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__.default, {
                      href: "/horoscope/capricorn/",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("img", {
                        src: "/images/horoscope/horoscope_capricorn.png",
                        alt: "\u092E\u0915\u0930",
                        className: "rashifal-image"
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                    className: "p-2",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__.default, {
                      href: "/horoscope/aquarius/",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("img", {
                        src: "/images/horoscope/horoscope_aquarius.png",
                        alt: "\u0915\u0941\u0902\u092D",
                        className: "rashifal-image"
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                    className: "p-2",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__.default, {
                      href: "/horoscope/pisces/",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("img", {
                        src: "/images/horoscope/horoscope_pisces.png",
                        alt: "\u092E\u0940\u0928",
                        className: "rashifal-image"
                      })
                    })
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                className: "col-12 card gedf-card",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                  className: "card-body p-2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_tabs__WEBPACK_IMPORTED_MODULE_10__.Tabs, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_tabs__WEBPACK_IMPORTED_MODULE_10__.TabList, {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_tabs__WEBPACK_IMPORTED_MODULE_10__.Tab, {
                        className: "tab_rashifal",
                        children: "\u0926\u0948\u0928\u093F\u0915"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_tabs__WEBPACK_IMPORTED_MODULE_10__.Tab, {
                        className: "tab_rashifal",
                        children: "\u0938\u093E\u092A\u094D\u0924\u093E\u0939\u093F\u0915"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_tabs__WEBPACK_IMPORTED_MODULE_10__.Tab, {
                        className: "tab_rashifal",
                        children: "\u092E\u093E\u0938\u093F\u0915"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_tabs__WEBPACK_IMPORTED_MODULE_10__.Tab, {
                        className: "tab_rashifal",
                        children: "\u0935\u093E\u0930\u094D\u0937\u093F\u0915"
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_tabs__WEBPACK_IMPORTED_MODULE_10__.TabPanel, {
                      children: dailyData.map((obj, idx) => {
                        if (idx === 0) {
                          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
                            className: "row",
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                              className: "col-12",
                              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                                className: "rashifal-heading",
                                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                                  className: "time mt-2"
                                })
                              })
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                              className: "col-12",
                              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Components_ListItemRashiDaily__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
                                item: obj
                              })
                            })]
                          });
                        } else {
                          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Components_ListItemRashiDaily__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
                            item: obj
                          });
                        }
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_tabs__WEBPACK_IMPORTED_MODULE_10__.TabPanel, {
                      children: weeklyData.map((obj, idx) => {
                        if (idx === 0) {
                          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
                            className: "row",
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                              className: "col-12",
                              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                                className: "rashifal-heading",
                                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                                  className: "time mt-2"
                                })
                              })
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                              className: "col-12",
                              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Components_ListItemRashiWeekly__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                                item: obj
                              })
                            })]
                          });
                        } else {
                          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Components_ListItemRashiWeekly__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                            item: obj
                          });
                        }
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_tabs__WEBPACK_IMPORTED_MODULE_10__.TabPanel, {
                      children: monthlyData.map((obj, idx) => {
                        if (idx === 0) {
                          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
                            className: "row",
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                              className: "col-12",
                              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                                className: "rashifal-heading",
                                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                                  className: "time mt-2"
                                })
                              })
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                              className: "col-12",
                              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Components_ListItemRashiDaily__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
                                item: obj
                              })
                            })]
                          });
                        } else {
                          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Components_ListItemRashiDaily__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
                            item: obj
                          });
                        }
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_tabs__WEBPACK_IMPORTED_MODULE_10__.TabPanel, {
                      children: yearlyData.map((obj, idx) => {
                        if (idx === 0) {
                          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
                            className: "row",
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                              className: "col-12",
                              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                                className: "rashifal-heading",
                                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                                  className: "time mt-2"
                                })
                              })
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
                              className: "col-12",
                              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Components_ListItemRashiYearly__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                                item: obj
                              })
                            })]
                          });
                        } else {
                          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Components_ListItemRashiYearly__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                            item: obj
                          });
                        }
                      })
                    })]
                  })
                })
              })]
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Components_Right__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
          tendring: tendring,
          rightaudio: rightaudio
        })]
      })
    })]
  });
} // This function gets called at build time

async function getStaticProps() {
  const formData = new URLSearchParams();
  formData.append('rashi', '');
  formData.append('application_id', '1');
  formData.append('client_ip', '192.168.1.1');
  const finalresult = await fetch(_next_config__WEBPACK_IMPORTED_MODULE_9__.ApiUrl + 'getrashifal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formData
  });
  const gethometopsection = await finalresult.json();
  const rightsidedata = await fetch(_next_config__WEBPACK_IMPORTED_MODULE_9__.ApiUrl + "getrightsidedata/");
  const getrighdata = await rightsidedata.json();
  return {
    props: {
      gethometopsection,
      getrighdata
    }
  };
}
});

/***/ }),

/***/ 887:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 799:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9226:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 1650:
/***/ ((module) => {

module.exports = require("react-headroom");

/***/ }),

/***/ 7795:
/***/ ((module) => {

module.exports = require("react-html-parser");

/***/ }),

/***/ 6873:
/***/ ((module) => {

module.exports = require("react-lazyload");

/***/ }),

/***/ 2312:
/***/ ((module) => {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ 4374:
/***/ ((module) => {

module.exports = require("react-social-icons");

/***/ }),

/***/ 7659:
/***/ ((module) => {

module.exports = require("react-tabs");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4074:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 2156:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61,204], () => (__webpack_exec__(7690)));
module.exports = __webpack_exports__;

})();