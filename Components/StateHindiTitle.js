import React from 'react';
import Link from 'next/link';

function StateHindiTitle(props) { 
   const itemobj = props.itemobj;

   const myArray = itemobj.news_state_name.split("|");
   const url = '/state-news-in-hindi/'+myArray[1];

      return (
         <div className="col-12">
            <div className="row mt-3 mb-3">
               <div className="col-12">
                  <b className="font24px position-relative">
                     <img className="sun_imgn2" src="/images/prabhasakshi_sun_logo.webp" alt="sunimage" />
                     <Link className="ml-4" href={url}>{myArray[0]}</Link>
                  </b>
               </div>
               <div className="col-12">
                  <div className="lines"></div>
               </div>
            </div>
            <div className="row mt-2">
               <div className="col-12 card gedf-card news-272579">
                  <div className="card-body p-0">
                     <div className="wrap">
                        <div className="image_effect">
                           <Link href={itemobj.news_full_url}>
                              <div className="lazyload-wrapper ">
                                 <img src={itemobj.news_image_1} title={itemobj.news_headline} alt={itemobj.news_headline} className="img_effect1 featured_img" />
                              </div>
                           </Link>
                        </div>
                        <div className="category_name"><Link href={itemobj.category_url}>{itemobj.category_name}</Link></div>
                     </div>
                     <ul className="list-group list-group-flush">
                        <li className="list-group-item p-2">
                           <h1 className="home-main-heading m-1">
                              <Link href={itemobj.news_full_url}>{itemobj.news_headline}</Link>
                           </h1>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      )
   }
export default StateHindiTitle;