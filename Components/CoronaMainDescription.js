import React from 'react';
import Link from 'next/link';

function CoronaMainDescription(props){
   const details = props.maindesc;
   return(
      <>
         <div className="row mt-3 mb-3">
            <div className="col-12">
               <b className="font24px position-relative">
                  <img className="sun_imgn2" src="/images/prabhasakshi_sun_logo.webp" alt="sunimage" />
                  <Link className="ml-4" href="/livefeed/lockdownindia">कोरोना अपडेटस के लिए क्लिक करें</Link>
               </b>
            </div>
            <div className="col-12">
               <div className="lines"></div>
            </div>
         </div>
         <div className="row mt-2">
            <div className="col-12 card gedf-card news-274982">
               <div className="card-body p-0">
                  <div className="wrap">
                     <div className="image_effect">
                        <Link href={details.news_full_url}>
                           <div className="lazyload-wrapper ">
                              <img src={details.news_image_1} title={details.news_headline} alt={details.news_headline} className="img_effect1 featured_img" /></div>
                        </Link>
                     </div>
                     <div className="category_name">
                        <Link href={details.category_url}>{details.subcategory_name}</Link>
                     </div>
                  </div>
                  <ul className="list-group list-group-flush">
                     <li className="list-group-item p-2">
                        <h1 className="home-main-heading m-1">
                           <Link href={details.news_full_url}>{details.news_headline}</Link>
                        </h1>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   )
}
export default CoronaMainDescription;