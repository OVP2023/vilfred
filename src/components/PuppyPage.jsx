import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Details from './Details'
import Karusel from './Karusel'

function PuppyPage() {
      const [data, setData] = useState(localStorage.getItem('data'));
      console.log(data)

      const info = {
        avatar:"https://i.ibb.co/pjyZLWZ/12m.jpg",
        img1:"https://i.ibb.co/q0yzP2Q/beauty4.jpg",
        img2:"https://i.ibb.co/RPYqQTF/11.jpg",
        img3:"https://i.ibb.co/Hp8y2wn/1.jpg",
        id:10,
        name:' Моё детство, как говорится ё-моё',
        textbody1:" В это утро, очень рано ",
        textbody2: '  Соскочил щенок с дивана!',
        textbody3: '  Стал по комнатам ходить,',
        textbody4: '  Прыгать, лаять, всех будить!*'
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
                <br/><Link to='/service'><div className="animate__animated animate__rotateIn">НА СЛЕДУЮЩУЮ СТРАНИЦУ</div></Link><br/>
              </Col>
            </Row>
          </Container>

        </>
      )
  }


  export default PuppyPage;  