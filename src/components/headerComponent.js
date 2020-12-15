import React, {Component} from 'react';
import {Nav,Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem , Jumbotron, Button, Modal,ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import { NavLink} from 'react-router-dom';
class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

        toggleNav() {
            this.setState(
                {
                    isNavOpen: !this.state.isNavOpen
                    
                }
            );
        }
        toggleModal(){
            this.setState(
                {
                    isModalOpen: !this.state.isModalOpen
                }
            );
        }
        handleLogin(event){
            this.toggleModal();
            alert(" Username: " + this.username.value +" Password :" +this.password.value + " Remember: " + this.remember.checked);
            event.preventDefault();
        }
    
    render(){
        return(
            <React.Fragment>
        <Navbar dark expand="md">
             <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
             <NavbarBrand className="mr-auto" href="/">
                 <img src="./assets/images/logo.png" height="80" width="80" alt="Nguyen Le Restaurant" />
             </NavbarBrand>
             <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/home">
                            <span className="fa fa-home fa-lg">Trang chủ</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/aboutus">
                            <span className="fa fa-info fa-lg">Giới thiệu</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/menu">
                            <span className="fa fa-list fa-lg">Menu</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/contactus">
                            <span className="fa fa-address-card fa-lg">Liên hệ</span>
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button outline onClick={this.toggleModal}>
                            <span className="fa fa-sign-in fa-lg"></span>Đăng nhập
                        </Button>
                    </NavItem>
                </Nav>
                </Collapse>
              </div>
        </Navbar>
        <Jumbotron>
            <div className="row row-header">
                <div className="col-12 col-sm-6">
                    <h1>Nguyen Le Restaurant</h1>
                    <p>
Chúng tôi lấy cảm hứng từ những món ăn ngon nhất của ba miền Bắc Trung Nam và tạo ra một trải nghiệm kết hợp độc đáo.</p>
                </div>
            </div>
        </Jumbotron>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.handleLogin}>
                    <FormGroup>
                        <Label htmlFor="username">Username</Label>
                        <Input type="text" id="username" name="username" innerRef={(input) => this.username= input}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">PassWord</Label>
                        <Input type="password" id="password" name="password" innerRef={(input) => this.password= input}></Input>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="remember"innerRef={(input) => this.remember= input}/>Remember me
                        </Label>
                    </FormGroup>
                    <Button type="submit" value="submit" color="primary">Submit</Button>
                    
                </Form>
            </ModalBody>
        </Modal>
            </React.Fragment>
        )
    }
}
export default Header;
