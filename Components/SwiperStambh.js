import { imagepath } from '../next.config';
import Link from 'next/link';

function SwiperStambh({ singlestambh }){

	const imagesrc = imagepath+singlestambh.newsp_written_by_picture;
	const writtenUrl ='columnist/'+singlestambh.newsp_written_by_url;
	return(
		<>
			
			<div className='stambh1'>
             <div className='row mb-1 border-bottom'>
                <div className='col-4 p-0'>
                   	<div className='image_effect'>
                   		<img className='img_circle img_effect1' title={singlestambh.news_headline} alt={singlestambh.news_headline} src={imagesrc} /></div>
                </div>
                <div className='col-8 pl-0'>
                   <h4 className='home-column-heading text-justify'>
                   	<Link href={singlestambh.news_full_url}>{singlestambh.news_headline}</Link>
                   	<Link className='pstextcolor columnistclick' href={writtenUrl}>{singlestambh.newsp_written_by_name}</Link>
                   	</h4>
                </div>
             </div>
          	</div>
          	
		</>
	)
}
export default SwiperStambh;