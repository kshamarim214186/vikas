"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Components_TopCentre)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./Components/MainItem.js






function MainItem(props) {
  const obj = props.item;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "wrap",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "image_effect",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: obj.news_full_url,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "lazyload-wrapper ",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: obj.news_image_1,
              title: obj.news_headline,
              alt: obj.news_headline,
              className: "img_effect1 featured_img"
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "category_name",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: obj.category_url,
          children: obj.category_name
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "list-group list-group-flush",
      children: /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "list-group-item p-2",
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "home-main-heading m-1",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: obj.news_full_url,
            children: obj.news_headline
          })
        })
      })
    })]
  });
}

/* harmony default export */ const Components_MainItem = (MainItem);
// EXTERNAL MODULE: external "react-social-icons"
var external_react_social_icons_ = __webpack_require__(4374);
;// CONCATENATED MODULE: ./Components/ListItemWithInLineLink.js






function ListItemWithInLineLink(props) {
  const obj = props.item;
  const facebookurl = 'http://www.facebook.com/sharer.php?u=https://www.prabhasakshi.com' + obj.news_full_url;
  const twitterurl = 'http://twitter.com/share?url=https://www.prabhasakshi.com' + obj.news_full_url;
  const whatsappurl = 'https://api.whatsapp.com/send?text=https://www.prabhasakshi.com' + obj.news_full_url;
  const telegramurl = 'https://t.me/share/url?url=https://www.prabhasakshi.com' + obj.news_full_url;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "card-body p-1",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row d-flex justify-content-between align-items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-5",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "image_effect",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: obj.news_full_url,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "lazyload-wrapper ",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: obj.news_image_1,
                  title: obj.news_headline,
                  alt: obj.news_headline,
                  className: "img_effect1 featured_img"
                })
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-7 pl-2",
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "home-centre-heading m-1",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: obj.news_full_url,
              children: obj.news_headline
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "card-footer p-2",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "float-left text-muted font-weight-bold"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "social-icons-ql float-right",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: facebookurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: twitterurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: whatsappurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: telegramurl,
          network: "telegram",
          target: "_blank"
        })]
      })]
    })]
  });
}

/* harmony default export */ const Components_ListItemWithInLineLink = (ListItemWithInLineLink);
;// CONCATENATED MODULE: ./Components/MainVideo.js






function MainVideo(props) {
  const obj = props.item;
  const videourl = "/videos/" + obj.id;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "image_effect",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: videourl,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          className: "d-block w-100",
          src: obj.video_thumbnail,
          alt: obj.title
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "youtube-play",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: videourl,
        children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "far",
          "data-icon": "play-circle",
          className: "svg-inline--fa fa-play-circle fa-w-16 text-white",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512",
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "currentColor",
            d: "M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"
          })
        })
      })
    })]
  });
}

/* harmony default export */ const Components_MainVideo = (MainVideo);
;// CONCATENATED MODULE: ./Components/VideoListLink.js






function VideoListLink(props) {
  const obj = props.vgitem;
  const videourl = "/videos/" + obj.id;
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "col-6 pr-3 pt-3 pb-3",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "wrap",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "image_effect",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: videourl,
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "d-block w-100",
              src: obj.video_thumbnail,
              alt: obj.title
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "youtube-play-small",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: videourl,
            children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
              "aria-hidden": "true",
              focusable: "false",
              "data-prefix": "far",
              "data-icon": "play-circle",
              className: "svg-inline--fa fa-play-circle fa-w-16 text-white",
              role: "img",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 512 512",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                fill: "currentColor",
                d: "M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"
              })
            })
          })
        })]
      })
    })
  });
}

/* harmony default export */ const Components_VideoListLink = (VideoListLink);
;// CONCATENATED MODULE: ./Components/MainNational.js






function MainNational(props) {
  const obj = props.snitem;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "wrap",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "image_effect",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: obj.news_full_url,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "lazyload-wrapper ",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: obj.news_image_1,
              title: obj.news_headline,
              alt: obj.news_headline,
              className: "img_effect1 featured_img"
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "category_name",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: obj.category_url,
          children: obj.category_name
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "list-group list-group-flush",
      children: /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "list-group-item p-2",
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "home-main-heading m-1",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: obj.news_full_url,
            children: obj.news_headline
          })
        })
      })
    })]
  });
}

/* harmony default export */ const Components_MainNational = (MainNational);
;// CONCATENATED MODULE: ./Components/NationalListingLink.js







function NationalListingLink(props) {
  const obj = props.snitem;
  const facebookurl = 'http://www.facebook.com/sharer.php?u=https://www.prabhasakshi.com' + obj.news_full_url;
  const twitterurl = 'http://twitter.com/share?url=https://www.prabhasakshi.com' + obj.news_full_url;
  const whatsappurl = 'https://api.whatsapp.com/send?text=https://www.prabhasakshi.com' + obj.news_full_url;
  const telegramurl = 'https://t.me/share/url?url=https://www.prabhasakshi.com' + obj.news_full_url;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "card-body p-1",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row d-flex justify-content-between align-items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-5",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "image_effect",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: obj.news_full_url,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "lazyload-wrapper ",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: obj.news_image_1,
                  title: obj.news_headline,
                  alt: obj.news_headline,
                  className: "img_effect1 featured_img"
                })
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-7 pl-2",
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "home-centre-heading m-1",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: obj.news_full_url,
              children: obj.news_headline
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "card-footer p-2",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "float-left text-muted font-weight-bold"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "social-icons-ql float-right",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: facebookurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: twitterurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: whatsappurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: telegramurl,
          network: "telegram",
          target: "_blank"
        })]
      })]
    })]
  });
}

/* harmony default export */ const Components_NationalListingLink = (NationalListingLink);
;// CONCATENATED MODULE: ./Components/MainPhotoGallery.js






function MainPhotoGallery(props) {
  const obj = props.singlephotogitem;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "wrap",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "image_effect",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: obj.gallery_url,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "d-block w-100 img_effect1",
            src: obj.gallery_detail_image_2,
            alt: obj.gallery_detail_image_alt
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "gallery-count",
        children: obj.gallery_photo_count
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "list-group list-group-flush",
      children: /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "list-group-item p-2",
        children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: "home-main-heading m-1",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: obj.gallery_url,
            children: obj.gallery_detail_image_title
          })
        })
      })
    })]
  });
}

/* harmony default export */ const Components_MainPhotoGallery = (MainPhotoGallery);
;// CONCATENATED MODULE: ./Components/PhotoGalleryListingLink.js







function PhotoGalleryListingLink(props) {
  const obj = props.multiplepgitem;
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "col-6 card gedf-card",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "card-body p-0",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "wrap",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "image_effect",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: obj.gallery_url,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                className: "d-block w-100 img_effect1",
                src: obj.gallery_detail_image_2,
                alt: obj.gallery_detail_image_alt
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "gallery-count",
            children: obj.gallery_photo_count
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: "list-group list-group-flush",
          children: /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "list-group-item p-2",
            children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "home-centre-heading m-1",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: obj.gallery_url,
                children: obj.gallery_detail_image_title
              })
            })
          })
        })]
      })
    })
  });
}

/* harmony default export */ const Components_PhotoGalleryListingLink = (PhotoGalleryListingLink);
;// CONCATENATED MODULE: ./Components/MainInterNational.js






function MainInterNational(props) {
  const obj = props.minternationalitem;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "wrap",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "image_effect",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: obj.news_full_url,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "lazyload-wrapper ",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: obj.news_image_1,
              title: obj.news_headline,
              alt: obj.news_headline,
              className: "img_effect1 featured_img"
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "category_name",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: obj.category_url,
          children: obj.category_name
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "list-group list-group-flush",
      children: /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "list-group-item p-2",
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "home-main-heading m-1",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: obj.news_full_url,
            children: obj.news_headline
          })
        })
      })
    })]
  });
}

/* harmony default export */ const Components_MainInterNational = (MainInterNational);
;// CONCATENATED MODULE: ./Components/InterNationalListingLink.js







function InterNationalListingLink(props) {
  const obj = props.internationalitem;
  const facebookurl = 'http://www.facebook.com/sharer.php?u=https://www.prabhasakshi.com' + obj.news_full_url;
  const twitterurl = 'http://twitter.com/share?url=https://www.prabhasakshi.com' + obj.news_full_url;
  const whatsappurl = 'https://api.whatsapp.com/send?text=https://www.prabhasakshi.com' + obj.news_full_url;
  const telegramurl = 'https://t.me/share/url?url=https://www.prabhasakshi.com' + obj.news_full_url;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "card-body p-1",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row d-flex justify-content-between align-items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-5",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "image_effect",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: obj.news_full_url,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "lazyload-wrapper ",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: obj.news_image_1,
                  title: obj.news_headline,
                  alt: obj.news_headline,
                  className: "img_effect1 featured_img"
                })
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-7 pl-2",
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "home-centre-heading m-1",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: obj.news_full_url,
              children: obj.news_headline
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "card-footer p-2",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "float-left text-muted font-weight-bold"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "social-icons-ql float-right",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: facebookurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: twitterurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: whatsappurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: telegramurl,
          network: "telegram",
          target: "_blank"
        })]
      })]
    })]
  });
}

/* harmony default export */ const Components_InterNationalListingLink = (InterNationalListingLink);
;// CONCATENATED MODULE: ./Components/MainUdyog.js






function MainUdyog(props) {
  const obj = props.mainudyogitem;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "wrap",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "image_effect",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: obj.news_full_url,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "lazyload-wrapper",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: obj.news_image_1,
              title: obj.news_headline,
              alt: obj.news_headline,
              className: "img_effect1 featured_img"
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "category_name",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: obj.category_url,
          children: obj.subcategory_name
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "list-group list-group-flush",
      children: /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "list-group-item p-2",
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "home-main-heading m-1",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: obj.news_full_url,
            children: obj.news_headline
          })
        })
      })
    })]
  });
}

/* harmony default export */ const Components_MainUdyog = (MainUdyog);
;// CONCATENATED MODULE: ./Components/UdyogListingLink.js







function UdyogListingLink(props) {
  const obj = props.alludyogitem;
  const facebookurl = 'http://www.facebook.com/sharer.php?u=https://www.prabhasakshi.com' + obj.news_full_url;
  const twitterurl = 'http://twitter.com/share?url=https://www.prabhasakshi.com' + obj.news_full_url;
  const whatsappurl = 'https://api.whatsapp.com/send?text=https://www.prabhasakshi.com' + obj.news_full_url;
  const telegramurl = 'https://t.me/share/url?url=https://www.prabhasakshi.com' + obj.news_full_url;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "card-body p-1",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row d-flex justify-content-between align-items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-5",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "image_effect",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: obj.news_full_url,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "lazyload-wrapper ",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: obj.news_image_1,
                  title: obj.news_headline,
                  alt: obj.news_headline,
                  className: "img_effect1 featured_img"
                })
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-7 pl-2",
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "home-centre-heading m-1",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: obj.news_full_url,
              children: obj.news_headline
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "card-footer p-2",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "float-left text-muted font-weight-bold"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "social-icons-ql float-right",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: facebookurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: twitterurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: whatsappurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: telegramurl,
          network: "telegram",
          target: "_blank"
        })]
      })]
    })]
  });
}

/* harmony default export */ const Components_UdyogListingLink = (UdyogListingLink);
;// CONCATENATED MODULE: ./Components/MainCricket.js






function MainCricket(props) {
  const obj = props.maincricketitem;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "wrap",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "image_effect",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: obj.news_full_url,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "lazyload-wrapper ",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: obj.news_image_1,
              title: obj.news_headline,
              alt: obj.news_headline,
              className: "img_effect1 featured_img"
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "category_name",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: obj.category_url,
          children: obj.subcategory_name
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "list-group list-group-flush",
      children: /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "list-group-item p-2",
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "home-main-heading m-1",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: obj.news_full_url,
            children: obj.news_headline
          })
        })
      })
    })]
  });
}

/* harmony default export */ const Components_MainCricket = (MainCricket);
;// CONCATENATED MODULE: ./Components/CricketListingLink.js







function CricketListingLink(props) {
  const obj = props.allcricketitem;
  const facebookurl = 'http://www.facebook.com/sharer.php?u=https://www.prabhasakshi.com' + obj.news_full_url;
  const twitterurl = 'http://twitter.com/share?url=https://www.prabhasakshi.com' + obj.news_full_url;
  const whatsappurl = 'https://api.whatsapp.com/send?text=https://www.prabhasakshi.com' + obj.news_full_url;
  const telegramurl = 'https://t.me/share/url?url=https://www.prabhasakshi.com' + obj.news_full_url;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "card-body p-1",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row d-flex justify-content-between align-items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-5",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "image_effect",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: obj.news_full_url,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "lazyload-wrapper ",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: obj.news_image_1,
                  title: obj.news_headline,
                  alt: obj.news_headline,
                  className: "img_effect1 featured_img"
                })
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-7 pl-2",
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "home-centre-heading m-1",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: obj.news_full_url,
              children: obj.news_headline
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "card-footer p-2",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "float-left text-muted font-weight-bold"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "social-icons-ql float-right",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: facebookurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: twitterurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: whatsappurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: telegramurl,
          network: "telegram",
          target: "_blank"
        })]
      })]
    })]
  });
}

/* harmony default export */ const Components_CricketListingLink = (CricketListingLink);
;// CONCATENATED MODULE: ./Components/MainBollywood.js






function MainBollywood(props) {
  const obj = props.mainbollywooditem;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "wrap",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "image_effect",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: obj.news_full_url,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "lazyload-wrapper ",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: obj.news_image_1,
              title: obj.news_headline,
              alt: obj.news_headline,
              className: "img_effect1 featured_img"
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "category_name",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: obj.category_url,
          children: obj.subcategory_name
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "list-group list-group-flush",
      children: /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "list-group-item p-2",
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "home-main-heading m-1",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: obj.news_full_url,
            children: obj.news_headline
          })
        })
      })
    })]
  });
}

/* harmony default export */ const Components_MainBollywood = (MainBollywood);
;// CONCATENATED MODULE: ./Components/BollywoodListingLink.js







function BollywoodListingLink(props) {
  const obj = props.allbollywooditem;
  const facebookurl = 'http://www.facebook.com/sharer.php?u=https://www.prabhasakshi.com' + obj.news_full_url;
  const twitterurl = 'http://twitter.com/share?url=https://www.prabhasakshi.com' + obj.news_full_url;
  const whatsappurl = 'https://api.whatsapp.com/send?text=https://www.prabhasakshi.com' + obj.news_full_url;
  const telegramurl = 'https://t.me/share/url?url=https://www.prabhasakshi.com' + obj.news_full_url;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "card-body p-1",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row d-flex justify-content-between align-items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-5",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "image_effect",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: obj.news_full_url,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "lazyload-wrapper ",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: obj.news_image_1,
                  title: obj.news_headline,
                  alt: obj.news_headline,
                  className: "img_effect1 featured_img"
                })
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-7 pl-2",
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "home-centre-heading m-1",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: obj.news_full_url,
              children: obj.news_headline
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "card-footer p-2",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "float-left text-muted font-weight-bold"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "social-icons-ql float-right",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: facebookurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: twitterurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: whatsappurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: telegramurl,
          network: "telegram",
          target: "_blank"
        })]
      })]
    })]
  });
}

/* harmony default export */ const Components_BollywoodListingLink = (BollywoodListingLink);
;// CONCATENATED MODULE: ./Components/MainVrat.js






function MainVrat(props) {
  const obj = props.mainvratitem;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "wrap",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "image_effect",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: obj.news_full_url,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "lazyload-wrapper ",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: obj.news_image_1,
              title: obj.news_headline,
              alt: obj.news_headline,
              className: "img_effect1 featured_img"
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "category_name",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: obj.category_url,
          children: obj.subcategory_name
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "list-group list-group-flush",
      children: /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "list-group-item p-2",
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "home-main-heading m-1",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: obj.news_full_url,
            children: obj.news_headline
          })
        })
      })
    })]
  });
}

/* harmony default export */ const Components_MainVrat = (MainVrat);
;// CONCATENATED MODULE: ./Components/VratListingLink.js







function VratListingLink(props) {
  const obj = props.allvratitem;
  const facebookurl = 'http://www.facebook.com/sharer.php?u=https://www.prabhasakshi.com' + obj.news_full_url;
  const twitterurl = 'http://twitter.com/share?url=https://www.prabhasakshi.com' + obj.news_full_url;
  const whatsappurl = 'https://api.whatsapp.com/send?text=https://www.prabhasakshi.com' + obj.news_full_url;
  const telegramurl = 'https://t.me/share/url?url=https://www.prabhasakshi.com' + obj.news_full_url;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "card-body p-1",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row d-flex justify-content-between align-items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-5",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "image_effect",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: obj.news_full_url,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "lazyload-wrapper ",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: obj.news_image_1,
                  title: obj.news_headline,
                  alt: obj.news_headline,
                  className: "img_effect1 featured_img"
                })
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-7 pl-2",
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "home-centre-heading m-1",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: obj.news_full_url,
              children: obj.news_headline
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "card-footer p-2",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "float-left text-muted font-weight-bold"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "social-icons-ql float-right",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: facebookurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: twitterurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: whatsappurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: telegramurl,
          network: "telegram",
          target: "_blank"
        })]
      })]
    })]
  });
}

/* harmony default export */ const Components_VratListingLink = (VratListingLink);
;// CONCATENATED MODULE: ./Components/MainSakhsiyat.js






function MainSakhsiyat(props) {
  const obj = props.mainsakhsiyatitem;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "wrap",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "image_effect",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: obj.news_full_url,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "lazyload-wrapper ",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: obj.news_image_1,
              title: obj.news_headline,
              alt: obj.news_headline,
              className: "img_effect1 featured_img"
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "category_name",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: obj.category_url,
          children: obj.subcategory_name
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "list-group list-group-flush",
      children: /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "list-group-item p-2",
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "home-main-heading m-1",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: obj.news_full_url,
            children: obj.news_headline
          })
        })
      })
    })]
  });
}

/* harmony default export */ const Components_MainSakhsiyat = (MainSakhsiyat);
;// CONCATENATED MODULE: ./Components/SakhsiyatListingLink.js







function SakhsiyatListingLink(props) {
  const obj = props.allsakhsiyatitem;
  const facebookurl = 'http://www.facebook.com/sharer.php?u=https://www.prabhasakshi.com' + obj.news_full_url;
  const twitterurl = 'http://twitter.com/share?url=https://www.prabhasakshi.com' + obj.news_full_url;
  const whatsappurl = 'https://api.whatsapp.com/send?text=https://www.prabhasakshi.com' + obj.news_full_url;
  const telegramurl = 'https://t.me/share/url?url=https://www.prabhasakshi.com' + obj.news_full_url;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "card-body p-1",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row d-flex justify-content-between align-items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-5",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "image_effect",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: obj.news_full_url,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "lazyload-wrapper ",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: obj.news_image_1,
                  title: obj.news_headline,
                  alt: obj.news_headline,
                  className: "img_effect1 featured_img"
                })
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-7 pl-2",
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "home-centre-heading m-1",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: obj.news_full_url,
              children: obj.news_headline
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "card-footer p-2",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "float-left text-muted font-weight-bold"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "social-icons-ql float-right",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: facebookurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: twitterurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: whatsappurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: telegramurl,
          network: "telegram",
          target: "_blank"
        })]
      })]
    })]
  });
}

/* harmony default export */ const Components_SakhsiyatListingLink = (SakhsiyatListingLink);
;// CONCATENATED MODULE: ./Components/MainBeauty.js






function MainBeauty(props) {
  const obj = props.mainbeautyitem;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "wrap",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "image_effect",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: obj.news_full_url,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "lazyload-wrapper ",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: obj.news_image_1,
              title: obj.news_headline,
              alt: obj.news_headline,
              className: "img_effect1 featured_img"
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "category_name",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: obj.category_url,
          children: obj.subcategory_name
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "list-group list-group-flush",
      children: /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "list-group-item p-2",
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "home-main-heading m-1",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: obj.news_full_url,
            children: obj.news_headline
          })
        })
      })
    })]
  });
}

/* harmony default export */ const Components_MainBeauty = (MainBeauty);
;// CONCATENATED MODULE: ./Components/BeautyListingLink.js







function BeautyListingLink(props) {
  const obj = props.allbeautytitem;
  const facebookurl = 'http://www.facebook.com/sharer.php?u=https://www.prabhasakshi.com' + obj.news_full_url;
  const twitterurl = 'http://twitter.com/share?url=https://www.prabhasakshi.com' + obj.news_full_url;
  const whatsappurl = 'https://api.whatsapp.com/send?text=https://www.prabhasakshi.com' + obj.news_full_url;
  const telegramurl = 'https://t.me/share/url?url=https://www.prabhasakshi.com' + obj.news_full_url;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "card-body p-1",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row d-flex justify-content-between align-items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-5",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "image_effect",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: obj.news_full_url,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "lazyload-wrapper ",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: obj.news_image_1,
                  title: obj.news_headline,
                  alt: obj.news_headline,
                  className: "img_effect1 featured_img"
                })
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-7 pl-2",
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "home-centre-heading m-1",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: obj.news_full_url,
              children: obj.news_headline
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "card-footer p-2",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "float-left text-muted font-weight-bold"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "social-icons-ql float-right",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: facebookurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: twitterurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: whatsappurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: telegramurl,
          network: "telegram",
          target: "_blank"
        })]
      })]
    })]
  });
}

/* harmony default export */ const Components_BeautyListingLink = (BeautyListingLink);
;// CONCATENATED MODULE: ./Components/MainTrading.js






function MainTrading(props) {
  const obj = props.tradingitem;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "wrap",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "image_effect",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: obj.news_full_url,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "lazyload-wrapper ",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: obj.news_image_1,
              title: obj.news_headline,
              alt: obj.news_headline,
              className: "img_effect1 featured_img"
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "category_name",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: obj.category_url,
          children: obj.subcategory_name
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "list-group list-group-flush",
      children: /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "list-group-item p-2",
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "home-main-heading m-1",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: obj.news_full_url,
            children: obj.news_headline
          })
        })
      })
    })]
  });
}

/* harmony default export */ const Components_MainTrading = (MainTrading);
;// CONCATENATED MODULE: ./Components/TradingListingLink.js







function TradingListingLink(props) {
  const obj = props.alltradingitem;
  const facebookurl = 'http://www.facebook.com/sharer.php?u=https://www.prabhasakshi.com' + obj.news_full_url;
  const twitterurl = 'http://twitter.com/share?url=https://www.prabhasakshi.com' + obj.news_full_url;
  const whatsappurl = 'https://api.whatsapp.com/send?text=https://www.prabhasakshi.com' + obj.news_full_url;
  const telegramurl = 'https://t.me/share/url?url=https://www.prabhasakshi.com' + obj.news_full_url;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "card-body p-1",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row d-flex justify-content-between align-items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-5",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "image_effect",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: obj.news_full_url,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "lazyload-wrapper ",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: obj.news_image_1,
                  title: obj.news_headline,
                  alt: obj.news_headline,
                  className: "img_effect1 featured_img"
                })
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-7 pl-2",
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "home-centre-heading m-1",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: obj.news_full_url,
              children: obj.news_headline
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "card-footer p-2",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "float-left text-muted font-weight-bold"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "social-icons-ql float-right",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: facebookurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: twitterurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: whatsappurl,
          target: "_blank"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
          url: telegramurl,
          network: "telegram",
          target: "_blank"
        })]
      })]
    })]
  });
}

/* harmony default export */ const Components_TradingListingLink = (TradingListingLink);
;// CONCATENATED MODULE: ./Components/TopCentre.js





























function TopCentre(props) {
  const data = props.item;
  const liveVideo = props.liveVideo;
  const videoGallery = props.videoGallery;
  const allTopScroll = props.allTopScroll;
  const national = allTopScroll.Table1;
  const photogallery = allTopScroll.Table3;
  const international = allTopScroll.Table2;
  const udyog = allTopScroll.Table4;
  const cricket = allTopScroll.Table5;
  const bollywood = allTopScroll.Table6;
  const vrat = allTopScroll.Table7;
  const sakhsiyat = allTopScroll.Table8;
  const beauty = allTopScroll.Table9;
  const trading = allTopScroll.Table10;
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "col-md-6 bg-white mt-3",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container-fluid p-2",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row mtop-desktop d-block d-sm-none",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-12 gedf-main text-center p-0",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "gedf-card text-center ad-300-250",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "ad-300-250",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "adunitContainer",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "adBox",
                    id: "adSlot-1",
                    "data-google-query-id": "CKfMtvLGkPQCFdjbcwEdejED2g",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      id: "google_ads_iframe_21715648431/prabhasakshi_react_website/prabhasakshi_react_website_header_300_250_0__container__"
                    })
                  })
                })
              })
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row mb-2",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row mt-3 mb-3",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
                  className: "font24px position-relative",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    className: "sun_imgn2",
                    src: "/images/prabhasakshi_sun_logo.webp",
                    alt: "sunimage"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    className: "ml-4",
                    href: "/",
                    children: "\u091F\u0949\u092A \u0938\u094D\u091F\u094B\u0930\u0940"
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "lines"
                })
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-12",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "row mt-2",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-12 card gedf-card news-274169",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "card-body p-0",
                  children: data.map((obj, idx) => {
                    if (idx === 0) {
                      return /*#__PURE__*/jsx_runtime_.jsx(Components_MainItem, {
                        item: obj
                      }, idx);
                    }
                  })
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "row",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-12 gedf-main news-274168",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "card gedf-card",
                  children: data.map((obj, idx) => {
                    if (idx != 0) {
                      return /*#__PURE__*/jsx_runtime_.jsx(Components_ListItemWithInLineLink, {
                        item: obj
                      }, idx);
                    }
                  })
                })
              })
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row mtop-desktop ",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-12 gedf-main text-center p-0",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "gedf-card text-center ad-300-250",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "ad-300-250",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "adunitContainer",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "adBox",
                    id: "adSlot-2",
                    "data-google-query-id": "CKjMtvLGkPQCFdjbcwEdejED2g",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      id: "google_ads_iframe_21715648431/prabhasakshi_react_website/prabhasakshi_react_website_footer_300_250_0__container__"
                    })
                  })
                })
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row mb-2",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-12",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row mb-2",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "row mt-3 mb-3",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
                      className: "font24px position-relative",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                        className: "sun_imgn2",
                        src: "/images/prabhasakshi_sun_logo.webp",
                        alt: "sunimage"
                      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        className: "ml-4",
                        href: "/videos",
                        children: "\u0935\u0940\u0921\u093F\u092F\u094B \u0917\u0948\u0932\u0930\u0940"
                      })]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "lines"
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-12 mt-2",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "wrap",
                  children: videoGallery.map((obj, idx) => {
                    if (idx === 0) {
                      return /*#__PURE__*/jsx_runtime_.jsx(Components_MainVideo, {
                        item: obj
                      }, idx);
                    }
                  })
                })
              }), videoGallery.map((vgobj, vgidx) => {
                if (vgidx != 0) {
                  return /*#__PURE__*/jsx_runtime_.jsx(Components_VideoListLink, {
                    vgitem: vgobj
                  }, vgidx);
                }
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row mb-2 mt-5",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "col-12",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "row mt-3 mb-3",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
                      className: "font24px position-relative",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                        className: "sun_imgn2",
                        src: "/images/prabhasakshi_sun_logo.webp",
                        alt: "sunimage"
                      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        className: "ml-4",
                        href: national[0].category_url,
                        children: national[0].category_name
                      })]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "lines"
                    })
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "row mt-2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12 card gedf-card news-274169",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "card-body p-0",
                      children: national.map((snobj, snidx) => {
                        if (snidx === 0) {
                          return /*#__PURE__*/jsx_runtime_.jsx(Components_MainNational, {
                            snitem: snobj
                          }, snidx);
                        }
                      })
                    })
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-12 gedf-main news-274168",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "card gedf-card",
                    children: national.map((mnobj, mnidx) => {
                      if (mnidx != 0) {
                        return /*#__PURE__*/jsx_runtime_.jsx(Components_NationalListingLink, {
                          snitem: mnobj
                        }, mnidx);
                      }
                    })
                  })
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row mb-2",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "row mt-3 mb-3",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
                      className: "font24px position-relative",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                        className: "sun_imgn2",
                        src: "/images/prabhasakshi_sun_logo.webp",
                        alt: "sunimage"
                      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        className: "ml-4",
                        href: "/photos/photogallery",
                        children: "\u092B\u094B\u091F\u094B \u0917\u0948\u0932\u0930\u0940"
                      })]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "lines"
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-12 card gedf-card mt-2",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "card-body p-0",
                  children: photogallery.map((singlephotogobj, singlephotogidx) => {
                    if (singlephotogidx === 0) {
                      return /*#__PURE__*/jsx_runtime_.jsx(Components_MainPhotoGallery, {
                        singlephotogitem: singlephotogobj
                      }, singlephotogidx);
                    }
                  })
                })
              }), photogallery.map((multiplepgobj, multiplepg) => {
                if (multiplepg != 0) {
                  return /*#__PURE__*/jsx_runtime_.jsx(Components_PhotoGalleryListingLink, {
                    multiplepgitem: multiplepgobj
                  }, multiplepg);
                }
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row mb-2 mt-5",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "col-12",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "row mt-3 mb-3",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
                      className: "font24px position-relative",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                        className: "sun_imgn2",
                        src: "/images/prabhasakshi_sun_logo.webp",
                        alt: "sunimage"
                      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        className: "ml-4",
                        href: international[0].category_url,
                        children: international[0].category_name
                      })]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "lines"
                    })
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "row mt-2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12 card gedf-card news-274142",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "card-body p-0",
                      children: international.map((maininternational, maininternationalid) => {
                        if (maininternationalid === 0) {
                          return /*#__PURE__*/jsx_runtime_.jsx(Components_MainInterNational, {
                            minternationalitem: maininternational
                          }, maininternationalid);
                        }
                      })
                    })
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-12 gedf-main news-274137",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "card gedf-card",
                    children: international.map((internationalobj, internationalidx) => {
                      if (internationalidx != 0) {
                        return /*#__PURE__*/jsx_runtime_.jsx(Components_InterNationalListingLink, {
                          internationalitem: internationalobj
                        }, internationalidx);
                      }
                    })
                  })
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row mb-2 mt-5",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "col-12",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "row mt-3 mb-3",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
                      className: "font24px position-relative",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                        className: "sun_imgn2",
                        src: "/images/prabhasakshi_sun_logo.webp",
                        alt: "sunimage"
                      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        className: "ml-4",
                        href: udyog[0].category_url,
                        children: udyog[0].subcategory_name
                      })]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "lines"
                    })
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "row mt-2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12 card gedf-card news-274133",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "card-body p-0",
                      children: udyog.map((mainudyog, mainudyogid) => {
                        if (mainudyogid === 0) {
                          return /*#__PURE__*/jsx_runtime_.jsx(Components_MainUdyog, {
                            mainudyogitem: mainudyog
                          }, mainudyogid);
                        }
                      })
                    })
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-12 gedf-main news-274121",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "card gedf-card",
                    children: udyog.map((alludyogobj, alludyogidx) => {
                      if (alludyogidx != 0) {
                        return /*#__PURE__*/jsx_runtime_.jsx(Components_UdyogListingLink, {
                          alludyogitem: alludyogobj
                        }, alludyogidx);
                      }
                    })
                  })
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row mb-2 mt-5",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "col-12",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "row mt-3 mb-3",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
                      className: "font24px position-relative",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                        className: "sun_imgn2",
                        src: "/images/prabhasakshi_sun_logo.webp",
                        alt: "sunimage"
                      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        className: "ml-4",
                        href: cricket[0].category_url,
                        children: cricket[0].category_name
                      })]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "lines"
                    })
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "row mt-2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12 card gedf-card news-274139",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "card-body p-0",
                      children: cricket.map((maincricket, maincricketid) => {
                        if (maincricketid === 0) {
                          return /*#__PURE__*/jsx_runtime_.jsx(Components_MainCricket, {
                            maincricketitem: maincricket
                          }, maincricketid);
                        }
                      })
                    })
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-12 gedf-main news-274136",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "card gedf-card",
                    children: cricket.map((allcricketobj, allcricketidx) => {
                      if (allcricketidx != 0) {
                        return /*#__PURE__*/jsx_runtime_.jsx(Components_CricketListingLink, {
                          allcricketitem: allcricketobj
                        }, allcricketidx);
                      }
                    })
                  })
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row mb-2 mt-5",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "col-12",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "row mt-3 mb-3",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
                      className: "font24px position-relative",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                        className: "sun_imgn2",
                        src: "/images/prabhasakshi_sun_logo.webp",
                        alt: "sunimage"
                      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        className: "ml-4",
                        href: bollywood[0].category_url,
                        children: bollywood[0].subcategory_name
                      })]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "lines"
                    })
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "row mt-2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12 card gedf-card news-274151",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "card-body p-0",
                      children: bollywood.map((mainbollywood, mainbollywoodid) => {
                        if (mainbollywoodid === 0) {
                          return /*#__PURE__*/jsx_runtime_.jsx(Components_MainBollywood, {
                            mainbollywooditem: mainbollywood
                          }, mainbollywoodid);
                        }
                      })
                    })
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-12 gedf-main news-274127",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "card gedf-card",
                    children: bollywood.map((allbollywoodobj, allbollywoodidx) => {
                      if (allbollywoodidx != 0) {
                        return /*#__PURE__*/jsx_runtime_.jsx(Components_BollywoodListingLink, {
                          allbollywooditem: allbollywoodobj
                        }, allbollywoodidx);
                      }
                    })
                  })
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row mb-2 mt-5",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "col-12",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "row mt-3 mb-3",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
                      className: "font24px position-relative",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                        className: "sun_imgn2",
                        src: "/images/prabhasakshi_sun_logo.webp",
                        alt: "sunimage"
                      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        className: "ml-4",
                        href: vrat[0].category_url,
                        children: vrat[0].subcategory_name
                      })]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "lines"
                    })
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "row mt-2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12 card gedf-card news-274030",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "card-body p-0",
                      children: vrat.map((mainvrat, mainvratid) => {
                        if (mainvratid === 0) {
                          return /*#__PURE__*/jsx_runtime_.jsx(Components_MainVrat, {
                            mainvratitem: mainvrat
                          }, mainvratid);
                        }
                      })
                    })
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-12 gedf-main news-273982",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "card gedf-card",
                    children: vrat.map((allvratobj, allvratidx) => {
                      if (allvratidx != 0) {
                        return /*#__PURE__*/jsx_runtime_.jsx(Components_VratListingLink, {
                          allvratitem: allvratobj
                        }, allvratidx);
                      }
                    })
                  })
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row mb-2 mt-5",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "col-12",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "row mt-3 mb-3",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
                      className: "font24px position-relative",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                        className: "sun_imgn2",
                        src: "/images/prabhasakshi_sun_logo.webp",
                        alt: "sunimage"
                      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        className: "ml-4",
                        href: sakhsiyat[0].category_url,
                        children: sakhsiyat[0].category_name
                      })]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "lines"
                    })
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "row mt-2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12 card gedf-card news-274093",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "card-body p-0",
                      children: sakhsiyat.map((mainsakhsiyat, mainsakhsiyatid) => {
                        if (mainsakhsiyatid === 0) {
                          return /*#__PURE__*/jsx_runtime_.jsx(Components_MainSakhsiyat, {
                            mainsakhsiyatitem: mainsakhsiyat
                          }, mainsakhsiyatid);
                        }
                      })
                    })
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-12 gedf-main news-274036",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "card gedf-card",
                    children: sakhsiyat.map((allsakhsiyatobj, allsakhsiyatidx) => {
                      if (allsakhsiyatidx != 0) {
                        return /*#__PURE__*/jsx_runtime_.jsx(Components_SakhsiyatListingLink, {
                          allsakhsiyatitem: allsakhsiyatobj
                        }, allsakhsiyatidx);
                      }
                    })
                  })
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row mb-2 mt-5",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "col-12",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "row mt-3 mb-3",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
                      className: "font24px position-relative",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                        className: "sun_imgn2",
                        src: "/images/prabhasakshi_sun_logo.webp",
                        alt: "sunimage"
                      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        className: "ml-4",
                        href: beauty[0].category_url,
                        children: beauty[0].category_name
                      })]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "lines"
                    })
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "row mt-2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12 card gedf-card news-274018",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "card-body p-0",
                      children: beauty.map((mainbeauty, mainbeautyid) => {
                        if (mainbeautyid === 0) {
                          return /*#__PURE__*/jsx_runtime_.jsx(Components_MainBeauty, {
                            mainbeautyitem: mainbeauty
                          }, mainbeautyid);
                        }
                      })
                    })
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-12 gedf-main news-273909",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "card gedf-card",
                    children: beauty.map((allbeautyobj, allbeautyidx) => {
                      if (allbeautyidx != 0) {
                        return /*#__PURE__*/jsx_runtime_.jsx(Components_BeautyListingLink, {
                          allbeautytitem: allbeautyobj
                        }, allbeautyidx);
                      }
                    })
                  })
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row mb-2 mt-5",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "col-12",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "row mt-3 mb-3",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
                      className: "font24px position-relative",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                        className: "sun_imgn2",
                        src: "/images/prabhasakshi_sun_logo.webp",
                        alt: "sunimage"
                      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        className: "ml-4",
                        href: trading[0].category_url,
                        children: trading[0].category_name
                      })]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "lines"
                    })
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "row mt-2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "col-12 card gedf-card news-274162",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "card-body p-0",
                      children: trading.map((maintrading, maintradingid) => {
                        if (maintradingid === 0) {
                          return /*#__PURE__*/jsx_runtime_.jsx(Components_MainTrading, {
                            tradingitem: maintrading
                          }, maintradingid);
                        }
                      })
                    })
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-12 gedf-main news-274138",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "card gedf-card",
                    children: trading.map((alltradingobj, alltradingidx) => {
                      if (alltradingidx != 0) {
                        return /*#__PURE__*/jsx_runtime_.jsx(Components_TradingListingLink, {
                          alltradingitem: alltradingobj
                        }, alltradingidx);
                      }
                    })
                  })
                })
              })]
            })]
          })
        })]
      })
    })
  });
}

/* harmony default export */ const Components_TopCentre = (TopCentre);

/***/ }),

/***/ 6124:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var _Components_HeaderOld__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7895);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _Components_Left__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1785);
/* harmony import */ var _Components_Right__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7534);
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3064);
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Components_TopCentre__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2957);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_Right__WEBPACK_IMPORTED_MODULE_5__]);
_Components_Right__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];












function Home({
  gethometopsection,
  getrighdata,
  gethomescroll
}) {
  const liveVideo = gethometopsection.Table1;
  const topSection = gethometopsection.Table2;
  const rightaudio = getrighdata.Table2;
  const tendring = getrighdata.Table;
  const videoGallery = gethomescroll.Table;
  const headercontent = gethometopsection.Table;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("title", {
        children: headercontent[0].meta_title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("meta", {
        name: "keywords",
        content: headercontent[0].meta_keywords
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("meta", {
        name: "description",
        content: headercontent[0].meta_description
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("link", {
        rel: "canonical",
        href: _next_config__WEBPACK_IMPORTED_MODULE_6__.SiteUrl
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
      className: "d-none d-md-block",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: "row mtop-desktop pl-5 pr-5",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: "col-12 gedf-main text-center p-0",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
            className: "gedf-card text-center ad-728-90",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
              className: "ad-728-90",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                className: "adunitContainer",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                  className: "adBox",
                  id: "adSlot-0",
                  "data-google-query-id": "CIe92N_O_PMCFZIItwAdmZoKEQ",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                    id: "google_ads_iframe_21715648431/prabhasakshi_react_website/prabhasakshi_react_website_728_90_0__container__"
                  })
                })
              })
            })
          })
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Components_HeaderOld__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
      className: "container p-0",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Components_Left__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Components_TopCentre__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
          item: topSection,
          liveVideo: liveVideo,
          videoGallery: videoGallery,
          allTopScroll: gethomescroll
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Components_Right__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
          tendring: tendring,
          rightaudio: rightaudio
        })]
      })
    })]
  });
} // This function gets called at build time

async function getStaticProps() {
  const res = await fetch(_next_config__WEBPACK_IMPORTED_MODULE_6__.ApiUrl + "gethometopsection/");
  const gethometopsection = await res.json();
  const rightsidedata = await fetch(_next_config__WEBPACK_IMPORTED_MODULE_6__.ApiUrl + "getrightsidedata/");
  const getrighdata = await rightsidedata.json();
  const homescrollsec = await fetch(_next_config__WEBPACK_IMPORTED_MODULE_6__.ApiUrl + "gethomescrollsection/");
  const gethomescroll = await homescrollsec.json(); //console.log(gethomescroll);

  return {
    props: {
      gethometopsection,
      getrighdata,
      gethomescroll
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

/***/ 4374:
/***/ ((module) => {

module.exports = require("react-social-icons");

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
var __webpack_exports__ = __webpack_require__.X(0, [61,204], () => (__webpack_exec__(6124)));
module.exports = __webpack_exports__;

})();