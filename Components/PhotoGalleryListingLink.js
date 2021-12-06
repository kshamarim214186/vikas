import React from 'react';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

function PhotoGalleryListingLink(props){
	const obj = props.multiplepgitem;

	return(
		<>
			<div className="col-6 card gedf-card">
            <div className="card-body p-0">
               <div className="wrap">
                  <div className="image_effect">
                   	<Link href={obj.gallery_url}>
                   		<img className="d-block w-100 img_effect1" src={obj.gallery_detail_image_2} alt={obj.gallery_detail_image_alt} />
                   	</Link>
                  </div>
                  <div className="gallery-count">{obj.gallery_photo_count}</div>
               </div>
               <ul className="list-group list-group-flush">
                  <li className="list-group-item p-2">
                     <h3 className="home-centre-heading m-1">
                     	<Link href={obj.gallery_url}>{obj.gallery_detail_image_title}</Link></h3>
                  </li>
               </ul>
            </div>
         </div>
		</>
	)
}
export default PhotoGalleryListingLink;