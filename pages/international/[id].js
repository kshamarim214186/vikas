import Head from 'next/head'
import Image from 'next/image'
import HeaderOld from '../../Components/HeaderOld';
import Link from 'next/link';
import Left from "../../Components/Left";
import Right from "../../Components/Right";
import { ApiUrl } from '../../next.config';
import { SiteUrl } from '../../next.config';
import MainDescription from '../../Components/MainDescription';
import KhabarBaki from '../../Components/KhabarBaki';
import RelatedKhabar from '../../Components/RelatedKhabar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


export default function Home({ getrighdata, resultdata }) {

  const rightaudio = getrighdata.Table2;
  const tendring = getrighdata.Table;
  const headercontent = resultdata.Table;
  const nextdiv = resultdata.Table1;
  const maindesc = nextdiv[0];

  return (
    <>
      	<Head>
	        <title>{maindesc.news_meta_title}</title>
	        <meta name="keywords" content={maindesc.news_meta_keywords} />
	        <meta name="description" content={maindesc.news_meta_description} />
	        <link rel="icon" href="/favicon.ico" />
          	<link rel="canonical" href={SiteUrl} />
      	</Head>
      	
        <div className="d-none d-md-block">
          <div className="row mtop-desktop pl-5 pr-5">
            <div className="col-12 gedf-main text-center p-0">  
              <div className="gedf-card text-center ad-728-90">
                <div className="ad-728-90"><div className="adunitContainer">
                  <div className="adBox" id="adSlot-0" data-google-query-id="CIe92N_O_PMCFZIItwAdmZoKEQ">
                    <div id="google_ads_iframe_21715648431/prabhasakshi_react_website/prabhasakshi_react_website_728_90_0__container__">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
        </div>
        
      	<HeaderOld />
        
        <div className="container p-0">
            <div className="row">
                <Left />
                
                <div className="col-md-6 bg-white mt-3">
                  <div className="container-fluid p-3">

                      <div className="row">
                         <div className="col-12">
                            <nav aria-label="breadcrumb">
                               <ol className="breadcrumb">
                                  <li className="breadcrumb-item">
                                    <FontAwesomeIcon icon={faHome} />
                                  </li>
                                  <li className="breadcrumb-item active" aria-current="page">{maindesc.subcategory_name}</li>
                               </ol>
                            </nav>
                         </div>
                      </div>


                      <div className="row mtop-desktop d-block d-sm-none">
                         <div className="col-12 gedf-main text-center p-0">
                            <div className="gedf-card text-center ad-300-250">
                               <div className="ad-300-250">
                                  <div className="adunitContainer">
                                     <div className="adBox" id="adSlot-1" data-google-query-id="CInR26ibmPQCFRqCSwUdcmAOVA">
                                        <div id="google_ads_iframe_21715648431/prabhasakshi_react_website/prabhasakshi_react_website_header_300_250_0__container__"></div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>


                      <div className="row mt-2">
                        <div className="col-12 gedf-main news-274478">
                          <MainDescription maindesc={maindesc} />
                        </div>
                      </div>


                      <div className="col-12">
                      	<div className="row mt-3 mb-3">
					           <div className="col-12">
					              <b className="font24px position-relative">
					                <img className="sun_imgn2" src="/images/prabhasakshi_sun_logo.webp" alt="sunimage" />
					                <Link className="ml-4" href={maindesc.news_full_url}>खबरें और भी हैं
					                </Link>
					              </b>
					            </div>
					           <div className="col-12">
					              <div className="lines"></div>
					           </div>
					        	</div>
					        	<div className="row">
					        		<div className="col-12 gedf-main news-274475">
					        			<div className="card gedf-card">
							        		{
		                              nextdiv.map((obj, idx) => {
		                                 if (idx != 0 && obj.subcategory_english_name == maindesc.subcategory_english_name) {
		                                    return (
		                                       <KhabarBaki bakiitem={obj} key={idx} />
		                                    )
		                                 }
		                              })
		                           }
                        		</div>
                        	</div>
                        </div>
                      </div>


                     <div className="col-12 mt-3">
                      	<div className="row mtop-desktop ">
					            <div className="col-12 gedf-main text-center p-0">
					              <div className="gedf-card text-center ad-300-250">
					                 <div className="ad-300-250">
					                    <div className="adunitContainer">
					                       <div className="adBox" id="adSlot-3" data-google-query-id="CIvR26ibmPQCFRqCSwUdcmAOVA">
					                          <div id="google_ads_iframe_21715648431/prabhasakshi_react_website/prabhasakshi_react_website_footer_300_250_0__container__" ></div>
					                       </div>
					                    </div>
					                 </div>
					              </div>
					            </div>
					         </div>

					         <div className="row mt-3 mb-3">
						         <div className="col-12">
						            <b className="font24px position-relative">
						              <img className="sun_imgn2" src="/images/prabhasakshi_sun_logo.webp" alt="sunimage" />
						              <Link className="ml-4" href={maindesc.news_full_url}>{nextdiv[4].subcategory_name}</Link>
						            </b>
						         </div>
						         <div className="col-12">
						            <div className="lines"></div>
						         </div>
						      </div>

						      <div className="row">
           						<div className="col-12 gedf-main news-274436">
              						<div className="card gedf-card">
              							{
		                              nextdiv.map((objs, idxs) => {
		                                 if (idxs != 0 && objs.subcategory_english_name != maindesc.subcategory_english_name) {
		                                    return (
		                                       <RelatedKhabar relateditem={objs} key={idxs} />
		                                    )
		                                 }
		                              })
		                           }
                          		</div>
					           	</div>
					        </div>
                     </div>


                    </div>
                  </div>

                <Right tendring={tendring} rightaudio={rightaudio} />
              
            </div>
        </div>
    </>
  )
}

// This function gets called at build time
export async function getServerSideProps(context) {

  const rightsidedata = await fetch(ApiUrl+"getrightsidedata/")
  const getrighdata = await rightsidedata.json()

  const newsurl = context.params.id;

  const formData = new URLSearchParams();
  formData.append('category', 'international');
  formData.append('news_url', newsurl);
  formData.append('news_only', '0');
  formData.append('application_id', '1');
  formData.append('client_ip', '192.168.1.1');
  const finalresult = await fetch(ApiUrl+'getarticle', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData,
    });
 
  const resultdata = await finalresult.json();
  
  return {
    props: {
      getrighdata,
      resultdata,
    },
  }
}
