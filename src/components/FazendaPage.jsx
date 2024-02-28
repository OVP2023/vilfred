import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Details from './Details'
import Detimage from './Detimage'
import Karusel from './Karusel'

function FazendaPage() {
      const [data, setData] = useState(localStorage.getItem('data'));
      console.log(data)
      const info = {
        avatar:"https://i.ibb.co/TrC5dcj/6m.jpg",
        img1:"https://i.ibb.co/fM10MFR/inspace.jpg",
        img2:"https://i.ibb.co/Sc2q1b6/neroship.jpg",
        img3:"https://i.ibb.co/NNtzSP4/neurotrain.jpg",
        img4:"https://i.ibb.co/1QMqDs6/neurofuture.jpg",
        img5:"https://i.ibb.co/PYv7WY3/neurofootball.jpg",
        img6:"https://i.ibb.co/fHQphqK/neuroschool.jpg",
        id:10,
        name:" Мой образ в нейросети Midjorney v6 (еще не доработан как надо)"
      }

      return (
        <> 
          <br/>
          <div className='container-fluid'>
            <Row>
              <Col>
                <Karusel avatar={info.avatar} img1={info.img1} img2={info.img2} img3={info.img3} /> 
              </Col>
              <Col>
                <Details name={info.name}/>
              </Col>
              <Col>
                <Karusel avatar={info.avatar} img1={info.img4} img2={info.img5} img3={info.img6} />
                
              </Col>
            </Row>
            <Row>
              <Col>
              </Col>
              <Col>
                <br/><Link to='/'><div className="animate__animated animate__rotateIn">ВЕРНУТЬСЯ НА ГЛАВНУЮ СТРАНИЦУ</div></Link><br/>
              </Col>
              <Col>
              </Col>
            </Row>

          </div>  

        </>
      )
  }


  export default FazendaPage;