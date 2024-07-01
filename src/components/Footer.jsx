import React from 'react';
import logoFooter from "../images/logo_footer.svg";

const Footer = () => {
    return (
        <div className="footer">
            <img src={logoFooter} alt="logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;