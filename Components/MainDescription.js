import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from 'react-social-icons';

function MainDescription(props){
   const details = props.maindesc;

   const facebookurl = 'http://www.facebook.com/sharer.php?u=https://www.prabhasakshi.com'+details.news_full_url;
   const twitterurl = 'http://twitter.com/share?url=https://www.prabhasakshi.com'+details.news_full_url;
   const whatsappurl = 'https://api.whatsapp.com/send?text=https://www.prabhasakshi.com'+details.news_full_url;
   const telegramurl = 'https://t.me/share/url?url=https://www.prabhasakshi.com'+details.news_full_url;

   const related = details.news_tags_word;
   var relatedkhabar = new Array();
   relatedkhabar = related.split(", ");
   
   const wriittenurl = '/'+details.category_english_name+'/'+details.newsp_written_by_url;

	return(
		<>
		<div className="card gedf-card">
         <div className="card-body p-1">
            <ul className="list-group list-group-flush">
               <li className="list-group-item p-2">
                  <h1 className="article-main-heading m-1">{details.news_headline}</h1>
               </li>
            </ul>
            <div className="p-2">
               <Link href={wriittenurl} className="pstextcolor">{details.newsp_written_by_name}</Link>
               <span className="text-muted h7 float-right">
                  <FontAwesomeIcon icon={faCalendar} /> {details.news_publish_date_format} {details.news_publish_time_format}
               </span>
            </div>
            <div className="wrap">
               <div className="image_effect">
               <img title={details.news_headline} alt={details.news_headline} src={details.news_image_1} className="img_effect1 featured_img" /></div>
               <div className="category_name">
                  <Link href={details.category_url}>{details.subcategory_name}</Link>
               </div>
            </div>

            <h2 className="article_summary m-2 mt-3">
               <span>{details.news_synopsis}</span>
            </h2>
            <div className="row mtop-desktop ad-300-37">
               <div className="col-12 gedf-main text-center p-0">
                  <div className="gedf-card text-center ad-300-37">
                     <div className="ad-300-37">
                        <div className="adunitContainer">
                           <div className="adBox" id="adSlot-2" data-google-query-id="CIrR26ibmPQCFRqCSwUdcmAOVA">
                              <div id="google_ads_iframe_21715648431/prabhasakshi_react_website/prabhasakshi_react_website_article_728_90_0__container__"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="wrap news-content m-2 mt-3" dangerouslySetInnerHTML={{ __html: details.news_description }} />
         </div>
         <div className="card-footer p-2">
            <div className="social-icons-ql text-center">
               <SocialIcon url={facebookurl} target="_blank" />
                   
               <SocialIcon url={twitterurl} target="_blank" />

               <SocialIcon url={whatsappurl} target="_blank" />

               <SocialIcon url={telegramurl} network="telegram" target="_blank" />
            </div>
         </div>

         <div className="card-footer p-2">
            <div className="row mb-2">
               <div className="col-12">
                  <h5>Related Topics</h5>
               </div>
               <div className="col-12 mt-2">
               
               {relatedkhabar.map((obj,idx) => (

                  <Link href={`/search?q=${obj.split(' ').join('-')}`} key={idx}><a className="badge badge-pill badge-warning">{obj}</a></Link>
               ))}
               </div>
            </div>
         </div>
      </div>
      <div>
         <div id="taboola-below-article-thumbnails" className="trc_related_container trc_spotlight_widget"></div>
      </div>
		</>
	)
}
export default MainDescription;