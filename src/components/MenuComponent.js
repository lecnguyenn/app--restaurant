import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class Menu extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        const menu= this.props.dishes.map((dish)=>{
            return (
                    <div key={dish.id} className="col-12 col-md-5 mt-5">
                        <Card  onClick={() =>this.props.onClick(dish.id)}>
                               <CardImg width="100%" object src={dish.image} alt={dish.name}></CardImg>  
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                            </Card>
                    </div>
            );
        }) ;
        return (
            <div className="container">
                <div className="row"> 
                        {menu}
                </div>
            </div>
        )
    }
}
    
export default Menu;