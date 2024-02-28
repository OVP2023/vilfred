import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Details from './Details'
import Detimage from './Detimage'
import Karusel from './Karusel'

function ServicePage() {
      const [data, setData] = useState(localStorage.getItem('data'));
      console.log(data)
      const info = {
        avatar:"https://i.ibb.co/vZQRxt1/7m.jpg",
        img1:"https://i.ibb.co/tpR3wZr/service3.jpg",
        img2:"https://i.ibb.co/tqHtCw2/service1.jpg",
        img3:"https://i.ibb.co/5YftdK3/service2.jpg",
        id:10,
        name:' Служба, охрана мамочки и дома.',
        textbody1: ' Сидеть надоело мне лапы сложа,'+
                 ' я очень хотел бы пойти в сторожа!',
        textbody2: ' Висит объявление у наших ворот: собака нужна сторожить огород!',
        textbody3: ' Я тявкать умею, умею рычать, умею своих от чужих отличать! *'         
      }

      return (
        <> 
          <br/>
          <Container>
            <Row>
              <Col>               
                 <Karusel avatar={info.avatar} img1={info.img1} img2={info.img2} img3={info.img3} /> 
              </Col>
              <Col>
                <Details name={info.name} textbody1={info.textbody1} textbody2={info.textbody2} textbody3={info.textbody3} />
              </Col>
            </Row>
            <br/>
            <Row>
              <Col>
                <br/><Link to='/'><div className="animate__animated animate__rotateIn">ВЕРНУТЬСЯ НА ГЛАВНУЮ СТРАНИЦУ</div></Link><br/>
              </Col>
              <Col>
              </Col>
              <Col>
                <br/><Link to='/travel'><div className="animate__animated animate__rotateIn">НА СЛЕДУЮЩУЮ СТРАНИЦУ</div></Link><br/>
              </Col>
            </Row>
          </Container>

        </>
      )
  }


  export default ServicePage; 