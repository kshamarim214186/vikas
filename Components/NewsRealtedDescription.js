import React from 'react';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
function NewsRealtedDescription(props){
   const details = props.relatednews;
   const facebookurl = 'http://www.facebook.com/sharer.php?u=https://www.prabhasakshi.com'+details.news_full_url;
   const twitterurl = 'http://twitter.com/share?url=https://www.prabhasakshi.com'+details.news_full_url;
   const whatsappurl = 'https://api.whatsapp.com/send?text=https://www.prabhasakshi.com'+details.news_full_url;
   const telegramurl = 'https://t.me/share/url?url=https://www.prabhasakshi.com'+details.news_full_url;
   return(
      <>
      <div className="row">
         <div className="col-12 gedf-main news-274847">
            <div className="card gedf-card">
               <div className="card-body p-1">
                  <div className="row d-flex justify-content-between align-items-center">
                     <div className="col-5">
                        <div className="image_effect">
                           <Link href={details.news_full_url}>
                              <div className="lazyload-wrapper ">
                                 <img src={details.news_image_1} title={details.news_headline} alt={details.news_headline} className="img_effect1 featured_img" />
                              </div>
                           </Link>
                        </div>
                     </div>
                     <div className="col-7 pl-2">
                        <h2 className="home-centre-heading m-1">
                           <Link href={details.news_full_url}>{details.news_headline}</Link>
                        </h2>
                     </div>
                  </div>
               </div>
               <div className="card-footer p-2">
                  <span className="float-left text-muted font-weight-bold"></span>
                  <div className="social-icons-ql float-right">
                     <SocialIcon url={facebookurl} target="_blank" />
                  
                     <SocialIcon url={twitterurl} target="_blank" />

                     <SocialIcon url={whatsappurl} target="_blank" />

                     <SocialIcon url={telegramurl} network="telegram" target="_blank" />
                  </div>
               </div>
            </div>
         </div>
      </div>
      </>
   )
}
export default NewsRealtedDescription;