import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ShoppingMall = () => {
  const shoppingMall = [
    "musinsa",
    "zigzag",
    "29cm",
    "ably",
    "brandi",
    "kream",
    "mustit",
    "oco",
    "soldout",
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4.5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Container>
      <h1 className="shopping-text">쇼핑하러 가기</h1>
      <Carousel responsive={responsive} className="brand-content">
        <div className="shopping-logo">
          <div className="brand">
            <a target="_blank" href="https://www.musinsa.com/app/">
              <img width={90} src="/images/shoppingMall/musinsa.png" />
            </a>
          </div>
          <p>무신사</p>
        </div>

        <div className="shopping-logo">
          <div className="brand-white">
            <a target="_blank" href="https://m.a-bly.com/">
              <img width={90} src="/images/shoppingMall/ably.png" />
            </a>
          </div>
          <p>에이블리</p>
        </div>

        <div className="shopping-logo">
          <div className="brand-pink">
            <a target="_blank" href="https://official.zigzag.kr/">
              <img width={90} src="/images/shoppingMall/zigzag.png" />
            </a>
          </div>
          <p>지그재그</p>
        </div>

        <div className="shopping-logo">
          <div className="brand-gray">
            <a target="_blank" href="https://www.29cm.co.kr/home/">
              <img width={90} src="/images/shoppingMall/29cm.png" />
            </a>
          </div>
          <p>29cm</p>
        </div>

        <div className="shopping-logo">
          <div className="brand">
            <a target="_blank" href="https://www.brandi.co.kr/">
              <img width={90} src="/images/shoppingMall/brandi.png" />
            </a>
          </div>
          <p>브랜디</p>
        </div>

        <div className="shopping-logo">
          <div className="brand-gray">
            <a
              target="_blank"
              href="https://www.ocokorea.com/shop/main/main.do"
            >
              <img width={90} src="/images/shoppingMall/oco.png" />
            </a>
          </div>
          <p>OCO</p>
        </div>

        <div className="shopping-logo">
          <div className="brand">
            <a
              target="_blank"
              href="https://kream.co.kr/?utm_source=google&utm_medium=cpc&utm_campaign=NEW_%EC%9E%90%EC%82%AC%EB%AA%85_PC&utm_term=KREAM&utm_content=A.%20%EC%9E%90%EC%82%AC%EB%AA%85"
            >
              <img width={90} src="/images/shoppingMall/kream.png" />
            </a>
          </div>
          <p>크림</p>
        </div>

        <div className="shopping-logo">
          <div className="brand-white">
            <a target="_blank" href="https://mustit.co.kr/">
              <img width={90} src="/images/shoppingMall/mustit.png" />
            </a>
          </div>
          <p>머스트잇</p>
        </div>

        <div className="shopping-logo">
          <div className="brand-white">
            <a target="_blank" href="https://www.soldout.co.kr/">
              <img width={90} src="/images/shoppingMall/soldout.png" />
            </a>
          </div>
          <p>솔드아웃</p>
        </div>
      </Carousel>
    </Container>
  );
};

export default ShoppingMall;
