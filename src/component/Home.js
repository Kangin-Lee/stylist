import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Video from "./Video";
import { Container, Card } from "react-bootstrap";

const Home = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const navigate = useNavigate();
  const colorMatch = () => {
    navigate("/colormatch");
  };

  const outFit = () => {
    navigate("/outfit");
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="card-slide">
          <div className="d-block w-1"></div>
          <Carousel.Caption className="w-1-text">
            <h3 className="logo-home">Stylist</h3>
            <h3>패션 정보를 한 곳에서</h3>
            <p>
              이젠 패션에 관련한 정보를 찾으로 다니지 않으셔도 됩니다. <br />{" "}
              <span className="stylist">Stylist</span>를 이용해 보세요!
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item onClick={colorMatch}>
          <div className="d-block w-2"></div>
          <Carousel.Caption className="w-2-text">
            <h3>컬러 매치 도우미</h3>
            <p>
              컬러 매치 어려우신가요? <br /> 지금 바로 팔레트를 찍어보세요!{" "}
              <br /> 그 색과 어울리는 컬러를 추천해 드립니다.
            </p>
            <div>
              <span className="w-2-go">
                자세히 보기 <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item onClick={outFit}>
          <div className="d-block w-3"></div>
          <Carousel.Caption className="w-3-text">
            <h3>
              오늘같은 날씨엔 <br />
              어떤 옷을 입어야 할까?
            </h3>
            <p>
              아직도 무슨 옷을 입을지 고민하시나요? <br />{" "}
              <span className="stylist">Stylist</span>는 현재 날씨에 맞는
              옷차림을 추천해 드립니다.
            </p>
            <div>
              <span className="w-3-go">
                자세히 보기 <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* 비디오 컴포넌트 */}
      <Video />

      {/* 패션 트렌드 */}
      <div className="trend">
        <Container>
          <h1 className="trend-title">2023년에 주목할 패션 트렌드!</h1>
          <p>올해 가장 주목해야 할 키워드는 'Y2K'</p>
          <p>Y2K패션은 1990년대 말부터 2000년대 패션을 말한다.</p>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://img.vogue.co.kr/vogue/2023/01/style_63c11a19696f5.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default Home
