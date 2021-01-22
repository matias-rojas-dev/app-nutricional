import React from 'react';

const Footer = () => ( 
    <footer>
        <p>&copy; {new Date().getFullYear()}</p>
    </footer>
);

Footer.displayName = 'Footer';

export default Footer;