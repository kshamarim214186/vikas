import React from 'react';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

function UdyogListingLink(props){
	const obj = props.alludyogitem;

	const facebookurl = 'http://www.facebook.com/sharer.php?u=https://www.prabhasakshi.com'+obj.news_full_url;
	const twitterurl = 'http://twitter.com/share?url=https://www.prabhasakshi.com'+obj.news_full_url;
	const whatsappurl = 'https://api.whatsapp.com/send?text=https://www.prabhasakshi.com'+obj.news_full_url;
	const telegramurl = 'https://t.me/share/url?url=https://www.prabhasakshi.com'+obj.news_full_url;

	return(
		<>
			<div className="card-body p-1">
             	<div className="row d-flex justify-content-between align-items-center">
	                <div className="col-5">
	                   <div className="image_effect">
	                      	<Link href={obj.news_full_url}>
	                         	<div className="lazyload-wrapper ">
	                         		<img src={obj.news_image_1} title={obj.news_headline} alt={obj.news_headline} className="img_effect1 featured_img" />
	                         	</div>
	                      	</Link>
	                   </div>
	                </div>
	                <div className="col-7 pl-2">
	                   	<h2 className="home-centre-heading m-1">
	                   		<Link href={obj.news_full_url}>{obj.news_headline}</Link>
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
		</>
	)
}
export default UdyogListingLink;