import React from "react"

function Footer(){

const currentYear=new Date().getFullYear();

    return <p>CopyRight © {currentYear}</p>;    
}

export default Footer;