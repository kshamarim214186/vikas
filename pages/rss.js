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

export default function Rss({ gethometopsection, getrighdata }) {
  
  const topSection = gethometopsection.Table;
  const middlesection = gethometopsection.Table1;
  const rightaudio = getrighdata.Table2;
  const tendring = getrighdata.Table;
  const url = 'state-hindi-news';

  return (
    <>
         <Head>
           <title>{topSection[0].meta_title}</title>
           <meta name="keywords" content={topSection[0].meta_keywords} />
           <meta name="description" content={topSection[0].meta_description} />
           <link rel="icon" href="/favicon.ico" />
            <link rel="canonical" href={SiteUrl} />
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
                                    <li className="breadcrumb-item active" aria-current="page">{topSection[0].page_name}</li>
                                 </ol>
                              </nav>
                           </div>
                        </div>
                        
                        <div className="row mb-5">
                            <div className="col-12">
                                <div className="p-2 table-responsive">
                                    <table className="table table-striped table-bordered table-sm">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th className="p-2">Category</th>
                                                <th className="p-2">RSS Url</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                middlesection.map((obj, idx) => {
                                                    return (
                                                        <tr>
                                                            <td className='p-2'>
                                                                <a target='_blank' href={"/news/" + obj.english_name} > {obj.name}</a>
                                                            </td>
                                                            <td className='p-2'>
                                                                <a target='_blank' href={"/rss/" + obj.english_name + "/"} > {"https://www.prabhasakshi.com/rss/" + obj.english_name + "/"}</a>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
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
  const res = await fetch(ApiUrl+"getcategorieslist/")
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
