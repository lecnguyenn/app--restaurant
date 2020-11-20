import React, { Component } from 'react';
import { Breadcrumb,BreadcrumbItem ,FormGroup, Label, Col, Button, Row, FormFeedback } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Control, Errors, Form ,actions } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber  =(val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
class Contact extends Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleSubmit(values){
        console.log("current statr is: " + JSON.stringify(values));
       alert("current start is: " + JSON.stringify(values));
       this.props.postFeedback(values.firstname, values.lastname, values.telephone, values.email,values.agree, values.contactType,values.message);
       this.props.resetFeedbackForm();
    }

    render(){
        return(
            <div className="container">
                 <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact us</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Contact</h3>
                            <hr/>
                        </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3> Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            214 Nguyen Xien-Thanh Xuan-Ha Noi
                            <i className="fa fa-phone"></i>0392854780 <br />
                            <i className="fa fa-fax"></i>123456789 <br />
                            <i className="fa fa-envelope"></i>: <a href="mailto: lecnguyenn@gmail.com">lecnguyenn@gmail.com</a>
    
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel: 0392854780"><i className="fa fa-phone"></i>Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i></a>
                            <a role="button" className="btn btn-success" href="mailto :lecnguyenn@gmail.com"><i className="fa fa-envelope-o"></i></a>
    
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send Us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form model="feedback" onSubmit={(values) =>this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>FirstName</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname" placeholder="Firstname" className="form-control"
                                    validators={{
                                        required,minLength: minLength(3), maxLength:maxLength(10)
                                    }}
                                    />
                                    <Errors 
                                     className ="text-danger"
                                     model =".firstname"
                                     show="touched"
                                     messages={{
                                         required : ' Required ',
                                         minLength:' Must be greater than 2',
                                         maxLength:' Must be less more 10',
                                     }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>LastName</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname" placeholder="Lastname" className="form-control"
                                     validators={{
                                        required,minLength: minLength(3), maxLength:maxLength(10)
                                    }}
                                    />
                                    <Errors 
                                     className ="text-danger"
                                     model =".lastname"
                                     show="touched"
                                     messages={{
                                         required:'Required',
                                         minLength: ' Must be greater than 2',
                                         maxLength: ' Must be less more 10'
                                     }}
                                     />
                                     
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telephone" md={2}>Contact.Tel</Label>
                                <Col md={10}>
                                    <Control.text model=".telephone" id="telephone" name="telephone" placeholder="Contact.Tel" className="form-control"
                                        validators={{
                                          required,minLength: minLength(3), maxLength:maxLength(10),isNumber
                                     }}   
                                    />
                                     <Errors 
                                     className ="text-danger"
                                     model =".telephone"
                                     show="touched"
                                     messages={{
                                         required: ' Required',
                                         minLength: ' Must be greater than 2 number',
                                         maxLength: ' Must be less more 10 number',
                                         isNumber: ' Must be a number'
                                     }}
                                     />

                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email" placeholder="Email" className="form-control"
                                        validators={{
                                         required,validEmail
                                         }}
                                    />
                                      <Errors 
                                     className ="text-danger"
                                     model =".email"
                                     show="touched"
                                     messages={{
                                         required: 'Required',
                                         validEmail: ' Invalid Email Address'
                                     }}
                                     />

                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset:2}}>
                                   <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree" className="form-check-input"
                                           /> {' '}
                                            <strong>May we contact you ?</strong>
                                        </Label>
                                       </div>
                                </Col>
                        
                                <Col md={{size:3, offset:1}}>
                                    <Control.select model=".contactType" name="contactType" className="form-control">
                                    <option>Tel.</option>
                                    <option>Email</option>
                                    </Control.select>
                                </Col>
                           </Row>
                            <Row className="form-group">
                            <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" name="message" rows="12" className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color="primary">
                                        Send FeedBack
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        )
    
    }
 
}
export default Contact;