import React from "react";

function Footer(){
    const currYear= new Date().getFullYear();
    return <p>
        <footer>
        Copyright @ {currYear}
        </footer>
    </p>
}

export default Footer;