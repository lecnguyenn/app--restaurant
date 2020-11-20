import React from 'react';
import { Link } from 'react-router-dom';
function Footer (props){
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="List-unstyled">
                            <li><Link to="/Home">Home</Link></li>
                            <li><Link to="/aboutus">About us</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/contactus">Contact us</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Adress</h5>
                        <address>
                            214, Nguyen Xien,Thanh Xuan, Ha Noi
                            <i className="fa fa-phone fa-lg"></i>
                            <i className="fa fa-fax fa-lg"></i>
                            <i className="fa fa-envelope fa-lg"></i>:<a href="lecnguyenn@gmail.com">Lecnguyen@gmail.com</a>

                        </address>
                    </div>
                    <div className="col-12 col=sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="google.com"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="facebook.com"><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="Linkedin.com"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="Twitter.com"><i className="fa fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
                <div className="rwo justify-content-center">
                    <div className="col-auto">
                        <p> &copy;Copyright 2020 Nguyen Le</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;