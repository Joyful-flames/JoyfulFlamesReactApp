import React from "react";

/* 聊天图和人头图btn */
export default function NormalButton( {imageUrl} ) {
    return (
        <>
            <button className="contact"> <img src={imageUrl} alt=""/> </button>
        </>
    );
}