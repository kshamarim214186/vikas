import React, { useState, useEffect } from 'react';

function AdSlot(props) {
    const adType = props.adType;
    const className = props.className;
    const adUnit = props.id;



    return (
        <div className={"row mtop-desktop " + className}>
            <div className="col-12 gedf-main text-center p-0">

                

            </div>
        </div>
    )
}
export default AdSlot;