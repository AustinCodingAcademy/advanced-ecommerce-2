import React from "react";

function Footer() {
    return (<div className="footer  bg-white-darken-1 px3 py4">
        <div className="max-width-4 mx-auto px3">
            <div className="md-flex mxn3">
                <div className="md-col-3 px3">
                    <h3 className="fz4 caps my2">Information</h3>
                    <ul className="list-reset m0 fz2">
                        <li className="block mb2"><a className="no-underline black" href="#">About us</a></li>
                        <li className="block mb2"><a className="no-underline black" href="#">Sitemap</a></li>
                        <li className="block mb2"><a className="no-underline black" href="#">Contact</a></li>
                        <li className="block mb2"><a className="no-underline black" href="#">Terms and conditions</a></li>
                        <li className="block mb2"><a className="no-underline black" href="#">Legal Notice</a></li>
                    </ul>
                </div>
                <div className="md-col-3 px3">
                    <h3 className="fz4 caps my2">Our offers</h3>
                    <ul className="list-reset m0 fz2">
                        <li className="block mb2"><a className="no-underline black" href="#">New products</a></li>
                        <li className="block mb2"><a className="no-underline black" href="#">top sellers</a></li>
                        <li className="block mb2"><a className="no-underline black" href="#">Specials</a></li>
                        <li className="block mb2"><a className="no-underline black" href="#">Products</a></li>
                        <li className="block mb2"><a className="no-underline black" href="#">Comments</a></li>
                    </ul>
                </div>
                <div className="md-col-3 px3">
                    <h3 className="fz4 caps my2">Your account</h3>
                    <ul className="list-reset m0 fz2">
                        <li className="block mb2"><a className="no-underline black" href="#">Your Account</a></li>
                        <li className="block mb2"><a className="no-underline black" href="#">Personal info</a></li>
                        <li className="block mb2"><a className="no-underline black" href="#">Prices</a></li>
                        <li className="block mb2"><a className="no-underline black" href="#">Address</a></li>
                        <li className="block mb2"><a className="no-underline black" href="#">Locations</a></li>
                    </ul>
                </div>
                <div className="md-col-3 px3">
                    <h3 className="fz4 caps my2">Get in touch</h3>
                    <ul className="list-reset mxn2 my0">
                        <li className="inline-block px2"><a className="no-underline black" href="#"><img src="images/facebook.png" alt="facebook" /></a></li>
                        <li className="inline-block px2"><a className="no-underline black" href="#"><img src="images/twitter.png" alt="Twiiter" /></a></li>
                        <li className="inline-block px2"><a className="no-underline black" href="#"><img src="images/rss.png" alt="Rss" /></a></li>
                        <li className="inline-block px2"><a className="no-underline black" href="#"><img src="images/gpluse.png" alt="Google+" /></a></li>
                    </ul>
                    <p>Design by <a className="no-underline black" href="#">W3layouts</a></p>
                </div>
            </div>
        </div>
    </div>);
}

export default Footer;
