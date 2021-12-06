import Head from 'next/head'
import Image from 'next/image'
import HeaderOld from '../Components/HeaderOld';

import CoronaMainDescription from '../Components/CoronaMainDescription';
import NewsRealtedDescription from '../Components/NewsRealtedDescription';

import Link from 'next/link';
import Left from "../Components/Left";
import Right from "../Components/Right";
import { ApiUrl } from '../next.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeadset, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ReactHtmlParser from 'react-html-parser';
import { SiteUrl } from '../next.config';

export default function Home({ gethometopsection, getrighdata }) {
  
  const topSection = gethometopsection.Table;
  const getcenterdata = gethometopsection.Table1;
  const rightaudio = getrighdata.Table2;
  const tendring = getrighdata.Table;
  const canurl = SiteUrl+'/'+topSection[0].page_url;
  const maindesc = getcenterdata[0];

  return (
    <>
         <Head>
           <title>{topSection[0].meta_title}</title>
           <meta name="keywords" content={topSection[0].meta_keywords} />
           <meta name="description" content={topSection[0].meta_description} />
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
                                    <li className="breadcrumb-item active" aria-current="page">कोरोना वायरस</li>
                                 </ol>
                              </nav>
                           </div>
                        </div>

                        <div className="row mtop-desktop d-block d-sm-none">
                           <div className="col-12 gedf-main text-center p-0">
                              <div className="gedf-card text-center ad-300-250">
                                 <div className="ad-300-250">
                                    <div className="adunitContainer">
                                       <div className="adBox" id="adSlot-5"></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="row mt-4 mb-2">
                           <div className="col-12 p-1">
                                <div className="info-box info-box-noborder">
                                    <span className="info-box-icon m-3">
                                        <FontAwesomeIcon icon={faHeadset} className="fa-2x" />
                                    </span>
                                    <div class="info-box-content">
                                        <span class="info-box-text pstextcolor">Helpline Number</span>
                                        <span className="info-box-text info-box-text-small pstextcolor">for corona-virus</span>
                                        <span class="info-box-number text-center">+91-11-23978046</span>
                                    </div>
                                </div>
                                <div className="info-box info-box-noborder info-box-tollfree">
                                    <span>Toll Free No: <span>1075</span></span>
                                </div>
                                <div class="info-box">
                                    <span class="info-box-icon m-3">
                                        <FontAwesomeIcon icon={faEnvelope} className="fa-2x" />
                                    </span>
                                    <div class="info-box-content">
                                        <span class="info-box-text pstextcolor">Email ID</span>
                                        <span className="info-box-text info-box-text-small pstextcolor">for corona-virus</span>
                                        <span class="info-box-number text-center">ncov2019@gov.in</span>
                                    </div>
                                </div>
                           </div>
                        </div>

                        <div className="row mb-2 mt-2">
                           <div className="col-12">
                              <CoronaMainDescription maindesc={maindesc} />
                           </div>
                           {
                              getcenterdata.map((relatednewsobj, relatednewidx) => {
                                 if (relatednewidx != 0) {
                                    return (
                                       <NewsRealtedDescription  relatednews={relatednewsobj} key={relatednewidx} />
                                    )
                                 }
                              })
                           }     
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
export async function getStaticProps() {
  const res = await fetch(ApiUrl+"getcoronavirusdata/")
  const gethometopsection = await res.json()

  const rightsidedata = await fetch(ApiUrl+"getrightsidedata/")
  const getrighdata = await rightsidedata.json()
  
  return {
    props: {
      gethometopsection,
      getrighdata,
    },
  }
}
