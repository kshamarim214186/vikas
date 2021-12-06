import React from 'react';
import LazyLoad from 'react-lazyload';
import ReactHtmlParser from 'react-html-parser';

function ListItemRashiYearly(props) {
    const obj = props.item;
    return (
        <div className="row">
            <div className={"col-12 gedf-main news-"+obj.news_id}>
                <div className="card gedf-card">
                    <div className="card-body p-1">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-4">
                                <div className="image_effect">                                    
                                    <LazyLoad height={85}>
                                        <img src={obj.rashi_sign_image} title={obj.rashi_name} alt={obj.rashi_name} className="img_effect1 featured_img" />
                                    </LazyLoad>                                    
                                </div>
                            </div>
                            <div className="col-8 pl-2">                            
                                <h4 className="mt-2"></h4>
                                <h2 className="rashi-heading m-1">                                    
                                    {ReactHtmlParser(obj.rashi_daily_description)}                                    
                                </h2>
                            </div>
                        </div>

                    </div>                                      
                </div>                
            </div>            
        </div>
    )
}
export default ListItemRashiYearly;