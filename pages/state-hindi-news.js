import Head from 'next/head'
import Image from 'next/image'
import HeaderOld from '../Components/HeaderOld';
import StateHindiTitle from '../Components/StateHindiTitle';
import NewsRealtedDescription from '../Components/NewsRealtedDescription';
import Link from 'next/link';
import Left from "../Components/Left";
import Right from "../Components/Right";
import { ApiUrl } from '../next.config';

import { SiteUrl } from '../next.config';

export default function StateHindiNews({ gethometopsection, getrighdata }) {

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
                        { /*<Breadcrumbs title="राज्यवार खबरें" url="" />
                        
                        <InputGroup className="p-3">
                            <InputGroup.Append>
                                <InputGroup.Text onClick={() => Search()} >
                                    <FontAwesomeIcon icon={faSearch} />
                                </InputGroup.Text>
                            </InputGroup.Append>
                            <FormControl
                                id="txtsearchstate"
                                placeholder="राज्य सर्च करें..."
                                aria-label="राज्य सर्च करें..."
                                aria-describedby="txtsearchstate"
                            />
                            <InputGroup.Append>
                                <InputGroup.Text onClick={() => Search()} className="pscolor">
                                    Search
                                </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>*/ }
                        <div className="row mb-2">
                           {
                              topSection.map((obj, idx) => {
                                 if (idx === 0 || idx % 3 === 0) {
                                    return (
                                       <StateHindiTitle itemobj={obj} key={obj.news_url} />
                                    )
                                 }else{
                                    return (
                                       <NewsRealtedDescription relatednews={obj} key={idx} />
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
  const res = await fetch(ApiUrl+"getallstatenews/")
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
