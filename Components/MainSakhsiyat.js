import React from 'react';
import Link from 'next/link';

function MainSakhsiyat(props){
	const obj = props.mainsakhsiyatitem;
	return(
		<>
			<div className="wrap">
            <div className="image_effect">
               <Link href={obj.news_full_url}>
                  <div className="lazyload-wrapper ">
                     <img src={obj.news_image_1} title={obj.news_headline} alt={obj.news_headline} className="img_effect1 featured_img" /></div>
               </Link>
            </div>
            <div className="category_name"><Link href={obj.category_url}>{obj.subcategory_name}</Link></div>
         </div>
         <ul className="list-group list-group-flush">
            <li className="list-group-item p-2">
               <h1 className="home-main-heading m-1">
                  <Link href={obj.news_full_url}>{obj.news_headline}</Link>
               </h1>
            </li>
         </ul>
		</>
	)
}
export default MainSakhsiyat;