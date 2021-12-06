import Head from 'next/head'
import Image from 'next/image'
import HeaderOld from '../../Components/HeaderOld';
import Link from 'next/link';
import Left from "../../Components/Left";
import Right from "../../Components/Right";
import { ApiUrl } from '../../next.config';
import { SiteUrl } from '../../next.config';
import ElectionComponentA from '../../Components/ElectionComponentA';
import ElectionComponentB from '../../Components/ElectionComponentB';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


export default function Home({ getrighdata, resultdata }) {

   const rightaudio = getrighdata.Table2;
   const tendring = getrighdata.Table;
   const headercontent = resultdata.Table;

   const A = 'dfsfdf';
   const B = 'dfsfdfdsd';

   const canurl = SiteUrl+'/news/'+headercontent[0].page_url;

  return (
    <>
         <Head>
           <title>{headercontent[0].meta_title}</title>
           <meta name="keywords" content={headercontent[0].meta_keywords} />
           <meta name="description" content={headercontent[0].meta_description} />
           <link rel="icon" href="/favicon.ico" />
            <link rel="canonical" href={canurl} />
         </Head>

         <div className="d-none d-md-block">
            <div className="row mtop-desktop pl-5 pr-5">
               <div className="col-12 gedf-main text-center p-0">  
                  <div className="gedf-card text-center ad-728-90">
                     <div className="ad-728-90">
                        <div className="adunitContainer">
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
                                     <li className="breadcrumb-item active" aria-current="page">विधानसभा चुनाव</li>
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
                        {
                           headercontent[0].page_url === 'vidhaansabha-maps' ? <ElectionComponentA pagecontent={headercontent[0].page_content} /> : <ElectionComponentB Table1={resultdata.Table1} Table2={resultdata.Table2} Table3={resultdata.Table3} Table4={resultdata.Table4} />
                        }
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

   const category = context.params.id;

   if(category == 'vidhaansabha-maps'){
     const rightsidedata = await fetch(ApiUrl+"getrightsidedata/")
     const getrighdata = await rightsidedata.json()
   
      const mapresult = await fetch(ApiUrl+"getvidhaansabhaallmaps/")
      const resultdata = await mapresult.json()

      return {
          props: {
            getrighdata,
            resultdata,
          },
        }

   }else{

      const rightsidedata = await fetch(ApiUrl+"getrightsidedata/")
      const getrighdata = await rightsidedata.json()

      const formData = new URLSearchParams();
      formData.append('state', 'west-bengal');
      formData.append('year', '2021');
      formData.append('application_id', '1');
      formData.append('client_ip', '192.168.1.1');
      const finalresult = await fetch(ApiUrl+'getvidhaansabhaelectionresult', {
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
  
  
}
