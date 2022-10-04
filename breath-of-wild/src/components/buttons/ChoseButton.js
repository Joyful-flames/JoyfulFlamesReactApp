import React from "react";

export default function ChoseButton( {text} ) {

    function determine() {
        if (text === "back") {
            return "choosed";
        } 
        return "";
    }

    return (
        <>
            <button className={`choose ${determine()}`}> {text} </button>
        </>
    );
}