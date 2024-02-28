import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Details from './Details'
import Detimage from './Detimage'
import Karusel from './Karusel'

function HolidaysPage() {
      const [data, setData] = useState(localStorage.getItem('data'));
      console.log(data)
      const info = {
        avatar:"https://i.ibb.co/kq4Yhvc/10.jpg",
        img1:"https://i.ibb.co/kq4Yhvc/10.jpg",
        img2:"https://i.ibb.co/DVHkPQJ/4.jpg",
        img3:"https://i.ibb.co/gTdt4vn/fazenda3.jpg",
        id:10,
        name:" Праздники, моя любимая страница, всегда накормят по высшему разряду!",
        textbody1:" Весёлый вечер в жизни нашей,                ",
        textbody2:"Запомним юные друзья!",
        textbody3: ' Шампанского в стекляной чаше',
        textbody4: ' Шипела хладная струя!*'
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
                <br/><Link to='/beauty'><div className="animate__animated animate__rotateIn">НА СЛЕДУЮЩУЮ СТРАНИЦУ</div></Link><br/>
              </Col>
            </Row>
          </Container>

        </>
      )
  }


  export default HolidaysPage;