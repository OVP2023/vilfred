import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Details from './Details'
import Detimage from './Detimage'
import Karusel from './Karusel'

function SportPage() {
      const [data, setData] = useState(localStorage.getItem('data'));
      console.log(data)
      const info = {
        avatar:"https://i.ibb.co/KLC8T2m/3.jpg",
        img1:"https://i.ibb.co/rcnXDxv/3.jpg",
        img2:"https://i.ibb.co/1Q8yY1r/sport1.jpg",
        img3:"https://i.ibb.co/TrC5dcj/6m.jpg",
        id:10,
        name:" О спорт - ты мир!",
        textbody1: ' Ой, бежит живая шубка!',
        textbody2: ' Оглянулась на минутку!',
        textbody3: ' Где же ушки, где же хвост?',
        textbody4:'Это ежик или пес?',
       

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
                <br/><Link to='/fazenda'><div className="animate__animated animate__rotateIn">НА СЛЕДУЮЩУЮ СТРАНИЦУ</div></Link><br/>
              </Col>
            </Row>
          </Container>

        </>
      )
  }


  export default SportPage;