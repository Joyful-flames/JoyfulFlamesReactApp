import React from "react";

/* 聊天图和人头图btn */
export default function LaefButton( {imageUrl} ) {
    return (
        <>
            <button className="leaf"> <img src={imageUrl} /> </button>
        </>
    );
}