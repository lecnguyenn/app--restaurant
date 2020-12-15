import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl} from '../Shared/baseUrl';
import { Loading } from './LoadingComponents';
import {Fade, Stagger} from 'react-animation-components'
function About(props) {


    function RenderLeader({leader}){
        return (
            <Fade in>
            <Media>
                <Media left><img src={baseUrl + leader.image} alt={leader.image} /></Media>
                <div className="ml-5 md-3">
                    <Media body>
                        <Media heading>{leader.name}</Media>
                        <p>{leader.designation}</p>
                        <p>{leader.description}</p>
                    </Media>
                </div>
            </Media>
            </Fade>
        );
    }
    let leaders = "";
    if(props.leaders.isLoading){
        leaders = (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if(props.leaders.leaders){
        leaders = props.leaders.leaders.map((leader, i)=>{
            return (
                <Fade in>
                    <li className="list-instyled">
                        <RenderLeader key={i} leader={leader}></RenderLeader>
                    </li>
                </Fade>
            )
        })
    }
    
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Trang chủ</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Giới thiệu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Giới thiệu</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Lịch sử của chúng tôi</h2>
                    <p>Được thành lập vào năm 2010, Nguyen Le Restaurant nhanh chóng trở thành một biểu tượng ẩm thực xuất sắc tại Hà Nội. Với thương hiệu ẩm thực kết hợp độc đáo không thể tìm thấy ở đâu khác, nhà hàng nhận được sự bảo trợ từ nhóm khách hàng hạng A ở Hà Nội. Với bốn trong số các đầu bếp ba sao Michelin giỏi nhất Đông Nam Á, bạn sẽ luôn được thưởng thức những món ăn độc đáo và ngon miệng khi đến thăm nhà hàng chúng tôi.</p>
                    <p>Nhà hàng đánh dấu sự khởi đầu khiêm tốn của mình là một quán ăn nhỏ tên là <em>Đồ ăn Nguyen Le </em>, chúng tôi đã phát triển nhanh chóng và trở thành chuỗi cửa hàng đông khách và có thức ăn ngon nhất Việt Nam </p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Sơ lược</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Bắt đầu</dt>
                                <dd className="col-6">03 - 12 -20102010</dd>
                                <dt className="col-6">Founder</dt>
                                <dd className="col-6">Nguyen Le.</dd>
                                <dt className="col-6">Doanh thu năm ngoái</dt>
                                <dd className="col-6">1,250,375$</dd>
                                <dt className="col-6">Nhân viên</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Hãy nấu như nấu cho người mình thương yêu nhất.</p>
                                <footer className="blockquote-footer">
                                <cite title="Source Title">Nguyen Le </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Các nhà đồng sáng lập</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {leaders}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;    