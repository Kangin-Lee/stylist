import React from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Video = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <Container>
        <div className='video-head'><span className='logo'>Stylist</span><span className='video-text'>가 PICK한 영상</span></div>
        <Carousel responsive={responsive}>
            <div><iframe width="320" height="183" src="https://www.youtube.com/embed/21Bm2OW0_kI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
        </Carousel>
    </Container>
  )
}

export default Video

