import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
function Left() {
   	return (
      	<div className="d-none d-md-block col-md-2 mt-3">
         	<div className="row left-sticky">
            <div className="col-12 side-nav-list pt-3">
               <ul className="list-unstyled list-unstyled-left">
                  <li><a href="/">होम</a></li>
                  <li><a href="/news/trending">ट्रेंडिंग</a></li>
                  <li><a href="/state-hindi-news">राज्यों से</a></li>
                  <li><a href="/news/national">राष्ट्रीय</a></li>
                  <li><a href="/news/international">अंतर्राष्ट्रीय</a></li>
                  <li><a href="/news/sports">खेल</a></li>
                  <li><a href="/news/bazar">बिज़नेस</a></li>
                  <li><a href="/news/column">स्तंभ</a></li>
                  <li><a href="/news/bollywood">बॉलीवुड</a></li>
                  <li><a rel="noreferrer" href="https://www.talkcharge.com/" className="pstextcolor" target="_blank">Cashback</a></li>
               </ul>
            </div>
            <div className="col-12 ps-left-app">
               <p>Follow us on</p>
               <ul>
                  <li>
                     <SocialIcon url="https://www.facebook.com/prabhasakshi/" target="_blank" />
                  </li>
                  <li>
                  	<SocialIcon url="https://twitter.com/prabhasakshi/" target="_blank" />
                     
                  </li>
                  <li>
                  	<SocialIcon url="https://www.instagram.com/prabhasakshi/" target="_blank" />
                  </li>
                  <li>
                  	<SocialIcon url="https://www.youtube.com/c/Prabhasakshinews?sub_confirmation=1" target="_blank" />
                  </li>
               </ul>
               <ul>
                  <li>
                  	<SocialIcon url="https://www.linkedin.com/company/prabhasakshi-com/" target="_blank" />
                  </li>
                  <li>
                  	<SocialIcon url="https://t.me/s/prabhasakshinews" network="telegram" target="_blank" />
                  </li>
                  <li>
                  	<SocialIcon url="https://flipboard.com/@Prabhasakshi_IN" target="_blank" />
                  </li>
                  <li>
                  	<SocialIcon url="/rss" network="rss" />
                  </li>
               </ul>
            </div>
            <div className="col-12 ps-left-app">
               <p>Download App from</p>
               <a target="_blank" href="https://play.google.com/store/apps/details?id=com.prabhasakshi.hindinews" rel="noopener noreferrer"><img className="playstore-img" src="/images/playstore.svg" alt="Download android app - Prabhasakshi" /></a>
            </div>
         </div>
      </div>
    );
}

export default Left