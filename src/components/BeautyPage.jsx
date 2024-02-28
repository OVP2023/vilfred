import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Karusel from './Karusel'
import Details from './Details'


function BeautyPage() {
      const [data, setData] = useState(localStorage.getItem('data'));
      console.log(data)
      const info = {
        avatar:"https://i.ibb.co/0QSFN3L/9.jpg",
        img1:"https://i.ibb.co/XxWKGYX/beauty1.jpg",
        img2:"https://i.ibb.co/j32T44M/beauty3.jpg",
        img3:"https://i.ibb.co/CWZMdFy/9.jpg",
        id:10,
        name:" Красота ",
        textbody1: ' Мною вы полюбовались,',
        textbody2:' Вижу, что заулыбались!',
        textbody3: ' Вот такой красивый я!',
        textbody4: ' Рядом мамочка моя!'

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
                <Details name={info.name} textbody1={info.textbody1} textbody2={info.textbody2} textbody3={info.textbody3} textbody4={info.textbody4}/>
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
                <br/><Link to='/sport'><div className="animate__animated animate__rotateIn">НА СЛЕДУЮЩУЮ СТРАНИЦУ</div></Link><br/>
              </Col>
            </Row>
          </Container>

        </>
      )
  }


  export default BeautyPage;