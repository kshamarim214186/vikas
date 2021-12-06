import Link from 'next/link';
import MainItem from './MainItem';
import ListItemWithInLineLink from './ListItemWithInLineLink';
import MainVideo from './MainVideo';
import VideoListLink from './VideoListLink';
import MainNational from './MainNational';
import NationalListingLink from './NationalListingLink';
import MainPhotoGallery from './MainPhotoGallery';
import PhotoGalleryListingLink from './PhotoGalleryListingLink';
import MainInterNational from './MainInterNational';
import InterNationalListingLink from './InterNationalListingLink';
import MainUdyog from './MainUdyog';
import UdyogListingLink from './UdyogListingLink';
import MainCricket from './MainCricket';
import CricketListingLink from './CricketListingLink';
import MainBollywood from './MainBollywood';
import BollywoodListingLink from './BollywoodListingLink';
import MainVrat from './MainVrat';
import VratListingLink from './VratListingLink';
import MainSakhsiyat from './MainSakhsiyat';
import SakhsiyatListingLink from './SakhsiyatListingLink';
import MainBeauty from './MainBeauty';
import BeautyListingLink from './BeautyListingLink';
import MainTrading from './MainTrading';
import TradingListingLink from './TradingListingLink';

function TopCentre(props){
   const data = props.item
   const liveVideo=props.liveVideo;
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

   return (
        
      <>
         <div className="col-md-6 bg-white mt-3">
         <div className="container-fluid p-2">
            <div className="row mtop-desktop d-block d-sm-none">
               <div className="col-12 gedf-main text-center p-0">
                  <div className="gedf-card text-center ad-300-250">
                     <div className="ad-300-250">
                        <div className="adunitContainer">
                           <div className="adBox" id="adSlot-1" data-google-query-id="CKfMtvLGkPQCFdjbcwEdejED2g">
                              <div id="google_ads_iframe_21715648431/prabhasakshi_react_website/prabhasakshi_react_website_header_300_250_0__container__" ></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* Start One Section */}
            <div className="row mb-2">
               <div className="col-12">
                  <div className="row mt-3 mb-3">
                     <div className="col-12">
                        <b className="font24px position-relative">
                           <img className="sun_imgn2" src="/images/prabhasakshi_sun_logo.webp" alt="sunimage" />
                              <Link className="ml-4" href="/">टॉप स्टोरी</Link>
                        </b>
                     </div>
                     <div className="col-12">
                        <div className="lines"></div>
                     </div>
                  </div>
               </div>

               <div className="col-12">

                  <div className="row mt-2">
                     <div className="col-12 card gedf-card news-274169">
                        <div className="card-body p-0">
                           {
                              data.map((obj, idx) => {
                                 if (idx === 0) {
                                    return (
                                         <MainItem item={obj} key={idx} />
                                    )
                                 }
                              })
                           }
                        </div>
                     </div>
                  </div>

                  <div className="row">
                     <div className="col-12 gedf-main news-274168">
                        <div className="card gedf-card">
                           
                           {data.map((obj, idx) => {
                              if (idx != 0) {
                                 return (
                                    <ListItemWithInLineLink item={obj}  key={idx} /> 
                                 ) 
                              }
                           })}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* End One Section */}

            <div className="row mtop-desktop ">
               <div className="col-12 gedf-main text-center p-0">
                  <div className="gedf-card text-center ad-300-250">
                     <div className="ad-300-250">
                        <div className="adunitContainer">
                           <div className="adBox" id="adSlot-2" data-google-query-id="CKjMtvLGkPQCFdjbcwEdejED2g">
                              <div id="google_ads_iframe_21715648431/prabhasakshi_react_website/prabhasakshi_react_website_footer_300_250_0__container__"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="row mb-2">
               <div className="col-12">

                 { /*<div className="row">
                     <div className="col-12 gedf-main p-2">
                        <div className="card gedf-card bg-light">
                           <h5 className="card-header info-color white-text text-center py-4 pscolor"><strong>सब्सक्राइब न्यूज़लेटर</strong></h5>
                           <div className="card-body p-4">
                              <div className="border_b text-muted">भागती-दौड़ती जिंदगी में दिनभर की सभी बड़ी खबरों से अपडेट रहने का उपाय है सबसे Better, सब्सक्राइब करें प्रभासाक्षी का Newsletter</div>
                              <div className="text-muted">
                                 <div className="mb-3 mt-4 input-group">
                                    <div className="input-group-prepend">
                                       <span className="input-group-text">
                                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" className="svg-inline--fa fa-user fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                             <path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                                          </svg>
                                       </span>
                                    </div>
                                    <input placeholder="नाम" aria-label="नाम" aria-describedby="txtname" id="txtname" className="form-control" value="kshama" />
                                 </div>
                                 <div className="mb-3 mt-4 input-group">
                                    <div className="input-group-prepend">
                                       <span className="input-group-text">
                                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                             <path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                                          </svg>
                                       </span>
                                    </div>
                                    <input placeholder="ईमेल" aria-label="ईमेल" aria-describedby="txtemail" id="txtemail" className="form-control" value="kshamarim@gmail.com" />
                                 </div>
                                 <div className="mt-4 form-check"><input type="checkbox" id="chkaccept" className="form-check-input" /><label title="" htmlFor="chkaccept" className="form-check-label">&nbsp;मैं ई-मेल के माध्यम से प्रभासक्षी से समाचार पत्र और विपणन संचार प्राप्त करने के लिए सहमत हूं।</label></div>
                                 <button id="btnsubmit" type="button" className="mt-4 btn-ps btn btn-primary btn-block btn-lg">सब्सक्राइब</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>*/ }


                  {/*Start Video Gallery*/}
                  <div className="row mb-2">
                     <div className="col-12">
                        <div className="row mt-3 mb-3">
                           <div className="col-12">
                              <b className="font24px position-relative">
                                 <img className="sun_imgn2" src="/images/prabhasakshi_sun_logo.webp" alt="sunimage" />
                                    <Link className="ml-4" href="/videos">वीडियो गैलरी</Link>
                              </b>
                           </div>
                           <div className="col-12">
                              <div className="lines"></div>
                           </div>
                        </div>
                     </div>

                     <div className="col-12 mt-2">
                        <div className="wrap">
                           {
                              videoGallery.map((obj, idx) => {
                                 if (idx === 0) {
                                    return (
                                         <MainVideo item={obj} key={idx} />
                                    )
                                 }
                              })
                           }
                        </div>
                     </div>

                     
                     {videoGallery.map((vgobj, vgidx) => {
                        if (vgidx != 0) {
                           return (
                              <VideoListLink vgitem={vgobj} key={vgidx} /> 
                           ) 
                        }
                     })}
                  </div>
                  {/*End Video Gallery*/}



                  <div className="row mb-2 mt-5">
                     <div className="col-12">
                        <div className="row mt-3 mb-3">
                           <div className="col-12">
                              <b className="font24px position-relative">
                                 <img className="sun_imgn2" src="/images/prabhasakshi_sun_logo.webp" alt="sunimage" />
                                 <Link className="ml-4" href={national[0].category_url}>{national[0].category_name}</Link>
                              </b>
                           </div>
                           <div className="col-12">
                              <div className="lines"></div>
                           </div>
                        </div>

                        <div className="row mt-2">
                           <div className="col-12 card gedf-card news-274169">
                              <div className="card-body p-0">
                                 {
                                    national.map((snobj, snidx) => {
                                       if (snidx === 0) {
                                          return (
                                             <MainNational snitem={snobj} key={snidx} />
                                          )
                                       }
                                    })
                                 }
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-12 gedf-main news-274168">
                           <div className="card gedf-card">
                              {
                                 national.map((mnobj, mnidx) => {
                                    if (mnidx != 0) {
                                       return (
                                          <NationalListingLink snitem={mnobj} key={mnidx} />
                                       )
                                    }
                                 })
                              }
                           </div>
                        </div>
                     </div>
                  </div>




                  <div className="row mb-2">
                     <div className="col-12">
                        <div className="row mt-3 mb-3">
                           <div className="col-12">
                              <b className="font24px position-relative">
                                 <img className="sun_imgn2" src="/images/prabhasakshi_sun_logo.webp" alt="sunimage" />
                                 <Link className="ml-4" href="/photos/photogallery">फोटो गैलरी</Link>
                              </b>
                           </div>
                           <div className="col-12">
                              <div className="lines"></div>
                           </div>
                        </div>
                     </div>
                     <div className="col-12 card gedf-card mt-2">
                        <div className="card-body p-0">
                           {
                              photogallery.map((singlephotogobj, singlephotogidx) => {
                                 if (singlephotogidx === 0) {
                                    return (
                                       <MainPhotoGallery singlephotogitem={singlephotogobj} key={singlephotogidx} />
                                    )
                                 }
                              })
                           }
                        </div>
                     </div>

                     {photogallery.map((multiplepgobj, multiplepg) => {
                        if (multiplepg != 0) {
                           return (
                              <PhotoGalleryListingLink multiplepgitem={multiplepgobj} key={multiplepg} /> 
                           ) 
                        }
                     })}
                     
                  </div>


                  <div className="row mb-2 mt-5">
                     <div className="col-12">
                        <div className="row mt-3 mb-3">
                           <div className="col-12">
                              <b className="font24px position-relative">
                                 <img className="sun_imgn2" src="/images/prabhasakshi_sun_logo.webp" alt="sunimage" />
                                 <Link className="ml-4" href={international[0].category_url}>{international[0].category_name}</Link>
                              </b>
                           </div>
                           <div className="col-12">
                              <div className="lines"></div>
                           </div>
                        </div>
                        <div className="row mt-2">
                           <div className="col-12 card gedf-card news-274142">
                              <div className="card-body p-0">                                 
                                 {
                                    international.map((maininternational, maininternationalid) => {
                                       if (maininternationalid === 0) {
                                          return (
                                             <MainInterNational minternationalitem={maininternational} key={maininternationalid} />
                                          )
                                       }
                                    })
                                 }
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="row">
                        <div className="col-12 gedf-main news-274137">
                           <div className="card gedf-card">                              
                              {
                                 international.map((internationalobj, internationalidx) => {
                                    if (internationalidx != 0) {
                                       return (
                                          <InterNationalListingLink internationalitem={internationalobj} key={internationalidx} />
                                       )
                                    }
                                 })
                              }
                           </div>
                        </div>
                     </div>
                  </div>


                  <div className="row mb-2 mt-5">
                     <div className="col-12">
                        <div className="row mt-3 mb-3">
                           <div className="col-12">
                              <b className="font24px position-relative">
                                 <img className="sun_imgn2" src="/images/prabhasakshi_sun_logo.webp" alt="sunimage" />
                                 <Link className="ml-4" href={udyog[0].category_url}>{udyog[0].subcategory_name}</Link>
                              </b>
                           </div>
                           <div className="col-12">
                              <div className="lines"></div>
                           </div>
                        </div>
                        <div className="row mt-2">
                           <div className="col-12 card gedf-card news-274133">
                              <div className="card-body p-0">
                                 {
                                    udyog.map((mainudyog, mainudyogid) => {
                                       if (mainudyogid === 0) {
                                          return (
                                             <MainUdyog mainudyogitem={mainudyog} key={mainudyogid} />
                                          )
                                       }
                                    })
                                 }
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="row">
                        <div className="col-12 gedf-main news-274121">
                           <div className="card gedf-card">
                              {
                                 udyog.map((alludyogobj, alludyogidx) => {
                                    if (alludyogidx != 0) {
                                       return (
                                          <UdyogListingLink alludyogitem={alludyogobj} key={alludyogidx} />
                                       )
                                    }
                                 })
                              }
                           </div>
                        </div>
                     </div>

                  </div>

                  <div className="row mb-2 mt-5">
                     <div className="col-12">
                        <div className="row mt-3 mb-3">
                           <div className="col-12">
                              <b className="font24px position-relative">
                                 <img className="sun_imgn2" src="/images/prabhasakshi_sun_logo.webp" alt="sunimage" />
                                 <Link className="ml-4" href={cricket[0].category_url}>{cricket[0].category_name}</Link>
                              </b>
                           </div>
                           <div className="col-12">
                              <div className="lines"></div>
                           </div>
                        </div>
                        <div className="row mt-2">
                           <div className="col-12 card gedf-card news-274139">
                              <div className="card-body p-0">
                                 {
                                    cricket.map((maincricket, maincricketid) => {
                                       if (maincricketid === 0) {
                                          return (
                                             <MainCricket maincricketitem = {maincricket} key={maincricketid} />
                                          )
                                       }
                                    })
                                 }
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-12 gedf-main news-274136">
                           <div className="card gedf-card">
                              {
                                 cricket.map((allcricketobj, allcricketidx) => {
                                    if (allcricketidx != 0) {
                                       return (
                                          <CricketListingLink allcricketitem={allcricketobj} key={allcricketidx} />
                                       )
                                    }
                                 })
                              }
                           </div>
                        </div>
                     </div>

                  </div>

                  <div className="row mb-2 mt-5">
                     <div className="col-12">
                        <div className="row mt-3 mb-3">
                           <div className="col-12">
                              <b className="font24px position-relative">
                                 <img className="sun_imgn2" src="/images/prabhasakshi_sun_logo.webp" alt="sunimage" />
                                 <Link className="ml-4" href={bollywood[0].category_url}>{bollywood[0].subcategory_name}</Link>
                              </b>
                           </div>
                           <div className="col-12">
                              <div className="lines"></div>
                           </div>
                        </div>
                        <div className="row mt-2">
                           <div className="col-12 card gedf-card news-274151">
                              <div className="card-body p-0">
                                 {
                                    bollywood.map((mainbollywood, mainbollywoodid) => {
                                       if (mainbollywoodid === 0) {
                                          return (
                                             <MainBollywood mainbollywooditem = {mainbollywood} key={mainbollywoodid} />
                                          )
                                       }
                                    })
                                 }
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-12 gedf-main news-274127">
                           <div className="card gedf-card">
                              {
                                 bollywood.map((allbollywoodobj, allbollywoodidx) => {
                                    if (allbollywoodidx != 0) {
                                       return (
                                          <BollywoodListingLink allbollywooditem={allbollywoodobj} key={allbollywoodidx} />
                                       )
                                    }
                                 })
                              }
                           </div>
                        </div>
                     </div>
                     
                  </div>

                  <div className="row mb-2 mt-5">
                     <div className="col-12">
                        <div className="row mt-3 mb-3">
                           <div className="col-12">
                              <b className="font24px position-relative">
                                 <img className="sun_imgn2" src="/images/prabhasakshi_sun_logo.webp" alt="sunimage" />
                                 <Link className="ml-4" href={vrat[0].category_url}>{vrat[0].subcategory_name}</Link>
                              </b>
                           </div>
                           <div className="col-12">
                              <div className="lines"></div>
                           </div>
                        </div>
                        <div className="row mt-2">
                           <div className="col-12 card gedf-card news-274030">
                              <div className="card-body p-0">
                                 {
                                    vrat.map((mainvrat, mainvratid) => {
                                       if (mainvratid === 0) {
                                          return (
                                             <MainVrat mainvratitem = {mainvrat} key={mainvratid} />
                                          )
                                       }
                                    })
                                 }
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-12 gedf-main news-273982">
                           <div className="card gedf-card">
                              {
                                 vrat.map((allvratobj, allvratidx) => {
                                    if (allvratidx != 0) {
                                       return (
                                          <VratListingLink allvratitem={allvratobj} key={allvratidx} />
                                       )
                                    }
                                 })
                              }
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="row mb-2 mt-5">
                     <div className="col-12">
                        <div className="row mt-3 mb-3">
                           <div className="col-12">
                              <b className="font24px position-relative">
                                 <img className="sun_imgn2" src="/images/prabhasakshi_sun_logo.webp" alt="sunimage" />
                                 <Link className="ml-4" href={sakhsiyat[0].category_url}>{sakhsiyat[0].category_name}</Link>
                              </b>
                           </div>
                           <div className="col-12">
                              <div className="lines"></div>
                           </div>
                        </div>
                        <div className="row mt-2">
                           <div className="col-12 card gedf-card news-274093">
                              <div className="card-body p-0">
                                 {
                                    sakhsiyat.map((mainsakhsiyat, mainsakhsiyatid) => {
                                       if (mainsakhsiyatid === 0) {
                                          return (
                                             <MainSakhsiyat mainsakhsiyatitem = {mainsakhsiyat} key={mainsakhsiyatid} />
                                          )
                                       }
                                    })
                                 }
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-12 gedf-main news-274036">
                           <div className="card gedf-card">
                              {
                                 sakhsiyat.map((allsakhsiyatobj, allsakhsiyatidx) => {
                                    if (allsakhsiyatidx != 0) {
                                       return (
                                          <SakhsiyatListingLink allsakhsiyatitem={allsakhsiyatobj} key={allsakhsiyatidx} />
                                       )
                                    }
                                 })
                              }
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="row mb-2 mt-5">
                     <div className="col-12">
                        <div className="row mt-3 mb-3">
                           <div className="col-12">
                              <b className="font24px position-relative">
                                 <img className="sun_imgn2" src="/images/prabhasakshi_sun_logo.webp" alt="sunimage" />
                                 { /*<Link className="ml-4" href="/news/lifestyle">ब्यूटी/फैशन</Link>*/ }
                                 <Link className="ml-4" href={beauty[0].category_url}>{beauty[0].category_name}</Link>
                              </b>
                           </div>
                           <div className="col-12">
                              <div className="lines"></div>
                           </div>
                        </div>
                        <div className="row mt-2">
                           <div className="col-12 card gedf-card news-274018">
                              <div className="card-body p-0">
                                 {
                                    beauty.map((mainbeauty, mainbeautyid) => {
                                       if (mainbeautyid === 0) {
                                          return (
                                             <MainBeauty mainbeautyitem = {mainbeauty} key={mainbeautyid} />
                                          )
                                       }
                                    })
                                 }
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-12 gedf-main news-273909">
                           <div className="card gedf-card">
                              {
                                 beauty.map((allbeautyobj, allbeautyidx) => {
                                    if (allbeautyidx != 0) {
                                       return (
                                          <BeautyListingLink allbeautytitem={allbeautyobj} key={allbeautyidx} />
                                       )
                                    }
                                 })
                              }
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="row mb-2 mt-5">
                     <div className="col-12">
                        <div className="row mt-3 mb-3">
                           <div className="col-12">
                              <b className="font24px position-relative">
                                 <img className="sun_imgn2" src="/images/prabhasakshi_sun_logo.webp" alt="sunimage" />
                                 <Link className="ml-4" href={trading[0].category_url}>{trading[0].category_name}</Link>
                              </b>
                           </div>
                           <div className="col-12">
                              <div className="lines"></div>
                           </div>
                        </div>
                        <div className="row mt-2">
                           <div className="col-12 card gedf-card news-274162">
                              <div className="card-body p-0">
                                 {
                                    trading.map((maintrading, maintradingid) => {
                                       if (maintradingid === 0) {
                                          return (
                                             <MainTrading tradingitem = {maintrading} key={maintradingid} />
                                          )
                                       }
                                    })
                                 }
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-12 gedf-main news-274138">
                           <div className="card gedf-card">
                              {
                                 trading.map((alltradingobj, alltradingidx) => {
                                    if (alltradingidx != 0) {
                                       return (
                                          <TradingListingLink alltradingitem={alltradingobj} key={alltradingidx} />
                                       )
                                    }
                                 })
                              }
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </>        
    );
}

export default TopCentre;
