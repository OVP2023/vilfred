import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function Karusel(props) {
          console.log(props.avatar)
          return (
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100 h-100"
                  src={props.img1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h5 style={{ color: 'white' }} >1</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-100"
                  src={props.img2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h5 style={{ color: 'white' }}>2</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-100"
                  src={props.img3}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h5 style={{ color: 'white' }}>3</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          );
        }
        
export default Karusel

        

        




