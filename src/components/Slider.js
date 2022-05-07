import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({props}) => {
    return (
      <Carousel fade>
          {
            props.map((item)=>(
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={item}
                      alt="First slide"
                    />
                  </Carousel.Item>
            ))
          }
      </Carousel>
    )
}

export default Slider
