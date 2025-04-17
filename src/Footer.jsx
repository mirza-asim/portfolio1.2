import './App.css';
import React, { useState } from 'react';

function Footer() {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <footer> © {year} Mirza Asim Baig. All rights reserved. &nbsp;
        <a href="https://www.linkedin.com/in/mirza-asim-679849194">linkedin</a>&nbsp;
        <a href="https://github.com/mirza-asim">github</a>
        </footer>
    );
}

export default Footer;