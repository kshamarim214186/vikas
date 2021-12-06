import Head from 'next/head'
import Image from 'next/image'
import HeaderOld from '../Components/HeaderOld';
import ListItemRashiDaily from '../Components/ListItemRashiDaily';
import ListItemRashiWeekly from '../Components/ListItemRashiWeekly';
import ListItemRashiYearly from '../Components/ListItemRashiYearly';
import Link from 'next/link';
import Left from "../Components/Left";
import Right from "../Components/Right";
import { ApiUrl, SiteUrl } from '../next.config';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function Horoscope({ gethometopsection, getrighdata }) {

  const headercontent = gethometopsection.Table;
  const dailyData = gethometopsection.Table1;
  const weeklyData = gethometopsection.Table2;
  const monthlyData = gethometopsection.Table3;
  const yearlyData = gethometopsection.Table4;

  const rightaudio = getrighdata.Table2;
  const tendring = getrighdata.Table;
  const url = 'state-hindi-news';

   const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
   };

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

                  <div className="col-md-6 bg-white mt-3">
                     <div className="container-fluid p-3">
                        <div className="row">
                           <div className="col-12">
                              <nav aria-label="breadcrumb">
                                 <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                       <FontAwesomeIcon icon={faHome} />
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">राशिफल</li>
                                 </ol>
                              </nav>
                           </div>
                        </div>
                        <div className="row mtop-desktop d-block d-sm-none">
                           <div className="col-12 gedf-main text-center p-0">
                              <div className="gedf-card text-center ad-300-250">
                                 <div className="ad-300-250">
                                    <div className="adunitContainer">
                                       <div className="adBox" id="adSlot-7"></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="row mt-2">
                           <div className="col-12 card gedf-card">
                              <Carousel responsive={responsive}
                                 swipeable={true}
                                 draggable={true}
                                 showDots={false}
                                 ssr={true}
                                 customTransition="all .5"
                                 removeArrowOnDeviceType={["tablet", "mobile"]}
                                 deviceType="mobile">
                                 <div className="p-2">
                                     <Link href="/horoscope/aries/">
                                         <img src="/images/horoscope/horoscope_aries.png" alt="मेष" className="rashifal-image" />
                                     </Link>
                                 </div>
                                 <div className="p-2">
                                     <Link href="/horoscope/taurus/">
                                         <img src="/images/horoscope/horoscope_taurus.png" alt="वृषभ" className="rashifal-image" />
                                     </Link>
                                 </div>
                                 <div className="p-2">
                                     <Link href="/horoscope/gemini/">
                                         <img src="/images/horoscope/horoscope_gemini.png" alt="मिथुन" className="rashifal-image" />
                                     </Link>
                                 </div>
                                 <div className="p-2">
                                     <Link href="/horoscope/cancer/">
                                         <img src="/images/horoscope/horoscope_cancer.png" alt="कर्क" className="rashifal-image" />
                                     </Link>
                                 </div>
                                 <div className="p-2">
                                     <Link href="/horoscope/leo/">
                                         <img src="/images/horoscope/horoscope_leo.png" alt="सिंह" className="rashifal-image" />
                                     </Link>
                                 </div>
                                 <div className="p-2">
                                     <Link href="/horoscope/virgo/">
                                         <img src="/images/horoscope/horoscope_virgo.png" alt="कन्या" className="rashifal-image" />
                                     </Link>
                                 </div>
                                 <div className="p-2">
                                     <Link href="/horoscope/libra/">
                                         <img src="/images/horoscope/horoscope_libra.png" alt="तुला" className="rashifal-image" />
                                     </Link>
                                 </div>
                                 <div className="p-2">
                                     <Link href="/horoscope/scorpio/">
                                         <img src="/images/horoscope/horoscope_scorpio.png" alt="वृश्चिक" className="rashifal-image" />
                                     </Link>
                                 </div>
                                 <div className="p-2">
                                     <Link href="/horoscope/sagittarius/">
                                         <img src="/images/horoscope/horoscope_sagittarius.png" alt="धनु" className="rashifal-image" />
                                     </Link>
                                 </div>
                                 <div className="p-2">
                                     <Link href="/horoscope/capricorn/">
                                         <img src="/images/horoscope/horoscope_capricorn.png" alt="मकर" className="rashifal-image" />
                                     </Link>
                                 </div>
                                 <div className="p-2">
                                     <Link href="/horoscope/aquarius/">
                                         <img src="/images/horoscope/horoscope_aquarius.png" alt="कुंभ" className="rashifal-image" />
                                     </Link>
                                 </div>
                                 <div className="p-2">
                                     <Link href="/horoscope/pisces/">
                                         <img src="/images/horoscope/horoscope_pisces.png" alt="मीन" className="rashifal-image" />
                                     </Link>
                                 </div>
                              </Carousel>
                           </div>
                           <div className="col-12 card gedf-card">
                              <div className="card-body p-2">
                                 <Tabs>
                                       <TabList>
                                          <Tab className="tab_rashifal">दैनिक</Tab>
                                          <Tab className="tab_rashifal">साप्ताहिक</Tab>
                                          <Tab className="tab_rashifal">मासिक</Tab>
                                          <Tab className="tab_rashifal">वार्षिक</Tab>
                                       </TabList>
                                       <TabPanel>
                                          {
                                             dailyData.map((obj, idx) => {
                                                if (idx === 0) {
                                                   return (
                                                       <div className="row">
                                                           <div className="col-12">
                                                               <div className="rashifal-heading"><div className="time mt-2"></div></div>
                                                           </div>
                                                           <div className="col-12">
                                                               <ListItemRashiDaily item={obj} />
                                                           </div>
                                                       </div>
                                                   )
                                                }else {
                                                   return (
                                                      <ListItemRashiDaily item={obj} />
                                                   )
                                                }
                                             })
                                          }
                                       </TabPanel>
                                       <TabPanel>
                                          {
                                             weeklyData.map((obj, idx) => {
                                                  if (idx === 0) {
                                                      return (
                                                          <div className="row">
                                                              <div className="col-12">
                                                                  <div className="rashifal-heading"><div className="time mt-2"></div></div>
                                                              </div>
                                                              <div className="col-12">
                                                                  <ListItemRashiWeekly item={obj} />
                                                              </div>
                                                          </div>
                                                      )
                                                  }
                                                  else {
                                                      return (
                                                          <ListItemRashiWeekly item={obj} />
                                                      )
                                                  }
                                              })
                                          }
                                       </TabPanel>
                                       <TabPanel>
                                          {
                                             monthlyData.map((obj, idx) => {
                                                  if (idx === 0) {
                                                      return (
                                                          <div className="row">
                                                              <div className="col-12">
                                                                  <div className="rashifal-heading"><div className="time mt-2"></div></div>
                                                              </div>
                                                              <div className="col-12">
                                                                  <ListItemRashiDaily item={obj} />
                                                              </div>
                                                          </div>
                                                      )
                                                  }
                                                  else {
                                                      return (
                                                          <ListItemRashiDaily item={obj} />
                                                      )
                                                  }
                                              })
                                          }
                                       </TabPanel>
                                       <TabPanel>
                                          {
                                             yearlyData.map((obj, idx) => {
                                                  if (idx === 0) {
                                                      return (
                                                          <div className="row">
                                                              <div className="col-12">
                                                                  <div className="rashifal-heading"><div className="time mt-2"></div></div>
                                                              </div>
                                                              <div className="col-12">
                                                                  <ListItemRashiYearly item={obj} />
                                                              </div>
                                                          </div>
                                                      )
                                                  }
                                                  else {
                                                      return (
                                                          <ListItemRashiYearly item={obj} />
                                                      )
                                                  }
                                              })
                                          }
                                       </TabPanel>
                                 </Tabs>
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
export async function getStaticProps() {

  const formData = new URLSearchParams();
  formData.append('rashi', '');
  formData.append('application_id', '1');
  formData.append('client_ip', '192.168.1.1');
  const finalresult = await fetch(ApiUrl+'getrashifal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData,
    });
 
  const gethometopsection = await finalresult.json();


  const rightsidedata = await fetch(ApiUrl+"getrightsidedata/")
  const getrighdata = await rightsidedata.json()
  
  return {
    props: {
      gethometopsection,
      getrighdata,
    },
  }
}
