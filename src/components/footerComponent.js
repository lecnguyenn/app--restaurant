import React from 'react';
import { Link } from 'react-router-dom';
function Footer (props){
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col- col-sm-5">
                        <h5>Địa chỉ</h5>
                        <address>
                            214, Nguyen Xiển,Thanh Xuân, Hà Nội 
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
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p> &copy;Copyright 2020 Nguyen Le</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;