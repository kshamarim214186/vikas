import Head from 'next/head'
import Image from 'next/image'
import HeaderOld from '../Components/HeaderOld';
import Link from 'next/link';
import Left from "../Components/Left";
import Right from "../Components/Right";
import { ApiUrl } from '../next.config';
import TopCentre from '../Components/TopCentre';
import { SiteUrl } from '../next.config';

export default function Home({ gethometopsection, getrighdata, gethomescroll }) {

  const liveVideo = gethometopsection.Table1;
  const topSection = gethometopsection.Table2;
  const rightaudio = getrighdata.Table2;
  const tendring = getrighdata.Table;
  const videoGallery = gethomescroll.Table;
  const headercontent = gethometopsection.Table;

  return (
    <>
      	<Head>
	        <title>{headercontent[0].meta_title}</title>
	        <meta name="keywords" content={headercontent[0].meta_keywords} />
	        <meta name="description" content={headercontent[0].meta_description} />
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

                <TopCentre item={topSection} liveVideo={liveVideo} videoGallery={videoGallery} allTopScroll={gethomescroll} />

                <Right tendring={tendring} rightaudio={rightaudio} />
              
            </div>
        </div>
    </>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  const res = await fetch(ApiUrl+"gethometopsection/")
  const gethometopsection = await res.json()

  const rightsidedata = await fetch(ApiUrl+"getrightsidedata/")
  const getrighdata = await rightsidedata.json()

  const homescrollsec = await fetch(ApiUrl+"gethomescrollsection/")
  const gethomescroll = await homescrollsec.json()
  //console.log(gethomescroll);
  
  return {
    props: {
      gethometopsection,
      getrighdata,
      gethomescroll,
    },
  }
}
