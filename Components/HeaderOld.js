import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faSearch, faLink, faGlobe } from '@fortawesome/free-solid-svg-icons'

import Headroom from 'react-headroom';
import { InputGroup, FormControl } from 'react-bootstrap';

function HeaderOld() {
    
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


    return (
        <div>
            <div className="d-block d-md-none">
                <nav className="navbar header-top fixed-top navbar-expand-lg p-0">
                    <div className="navbar-toggler p-3" onClick={handleClick}>
                        {click ? (
                            <FontAwesomeIcon icon={faTimes} />
                        ) : (
                            <FontAwesomeIcon icon={faBars} />
                        )}
                    </div>
                    <div className="logo-nav">
                        <div className="logo-container">
                            <a href="/" className="navbar-brand ml-2 p-0 pb-1">
                                <img src="/images/logo.png" className="logo-width" />
                            </a>
                        </div>

                        <div className={click ? "nav-options nav-options-mobile active" : "nav-options nav-options-mobile"}>
                            <div className="row mb-5">
                                <div className="col-12">
                                    <InputGroup className="p-3">
                                        <FormControl
                                            id="txtsearch"
                                            value={state.val}
                                            onChange={e => setSearch({ val: e.target.value })}
                                            onKeyDown={e => SearchOnEnter(e)}
                                            placeholder="Search..."
                                            aria-label="Search..."
                                            aria-describedby="txtsearch"
                                        />
                                        <InputGroup.Append>
                                            <InputGroup.Text onClick={() => Search()}>
                                                <FontAwesomeIcon icon={faSearch} />
                                            </InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </div>
                                <div className="col-12">
                                    <div className="ps-line"></div>
                                </div>
                                <div className="col-12 p-3">
                                    <div className="side-nav-list">
                                        <h4><FontAwesomeIcon icon={faLink} className="fa-lg" />&nbsp;???????????? ?????????</h4>
                                    </div>
                                    <span className="animate-border border-white"></span>
                                </div>
                                <div className="col-6 side-nav-list p-3">
                                    <ul className="list-unstyled" onClick={closeMobileMenu}>
                                        <li><Link href="/news/national">???????????????????????????</Link></li>
                                        <li><Link href="/news/international">??????????????????????????????????????????</Link></li>
                                        <li><Link href="/news/business">?????????????????? ?????????</Link></li>
                                        <li><Link href="/news/expertopinion">???????????????????????? ?????????</Link></li>
                                        <li><Link href="/news/sports">?????????</Link></li>
                                        <li><Link href="/news/cricket">?????????????????????</Link></li>
                                        <li><Link href="/news/personality">?????????????????????</Link></li>
                                        <li><Link href="/news/career">????????? ??????????????????</Link></li>
                                        <li><Link href="/news/literaturearticles">????????????????????? ?????????</Link></li>
                                        <li><Link href="/news/proventhings">??????????????? ???????????? ???????????????</Link></li>
                                        <li><Link href="/news/technologyarticles">??????????????????????????????</Link></li>
                                        <li><Link href="/news/beauty">??????????????????/????????????</Link></li>
                                        <li><Link href="/news/womenarticles">??????????????? ??????????????????</Link></li>
                                        <li><Link href="/news/column">???????????????</Link></li>
                                        <li><Link href="/news/touristplaces">?????????????????? ????????????</Link></li>
                                        <li><Link href="/news/harticle">?????????????????? ??????????????????</Link></li>
                                    </ul>
                                </div>
                                <div className="col-6 side-nav-list p-3">
                                    <ul className="list-unstyled" onClick={closeMobileMenu}>

                                        <li><Link href="/news/bollywood">?????????????????????</Link></li>
                                        <li><Link href="/news/hollywood">?????????????????????</Link></li>
                                        <li><Link href="/news/filmreview">??????????????? ?????????????????????</Link></li>
                                        <li><Link href="/news/politics-articles">????????????????????????</Link></li>
                                        <li><Link href="/news/currentaffairs">????????????????????????</Link></li>
                                        <li><Link href="/news/mri">??????. ??????. ??????.</Link></li>
                                        <li><Link href="/news/reviews-on-tea">????????? ?????? ?????????????????????</Link></li>
                                        <li><Link href="/news/jyotish">?????????????????????</Link></li>
                                        <li><Link href="/news/articles-on-gods">??????????????? ???????????????/????????????????????????</Link></li>
                                        <li><Link href="/news/festivals">???????????? ?????????????????????</Link></li>
                                        <li><Link href="/horoscope">??????????????????</Link></li>
                                        <li><Link href="/coronavirus">?????????????????? ??????????????? ???????????????</Link></li>
                                        <li><Link href="/livefeed/lockdownindia">??????????????? ???????????????</Link></li>
                                        <li><Link href="/livefeed/ayodhya-verdict">????????????????????? ???????????????</Link></li>
                                        <li><Link href="https://www.loksabhachunav.com" target="_blank" rel="nofollow">?????????????????? ???????????????</Link></li>
                                        <li><Link href="/election/vidhaansabha-maps">???????????????????????? ???????????????</Link></li>
                                    </ul>
                                </div>
                                <div className="col-12 mb-2">
                                    <div className="ps-line"></div>
                                </div>
                                <div className="col-12 p-3">
                                    <div className="side-nav-list">
                                        <h4><FontAwesomeIcon icon={faLink} className="fa-lg" />&nbsp;Quick Links</h4>
                                    </div>
                                    <span className="animate-border border-white"></span>
                                </div>
                                <div className="col-6 side-nav-list p-3">
                                    <ul className="list-unstyled" onClick={closeMobileMenu}>
                                        <li><Link href="/news/trending">???????????????????????????</Link></li>
                                        <li><Link href="/photos/photogallery">????????????</Link></li>
                                        <li><Link href="/videos">??????????????????</Link></li>
                                        <li><Link href="/state-hindi-news">????????????????????? ??????</Link></li>
                                        <li><Link href="/gallery/suvichaar">?????????????????????</Link></li>
                                        <li><Link href="/gallery/cartoon">?????????????????????</Link></li>
                                        <li><a rel="sponsored" rel="nofollow" href="https://www.talkcharge.com/" className="pstextcolor" target="_blank">Cashback</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 side-nav-list p-3">
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
                                <div className="col-12 mb-2">
                                    <div className="ps-line"></div>
                                </div>
                                <div className="col-12 p-3">
                                    <div className="side-nav-list">
                                        <h4><FontAwesomeIcon icon={faGlobe} className="fa-lg" />&nbsp;Other Sites</h4>
                                    </div>
                                    <span className="animate-border border-white"></span>
                                </div>
                                <div className="col-12 side-nav-list p-3">
                                    <ul className="list-unstyled" onClick={closeMobileMenu}>

                                        <li><a href="https://www.loksabhachunav.com" target="_blank" rel="nofollow"><div className="h3 font-16px">LOKSABHACHUNAV</div></a></li>

                                    </ul>
                                </div>
                                <div className="col-12 mb-5">
                                    <div className="ps-line"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
                <div className="upper_head text-center">
                    <div className="scroll-navigation-links-block clearfix text-center bg-white">
                        <ul className="scroll-navigation-feeds clearfix bounce-this-left">
                            <li><Link href="/election/vidhaansabha-maps" className="pstextcolor">???????????????????????? ???????????????</Link></li>
                            <li><Link href="/news/cricket" className="pstextcolor">IPL 2021</Link></li>
                            <li><Link href="/news/trending" className="pstextcolor">???????????????????????????</Link></li>
                            <li><Link href="/videos" className="pstextcolor">??????????????????</Link></li>
                            <li><Link href="/state-hindi-news" className="pstextcolor">????????????????????? ??????</Link></li>
                            <li><Link href="/horoscope" className="pstextcolor">??????????????????</Link></li>
                            <li><Link href="/gallery/suvichaar" className="pstextcolor">?????????????????????</Link></li>
                            <li><Link href="/gallery/cartoon" className="pstextcolor">?????????????????????</Link></li>
                        </ul>
                    </div>
                    
                </div>
            </div>

            <div id="nav-header" className={"d-none header-top d-md-block w-100 "}>
                <div className="row container-fluid">
                    <div className="col-12 d-flex justify-content-between">
                        <div id="mySidenav" className="navbar-toggler navbar-toggler-desktop" onClick={handleClick}>
                            {click ? (
                                <FontAwesomeIcon icon={faTimes} className="pstextcolor" />
                            ) : (
                                <FontAwesomeIcon icon={faBars} className="pstextcolor" />
                            )}
                        </div>
                        <div className="logo-container">
                            <a href="/" className="navbar-brand ml-2 p-0 pb-1">
                                <img src="/images/logo.png" />
                            </a>
                        </div>
                        <div className="p-3">
                            <div className="search-box">
                                <input type="text" className="search-txt"
                                    id="txtsearch"
                                    value={state.val}
                                    onChange={e => setSearch({ val: e.target.value })}
                                    onKeyDown={e => SearchOnEnter(e)}
                                    placeholder="????????????..."
                                    aria-label="????????????..."
                                    aria-describedby="txtsearch"
                                />
                                <a className="search-btn" onClick={() => Search()}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </a>
                            </div>
                            {/* <InputGroup className="p-3">
                                <FormControl
                                    id="txtsearch"
                                    value={state.val}                                    
                                    onChange={e => setSearch({ val: e.target.value })}
                                    onKeyDown={e => SearchOnEnter(e)}
                                    placeholder="????????????..."
                                    aria-label="????????????..."
                                    aria-describedby="txtsearch"                                    
                                />                                
                                <InputGroup.Append>
                                    <InputGroup.Text onClick={() => Search()} className="pscolor">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup> */}
                        </div>
                    </div>
                    <div className="logo-nav">
                        <div id="logo-nav" className={click && window.pageYOffset < 50 ? "nav-options active" : (click && window.pageYOffset >= 50 ? "nav-options active nav-options-scroll" : "nav-options")}>
                            <div className="row mb-2">
                                <div className="col-12">
                                    <div className="ps-line"></div>
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
                                                <h4><FontAwesomeIcon icon={faLink} className="fa-lg" />&nbsp;???????????? ?????????</h4>
                                            </div>
                                            <span className="animate-border border-white"></span>
                                        </div>
                                        <div className="col-4">
                                            <div className="row">
                                                <div className="col-5 side-nav-list p-3">
                                                    <ul className="list-unstyled" onClick={closeMobileMenu}>
                                                        <li><Link href="/news/trending">???????????????????????????</Link></li>
                                                        <li><Link href="/photos/photogallery">????????????</Link></li>
                                                        <li><Link href="/videos">??????????????????</Link></li>
                                                        <li><Link href="/state-hindi-news">????????????????????? ??????</Link></li>
                                                        <li><Link href="/gallery/suvichaar">?????????????????????</Link></li>
                                                        <li><Link href="/gallery/cartoon">?????????????????????</Link></li>
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
                                                        <li><Link href="/news/national">???????????????????????????</Link></li>
                                                        <li><Link href="/news/international">??????????????????????????????????????????</Link></li>
                                                        <li><Link href="/news/business">?????????????????? ?????????</Link></li>
                                                        <li><Link href="/news/expertopinion">???????????????????????? ?????????</Link></li>
                                                        <li><Link href="/news/sports">?????????</Link></li>
                                                        <li><Link href="/news/cricket">?????????????????????</Link></li>
                                                        <li><Link href="/news/personality">?????????????????????</Link></li>
                                                        <li><Link href="/news/career">????????? ??????????????????</Link></li>
                                                        <li><Link href="/news/literaturearticles">????????????????????? ?????????</Link></li>
                                                        <li><Link href="/news/proventhings">??????????????? ???????????? ???????????????</Link></li>
                                                        <li><Link href="/news/technologyarticles">??????????????????????????????</Link></li>

                                                    </ul>
                                                </div>
                                                <div className="col-4 side-nav-list p-3">
                                                    <ul className="list-unstyled" onClick={closeMobileMenu}>
                                                        <li><Link href="/news/beauty">??????????????????/????????????</Link></li>
                                                        <li><Link href="/news/womenarticles">??????????????? ??????????????????</Link></li>
                                                        <li><Link href="/news/column">???????????????</Link></li>
                                                        <li><Link href="/news/touristplaces">?????????????????? ????????????</Link></li>
                                                        <li><Link href="/news/harticle">?????????????????? ??????????????????</Link></li>
                                                        <li><Link href="/news/bollywood">?????????????????????</Link></li>
                                                        <li><Link href="/news/hollywood">?????????????????????</Link></li>
                                                        <li><Link href="/news/filmreview">??????????????? ?????????????????????</Link></li>
                                                        <li><Link href="/news/politics-articles">????????????????????????</Link></li>
                                                        <li><Link href="/news/currentaffairs">????????????????????????</Link></li>
                                                        <li><Link href="/news/mri">??????. ??????. ??????.</Link></li>

                                                    </ul>
                                                </div>
                                                <div className="col-4 side-nav-list p-3">
                                                    <ul className="list-unstyled" onClick={closeMobileMenu}>
                                                        <li><Link href="/news/reviews-on-tea">????????? ?????? ?????????????????????</Link></li>
                                                        <li><Link href="/news/jyotish">?????????????????????</Link></li>
                                                        <li><Link href="/news/articles-on-gods">??????????????? ???????????????/????????????????????????</Link></li>
                                                        <li><Link href="/news/festivals">???????????? ?????????????????????</Link></li>
                                                        <li><Link href="/horoscope">??????????????????</Link></li>
                                                        <li><Link href="/coronavirus">?????????????????? ??????????????? ???????????????</Link></li>
                                                        <li><Link href="/livefeed/lockdownindia">??????????????? ???????????????</Link></li>
                                                        <li><Link href="/livefeed/ayodhya-verdict">????????????????????? ???????????????</Link></li>
                                                        <li><Link href="https://www.loksabhachunav.com">?????????????????? ???????????????</Link></li>
                                                        <li><Link href="/election/vidhaansabha-maps">???????????????????????? ???????????????</Link></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

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
                            </div>
                        </div>
                    </div>

                </div>
            </div>
                         { /*<Headroom className="d-none d-md-block">
                <div className="row header-top">
                    <div className="col-12 p-3 bg-white">
                        <div className="logo-container">
                            <a href="/" className="navbar-brand ml-2 p-0 pb-1">
                                <img src="/images/logo.png" className="logo-width-desktop" />
                            </a>
                        </div>
                    </div>

                    <nav className="col-12 upper_head navbar header-top navbar-expand-lg p-0">
                        <div className="navbar-toggler navbar-toggler-desktop" onClick={handleClick}>
                            {click ? (
                                <FontAwesomeIcon icon={faTimes} />
                            ) : (
                                <FontAwesomeIcon icon={faBars} />
                            )}
                        </div>
                        <div>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/news/national">
                                        ???????????????????????????
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/news/international">
                                        ??????????????????????????????????????????
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/news/bazar" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        ?????????????????????
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/news/business">?????????????????? ?????????</a>
                                        <a className="dropdown-item" href="/news/expertopinion">???????????????????????? ?????????</a>
                                        <a className="dropdown-item" href="/budget">????????? 2021</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/news/sports" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        ?????????
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/news/cricket">?????????????????????</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/news/informative-articles" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        ?????????????????????
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/news/personality">?????????????????????</a>
                                        <a className="dropdown-item" href="/news/career">????????? ??????????????????</a>
                                        <a className="dropdown-item" href="/news/literaturearticles">????????????????????? ?????????</a>
                                        <a className="dropdown-item" href="/news/proventhings">??????????????? ???????????? ???????????????</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/news/lifestyle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        ??????????????????????????????
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/news/technologyarticles">??????????????????????????????</a>
                                        <a className="dropdown-item" href="/news/beauty">??????????????????/????????????</a>
                                        <a className="dropdown-item" href="/news/womenarticles">??????????????? ??????????????????</a>
                                        <a className="dropdown-item" href="/news/touristplaces">?????????????????? ????????????</a>
                                        <a className="dropdown-item" href="/news/harticle">?????????????????? ??????????????????</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/news/entertainment" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        ????????????????????? ?????????
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/news/bollywood">?????????????????????</a>
                                        <a className="dropdown-item" href="/news/hollywood">?????????????????????</a>
                                        <a className="dropdown-item" href="/news/filmreview">??????????????? ?????????????????????</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/news/politics" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        ?????????????????????
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/news/politics-articles">????????????????????????</a>
                                        <a className="dropdown-item" href="/news/currentaffairs">????????????????????????</a>
                                        <a className="dropdown-item" href="/news/mri">??????. ??????. ??????.</a>
                                        <a className="dropdown-item" href="/news/reviews-on-tea">????????? ?????? ?????????????????????</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/news/religion" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        ????????????
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/news/jyotish">?????????????????????</a>
                                        <a className="dropdown-item" href="/news/articles-on-gods">??????????????? ???????????????/????????????????????????</a>
                                        <a className="dropdown-item" href="/news/festivals">???????????? ?????????????????????</a>
                                        <a className="dropdown-item" href="/horoscope">??????????????????</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/livefeed/ayodhya-verdict">
                                        ?????????????????????
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        ???????????????
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="https://www.loksabhachunav.com" target="_blank">??????????????????</a>
                                        <a className="dropdown-item" href="/election/vidhaansabha-maps">????????????????????????</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/coronavirus">
                                        ??????????????????
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/news/cricket">
                                        IPL 2021
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="logo-nav">
                            <div className={click ? "nav-options active" : "nav-options"}>
                                <div className="row mb-5">
                                    <div className="col-4">
                                        <InputGroup className="p-3">
                                            <FormControl
                                                id="txtsearch"
                                                value={state.val}
                                                onChange={e => setSearch({ val: e.target.value })}
                                                onKeyDown={e=>SearchOnEnter(e)}
                                                placeholder="Search..."
                                                aria-label="Search..."
                                                aria-describedby="txtsearch"
                                            />
                                            <InputGroup.Append>
                                                <InputGroup.Text onClick={() => Search()}>
                                                    <FontAwesomeIcon icon={faSearch} />
                                                </InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </div>
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
                                    <div className="col-12">
                                        <div className="ps-line"></div>
                                    </div>

                                    <div className="col-12 p-3">
                                        <div className="row">
                                            <div className="col-3 p-3">
                                                <div className="side-nav-list">
                                                    <h4><FontAwesomeIcon icon={faLink} className="fa-lg" />&nbsp;Quick Links</h4>
                                                </div>
                                                <span className="animate-border border-white"></span>
                                            </div>
                                            <div className="col-9 p-3">
                                                <div className="side-nav-list">
                                                    <h4><FontAwesomeIcon icon={faLink} className="fa-lg" />&nbsp;???????????? ?????????</h4>
                                                </div>
                                                <span className="animate-border border-white"></span>
                                            </div>
                                            <div className="col-3">
                                                <div className="row">
                                                    <div className="col-6 side-nav-list p-3">
                                                        <ul className="list-unstyled" onClick={closeMobileMenu}>
                                                            <li><a href="/news/trending">???????????????????????????</a></li>
                                                            <li><a href="/photos/photogallery">????????????</a></li>
                                                            <li><a href="/videos">??????????????????</a></li>
                                                            <li><a href="/state-hindi-news">????????????????????? ??????</a></li>
                                                            <li><a href="/gallery/suvichaar">?????????????????????</a></li>
                                                            <li><a href="/gallery/cartoon">?????????????????????</a></li>
                                                            <li><a rel="noreferrer" href="https://www.talkcharge.com/" className="pstextcolor" target="_blank">Cashback</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-6 side-nav-list p-3">
                                                        <ul className="list-unstyled" onClick={closeMobileMenu}>
                                                            <li><a href="/archive">Archive</a></li>
                                                            <li><a href="/aboutus">About us</a></li>
                                                            <li><a href="/contactus">Contact editor</a></li>
                                                            <li><a href="/contact/advertisewithus">Advertise with us</a></li>
                                                            <li><a href="/privacypolicy">Privacy Policy</a></li>
                                                            <li><a href="/rss">RSS</a></li>
                                                            <li><a href="/team">Our Team</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-9">
                                                <div className="row">
                                                    <div className="col-3 side-nav-list p-3">
                                                        <ul className="list-unstyled" onClick={closeMobileMenu}>
                                                            <li><a href="/news/national">???????????????????????????</a></li>
                                                            <li><a href="/news/international">??????????????????????????????????????????</a></li>
                                                            <li><a href="/news/business">?????????????????? ?????????</a></li>
                                                            <li><a href="/news/expertopinion">???????????????????????? ?????????</a></li>
                                                            <li><a href="/news/sports">?????????</a></li>
                                                            <li><a href="/news/cricket">?????????????????????</a></li>
                                                            <li><a href="/news/personality">?????????????????????</a></li>
                                                            <li><a href="/news/career">????????? ??????????????????</a></li>
                                                            <li><a href="/news/literaturearticles">????????????????????? ?????????</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-3 side-nav-list p-3">
                                                        <ul className="list-unstyled" onClick={closeMobileMenu}>
                                                            <li><a href="/news/proventhings">??????????????? ???????????? ???????????????</a></li>
                                                            <li><a href="/news/technologyarticles">??????????????????????????????</a></li>
                                                            <li><a href="/news/beauty">??????????????????/????????????</a></li>
                                                            <li><a href="/news/womenarticles">??????????????? ??????????????????</a></li>
                                                            <li><a href="/news/column">???????????????</a></li>
                                                            <li><a href="/news/touristplaces">?????????????????? ????????????</a></li>
                                                            <li><a href="/news/harticle">?????????????????? ??????????????????</a></li>
                                                            <li><a href="/news/bollywood">?????????????????????</a></li>
                                                            <li><a href="/news/hollywood">?????????????????????</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-3 side-nav-list p-3">
                                                        <ul className="list-unstyled" onClick={closeMobileMenu}>
                                                            <li><a href="/news/filmreview">??????????????? ?????????????????????</a></li>
                                                            <li><a href="/news/politics-articles">????????????????????????</a></li>
                                                            <li><a href="/news/currentaffairs">????????????????????????</a></li>
                                                            <li><a href="/news/mri">??????. ??????. ??????.</a></li>
                                                            <li><a href="/news/reviews-on-tea">????????? ?????? ?????????????????????</a></li>
                                                            <li><a href="/news/jyotish">?????????????????????</a></li>
                                                            <li><a href="/news/articles-on-gods">??????????????? ???????????????/????????????????????????</a></li>
                                                            <li><a href="/news/festivals">???????????? ?????????????????????</a></li>
                                                            <li><a href="/horoscope">??????????????????</a></li>
                                                            <li><a href="/livefeed/lockdownindia">????????? ????????????</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-3 side-nav-list p-3">
                                                        <ul className="list-unstyled" onClick={closeMobileMenu}>
                                                            <li><a href="https://www.astropanchang.in" target="_blank" rel="nofollow"><div className="h5 m-1">ASTROPANCHANG</div></a></li>
                                                            <li><a href="https://www.healthynuskhe.in" target="_blank" rel="nofollow"><div className="h5 m-1">HEALTHYNUSKHE</div></a></li>
                                                            <li><a href="https://www.loksabhachunav.com" target="_blank" rel="nofollow"><div className="h5 m-1">LOKSABHACHUNAV</div></a></li>
                                                            <li><a href="https://www.careerkeeda.in" target="_blank" rel="nofollow"><div className="h5 m-1">CAREERKEEDA</div></a></li>
                                                            <li><a href="https://www.ekbaatbata.com" target="_blank" rel="nofollow"><div className="h5 m-1">EKBAATBATA</div></a></li>
                                                            <li><a href="https://www.bollywoodhalchal.com" target="_blank" rel="nofollow"><div className="h5 m-1">BOLLYWOODHALCHAL</div></a></li>
                                                            <li><a href="https://www.ghumodunia.com" target="_blank" rel="nofollow"><div className="h5 m-1">GHUMODUNIA</div></a></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 marginbottom">
                                        <div className="ps-line"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </Headroom>*/ }
 
        </div>
    );
}

export default HeaderOld