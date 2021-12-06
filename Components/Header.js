import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faSearch, faLink, faGlobe } from '@fortawesome/free-solid-svg-icons'

import Headroom from 'react-headroom';
import { InputGroup, FormControl } from 'react-bootstrap';
import {Nav, NavDropdown} from "react-bootstrap";

function Header(){

  const [state, setSearch] = useState({
        val: '',
    });

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
    };
    const closeMobileMenu = () => {
        setClick(false)
    };
   

    function Search() {
        
    }
    function SearchOnEnter(event) {
        
    }

    return(
        <>
          <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark p-0 pr-2">          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <div id="mySidenav" className="navbar-toggler navbar-toggler-desktop" onClick={handleClick}>
                    {click ? (
                        <FontAwesomeIcon icon={faTimes} className="pstextcolor" />
                    ) : (
                        <FontAwesomeIcon icon={faBars} className="pstextcolor" />
                    )}
                </div>
                <li className="nav-item">
                  <a className="nav-link" href="news/national/index.html">
                    राष्ट्रीय
                  </a>
                </li>

          <li className="nav-item">
          <a className="nav-link" href="news/international/index.html">
          अंतर्राष्ट्रीय
          </a>
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="news/bazar/index.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          बिज़नेस
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="news/business/index.html">उद्योग जगत</a>
          <a className="dropdown-item" href="news/expertopinion/index.html">विशेषज्ञ राय</a>
          <a className="dropdown-item" href="budget.html">बजट 2021</a>
          </div>
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="news/sports/index.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          खेल
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="news/cricket/index.html">क्रिकेट</a>
          </div>
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="news/informative-articles/index.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          गुरुकुल
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="news/personality/index.html">शख्सियत</a>
          <a className="dropdown-item" href="news/career/index.html">यंग इंडिया</a>
          <a className="dropdown-item" href="news/literaturearticles/index.html">साहित्य जगत</a>
          <a className="dropdown-item" href="news/proventhings/index.html">जाँची परखी बातें</a>
          </div>
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="news/lifestyle/index.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          लाइफस्टाइल
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="news/technologyarticles/index.html">टेक्नॉलॉजी</a>
          <a className="dropdown-item" href="news/beauty/index.html">ब्यूटी/फैशन</a>
          <a className="dropdown-item" href="news/womenarticles/index.html">घरेलू नुस्खे</a>
          <a className="dropdown-item" href="news/touristplaces/index.html">पर्यटन स्थल</a>
          <a className="dropdown-item" href="news/harticle/index.html">फिटनेस मंत्रा</a>
          </div>
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="news/entertainment/index.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          मनोरंजन जगत
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="news/bollywood/index.html">बॉलीवुड</a>
          <a className="dropdown-item" href="news/hollywood/index.html">हॉलीवुड</a>
          <a className="dropdown-item" href="news/filmreview/index.html">फिल्म समीक्षा</a>
          </div>
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="news/politics/index.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          राजनीति
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="news/politics-articles/index.html">विश्लेषण</a>
          <a className="dropdown-item" href="news/currentaffairs/index.html">समसामयिक</a>
          <a className="dropdown-item" href="news/mri/index.html">एम. आर. आई.</a>
          <a className="dropdown-item" href="news/reviews-on-tea/index.html">चाय पर समीक्षा</a>
          </div>
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="news/religion/index.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          धर्म
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="news/jyotish/index.html">ज्योतिष</a>
          <a className="dropdown-item" href="news/articles-on-gods/index.html">प्रभु महिमा/धर्मस्थल</a>
          <a className="dropdown-item" href="news/festivals/index.html">व्रत त्योहार</a>
          <a className="dropdown-item" href="horoscope.html">राशिफल</a>
          </div>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="livefeed/ayodhya-verdict.html">
          अयोध्या
          </a>
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          चुनाव
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="https://loksabhachunav.com/" target="_blank">लोकसभा</a>
          <a className="dropdown-item" href="election/vidhaansabha-maps.html">विधानसभा</a>
          </div>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="coronavirus.html">
          कोरोना
          </a>
          </li>
          </ul>
          </div>
          </nav>

          {/* fgkjkghfghfghfghfgh */}
          <div className="logo-nav">
              <div id="logo-nav" className={click && window.pageYOffset < 50 ? "nav-options active" : (click && window.pageYOffset >= 50 ? "nav-options active nav-options-scroll" : "nav-options")}>
                  <div className="row mb-2">
                      <div className="col-12">
                          <div className="ps-line"></div>
                      </div>
                      <div className="col-12 m-2">
                          <div className="trandingList">
                              <div className="tranding-hd tranding-hd2 pt-1 trandIcon1">
                                  <FontAwesomeIcon icon={faGlobe} className="fa-lg" />
                              </div>
                              <ul className="mt-0">
                                  <li><a href="https://www.prabhasakshi.com/news/national"><div className="h3"  >Latest News in Hindi</div></a></li>
                                  <li className="ml-4"><a href="https://www.prabhasakshi.com"><div className="h3"  >Hindi News Live</div></a></li>
                                  <li className="ml-4"><a href="https://www.prabhasakshi.com/state-hindi-news"><div className="h3"  >Breaking News in Hindi</div></a></li>
                                  <li className="ml-4"><a href="https://www.prabhasakshi.com/news/politics"><div className="h3"  >Hindi News</div></a></li>
                                  <li className="ml-4"><a href="https://www.prabhasakshi.com/videos"><div className="h3"  >News in Hindi</div></a></li>
                              </ul>
                          </div>
                      </div>

                      <div className="col-12 p-3">
                          <div className="row">
                              <div className="col-4 p-3">
                                  <div className="side-nav-list">
                                      <h4><FontAwesomeIcon icon={faLink} className="fa-lg" />&nbsp;Quick Links</h4>
                                  </div>
                                  <span className="animate-border border-white"></span>
                              </div>
                              <div className="col-8 p-3">
                                  <div className="side-nav-list">
                                      <h4><FontAwesomeIcon icon={faLink} className="fa-lg" />&nbsp;ताज़ा खबर2</h4>
                                  </div>
                                  <span className="animate-border border-white"></span>
                              </div>
                              <div className="col-4">
                                  <div className="row">
                                      <div className="col-5 side-nav-list p-3">
                                          <ul className="list-unstyled" onClick={closeMobileMenu}>
                                              <li><Link href="/news/trending">ट्रेंडिंग</Link></li>
                                              <li><Link href="/photos/photogallery">फोटो</Link></li>
                                              <li><Link href="/videos">वीडियो</Link></li>
                                              <li><Link href="/state-hindi-news">राज्यों से</Link></li>
                                              <li><Link href="/gallery/suvichaar">सुविचार</Link></li>
                                              <li><Link href="/gallery/cartoon">कार्टून</Link></li>
                                              <li><a rel="nofollow" rel="sponsored" href="https://www.talkcharge.com/" className="pstextcolor" target="_blank">Cashback</a></li>
                                              <li><a href="https://www.loksabhachunav.com" target="_blank" rel="nofollow">Loksabhachunav</a></li>
                                          </ul>
                                      </div>
                                      <div className="col-7 side-nav-list p-3">
                                          <ul className="list-unstyled" onClick={closeMobileMenu}>
                                              {/* <li><Link href="/archive">Archive</Link></li> */}
                                              <li><Link href="/aboutus">About us</Link></li>
                                              <li><Link href="/contactus">Contact editor</Link></li>
                                              <li><Link href="/contact/advertisewithus">Advertise with us</Link></li>
                                              <li><Link href="/privacypolicy">Privacy Policy</Link></li>
                                              <li><Link href="/cookiepolicy">Cookie Policy</Link></li>
                                              <li><Link href="/disclaimer">Disclaimer</Link></li>
                                              <li><Link href="/grievance-redressal">Grievance Redressal</Link></li>
                                              <li><Link href="/code-of-ethics">Code Of Ethics</Link></li>
                                              <li><Link href="/rss">RSS</Link></li>
                                              <li><Link href="/team">Our Team</Link></li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-8">
                                  <div className="row">
                                      <div className="col-4 side-nav-list p-3">
                                          <ul className="list-unstyled" onClick={closeMobileMenu}>
                                              <li><Link href="/news/national">राष्ट्रीय</Link></li>
                                              <li><Link href="/news/international">अंतर्राष्ट्रीय</Link></li>
                                              <li><Link href="/news/business">उद्योग जगत</Link></li>
                                              <li><Link href="/news/expertopinion">विशेषज्ञ राय</Link></li>
                                              <li><Link href="/news/sports">खेल</Link></li>
                                              <li><Link href="/news/cricket">क्रिकेट</Link></li>
                                              <li><Link href="/news/personality">शख्सियत</Link></li>
                                              <li><Link href="/news/career">यंग इंडिया</Link></li>
                                              <li><Link href="/news/literaturearticles">साहित्य जगत</Link></li>
                                              <li><Link href="/news/proventhings">जाँची परखी बातें</Link></li>
                                              <li><Link href="/news/technologyarticles">टेक्नॉलॉजी</Link></li>

                                          </ul>
                                      </div>
                                      <div className="col-4 side-nav-list p-3">
                                          <ul className="list-unstyled" onClick={closeMobileMenu}>
                                              <li><Link href="/news/beauty">ब्यूटी/फैशन</Link></li>
                                              <li><Link href="/news/womenarticles">घरेलू नुस्खे</Link></li>
                                              <li><Link href="/news/column">स्तंभ</Link></li>
                                              <li><Link href="/news/touristplaces">पर्यटन स्थल</Link></li>
                                              <li><Link href="/news/harticle">फिटनेस मंत्रा</Link></li>
                                              <li><Link href="/news/bollywood">बॉलीवुड</Link></li>
                                              <li><Link href="/news/hollywood">हॉलीवुड</Link></li>
                                              <li><Link href="/news/filmreview">फिल्म समीक्षा</Link></li>
                                              <li><Link href="/news/politics-articles">विश्लेषण</Link></li>
                                              <li><Link href="/news/currentaffairs">समसामयिक</Link></li>
                                              <li><Link href="/news/mri">एम. आर. आई.</Link></li>

                                          </ul>
                                      </div>
                                      <div className="col-4 side-nav-list p-3">
                                          <ul className="list-unstyled" onClick={closeMobileMenu}>
                                              <li><Link href="/news/reviews-on-tea">चाय पर समीक्षा</Link></li>
                                              <li><Link href="/news/jyotish">ज्योतिष</Link></li>
                                              <li><Link href="/news/articles-on-gods">प्रभु महिमा/धर्मस्थल</Link></li>
                                              <li><Link href="/news/festivals">व्रत त्योहार</Link></li>
                                              <li><Link href="/horoscope">राशिफल</Link></li>
                                              <li><Link href="/coronavirus">कोरोना वायरस अपडेट</Link></li>
                                              <li><Link href="/livefeed/lockdownindia">अनलॉक अपडेट</Link></li>
                                              <li><Link href="/livefeed/ayodhya-verdict">अयोध्या फैसला</Link></li>
                                              <li><Link href="https://www.loksabhachunav.com">लोकसभा चुनाव</Link></li>
                                              <li><Link href="/election/vidhaansabha-maps">विधानसभा चुनाव</Link></li>
                                          </ul>
                                      </div>

                                  </div>
                              </div>
                          </div>
                      </div>                                
                  </div>
              </div>
          </div>
        {/* fgkjkghfghfghfghfgh */}
        </>
    )
}
export default Header;