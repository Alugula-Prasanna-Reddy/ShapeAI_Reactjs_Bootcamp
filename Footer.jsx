import React from "react";

function Footer(){
    var date = new Date().getFullYear();
    return(
        <footer>
         <h1>Copyright @ {date}</h1>
        </footer>
    );
}
export default Footer;