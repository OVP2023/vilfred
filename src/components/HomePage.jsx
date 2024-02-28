import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Details from './Details'
import Karusel from './Karusel'

function HomePage() {
    //выгрузка записей с сервера 
    const [data, setData] = useState(1);      
    localStorage.data=data

    const info = {
      avatar:"https://i.ibb.co/D58TDq4/7m.jpg",
      img1:"https://i.ibb.co/D58TDq4/7m.jpg",
      img2:"https://i.ibb.co/njVpMSf/beauty2.jpg",
      img3:"https://i.ibb.co/cQFkTmW/fazenda4.jpg",
      id:10,
      name:'   Привет всем! Hello world!',
      textbody1:' Друзья мои! ',
      textbody2:' Давайте поближе познакомиться! Я самый умный и красивый, а главное очень справедливый померанец в мире!',
      textbody3:' Посвещаю эти веб странички на React JSX и Вootstrap моей второй маме - самой лучшей и заботливой мамочке на свете! '  
    }
    //i.ibb.co/kQPQFhw/4m.jpg


    return (
          <>  
            <br/>
            <div className='container-fluid'>
              <div className="row row-cols-4">
                <div className="Col col-4">
                  <Karusel avatar={info.avatar} img1={info.img1} img2={info.img2} img3={info.img3} /> 
                </div>
                <div className="Col col-6">
                  <Details name={info.name} textbody1={info.textbody1} textbody2={info.textbody2} textbody3={info.textbody3}/>
                </div>

              </div>
              <br/>
              <Row>
                <Col>   
                </Col>
                <Col>
                </Col>
                <Col>
                  <br/><Link to='/family'><div className="animate__animated animate__rotateIn">НА СЛЕДУЮЩУЮ СТРАНИЦУ</div></Link><br/>
                </Col>
              </Row>
            </div>

          </>
      )

  }


export default HomePage;