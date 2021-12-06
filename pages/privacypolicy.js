import Head from 'next/head'
import Image from 'next/image'
import HeaderOld from '../Components/HeaderOld';
import ContactusForm from '../Components/ContactusForm';
import Link from 'next/link';
import Left from "../Components/Left";
import Right from "../Components/Right";
import { ApiUrl } from '../next.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import ReactHtmlParser from 'react-html-parser';
import { SiteUrl } from '../next.config';

export default function PrivacyPolicy({ gethometopsection, getrighdata }) {

  const headercontent = gethometopsection.Table;
  const topSection = gethometopsection.Table1;
  const rightaudio = getrighdata.Table2;
  const tendring = getrighdata.Table;
  const url = 'state-hindi-news';

  return (
    <>
         <Head>
           <title>{headercontent[0].meta_title}</title>
           <meta name="keywords" content={headercontent[0].meta_keywords} />
           <meta name="description" content={headercontent[0].meta_description} />
           <link rel="icon" href="/favicon.ico" />
            <link rel="canonical" href={SiteUrl} />
         </Head>
        
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
                                    <li className="breadcrumb-item active" aria-current="page">{headercontent[0].page_name}</li>
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
                        <div className="row">
                           <div className="col-12">
                              <div className="row mt-3 mb-3">
                                 <div className="col-12"><b className="font24px position-relative">
                                    <img className="sun_imgn2" src="/images/prabhasakshi_sun_logo.webp" alt="sunimage" />
                                    <Link className="ml-4" href="/contactus">{headercontent[0].page_name}</Link></b></div>
                                 <div className="col-12">
                                    <div className="lines"></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-12 p-2">
                              {ReactHtmlParser(topSection[0].description)}  
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
export async function getStaticProps() {
  const res = await fetch(ApiUrl+"getprivacypolicy/")
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
