import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Tendring from './Tendring';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import SwiperStambh from './SwiperStambh';

const Right = (props) => {
   const tendring = props.tendring;
   const rightaudio = props.rightaudio;

   const AudioUrl = 'https://cms2.prabhasakshi.com/gall_content/2021/11/'+rightaudio[0].audio_file;
   return (
      <>
         <div className="d-none d-md-block col-md-4 mt-3">
         <div className="row right-sticky pl-2">
            <div className="col-12 pt-2">
               <div className="row mt-3 mb-3">
                  <div className="col-12"><b className="font24px position-relative"><img className="sun_imgn2" src="/images/prabhasakshi_sun_logo.webp" alt="sunimage" /><a className="ml-4" href="/">ट्रेंडिंग</a></b></div>
                  <div className="col-12">
                     <div className="lines"></div>
                  </div>
               </div>
            </div>
            <div className="col-12">
               <div className="row mb-2">
                  <div className="col-12">
                     {tendring.map((singletendring) => (
                        <Tendring key={singletendring.id} singletendring={singletendring} />
                     ))}
                  </div>
               </div>
            </div>
            <div className="col-12">
               <div className="row mtop-desktop undefined">
                  <div className="col-12 gedf-main text-center p-0">
                     <div className="gedf-card text-center ad-300-250">
                        <div className="ad-300-250">
                           <div className="adunitContainer">
                              <div className="adBox" id="adSlot-3" data-google-query-id="CKnMtvLGkPQCFdjbcwEdejED2g">
                                 <div id="google_ads_iframe_21715648431/prabhasakshi_react_website/prabhasakshi_react_website_right_1_300_250_0__container__"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-12">
               <div className="row mtop-desktop mb-3">
                  <div className="col-12 gedf-main text-center p-0">
                     <div className="gedf-card text-center ad-300-250">
                        <div className="ad-300-250">
                           <div className="adunitContainer">
                              <div className="adBox" id="adSlot-4" data-google-query-id="CKrMtvLGkPQCFdjbcwEdejED2g">
                                 <div id="google_ads_iframe_21715648431/prabhasakshi_react_website/prabhasakshi_react_website_right_2_300_250_0__container__"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-12">
               <div className="row mt-3 mb-3">
                  <div className="col-12"><b className="font24px position-relative"><img className="sun_imgn2" src="/images/prabhasakshi_sun_logo.webp" alt="sunimage" /><a className="ml-4" href="/">ऑडियो समाचार</a></b></div>
                  <div className="col-12">
                     <div className="lines"></div>
                  </div>
               </div>
            </div>
            <div className="col-12">
               <audio controls="">
                  <source src={AudioUrl} type="audio/mpeg" />
               </audio>
            </div>
         </div>
      </div>
   </>        
   );
}

export default Right;
