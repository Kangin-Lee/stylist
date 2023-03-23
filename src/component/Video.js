import React from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Video = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4.5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3.7,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <Container className="video-head">
        <div>
          <span className="logo">Stylist</span>
          <span className="video-text">가 추천하는 영상</span>
        </div>
        <Carousel responsive={responsive} className="video-content">
          <div>
            <iframe
              width="320"
              height="181"
              src="https://www.youtube.com/embed/21Bm2OW0_kI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="320"
              height="181"
              src="https://www.youtube.com/embed/IQRtO7sOmKc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="320"
              height="181"
              src="https://www.youtube.com/embed/btAh3WdEVXg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="320"
              height="181"
              src="https://www.youtube.com/embed/ie3BfmoWyQk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="320"
              height="181"
              src="https://www.youtube.com/embed/21Bm2OW0_kI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
        </Carousel>
      </Container>
    );
}

export default Video

