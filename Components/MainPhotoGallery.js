import React from 'react';
import Link from 'next/link';

function MainPhotoGallery(props){
	const obj = props.singlephotogitem;
	return(
		<>
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
               <h3 className="home-main-heading m-1">
               	<Link href={obj.gallery_url}>{obj.gallery_detail_image_title}</Link>
               </h3>
            </li>
         </ul>
		</>
	)
}
export default MainPhotoGallery;