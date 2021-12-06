import React from 'react';
import Link from 'next/link';
import ReactHtmlParser from 'react-html-parser';

function ElectionComponentA(props){
   const details = props.pagecontent;

   return(
      <>
         <div className="row">
            <div className="col-12 p-2">
               {ReactHtmlParser(details)} 
            </div>
         </div>
      </>
   )
}
export default ElectionComponentA;