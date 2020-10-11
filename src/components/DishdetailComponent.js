import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Dishdetail extends React.Component{
    
    RenderComments(comments){
        if(comments != null){
            var months = [ "Jan", "Feb","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
           const detail = comments.map((comment) =>{
               var d = new Date(comment.date);
               var m = months[d.getMonth()];
               var dt =d.getDate();
               var y = d.getFullYear();
               return (
                   <li key={comment.id}>
                       <p>{comment.comment}</p>
                       <p>-- {comment.author},{m} {dt}, {y}</p>

                   </li>
               );
           });
           return (
               <div className="col-12 col-md-5 m-1">
                   <h4>Comment</h4>
                   <ul className="list-unstyled">
                       {detail}
                   </ul>
               </div>
           )
        }
        else{
            return(
                <div></div>
            );
        }
    }
    RenderDish(dish){
        if(dish != null){
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                    </Card>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
    render(){
        const dish = this.props.dish;
        if(dish != null){
            const dishItem = this.RenderDish(dish);
            const commmentItem = this.RenderComments(dish.comments);
        return (
            <div className="row">
                {dishItem}
                {commmentItem}
            </div>
        );
    }
        else{
            return(
                <div></div>
            )
        }
    }
}
export default Dishdetail;