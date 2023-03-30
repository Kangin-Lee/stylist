import React from 'react'
import { Container } from "react-bootstrap";
import Colors from "./Colors";
import ShoppingMall from "./ShoppingMall";
import { useState } from "react";

const choice = {
  BLACK: {
    name: "BLACK",
    text: "블랙 색상은 무채색으로 대부분의 색상과 잘 어울립니다. 무채색은 포인트 컬러를 이용해 그 색을 더욱 돋보이게 하는 역할도 합니다. 블랙과 잘 어울리는 몇 가지 색상을 추천해 드리겠습니다.",
    combination1: "BLACK",
    combination1_img: [
      "https://image.msscdn.net/images/style/detail/31861/detail_31861_5_500.jpg",
      "https://image.msscdn.net/images/style/detail/32009/detail_32009_1_500.jpg",
    ],
    combination2: "WHITE",
    combination2_img: [
      "https://image.msscdn.net/images/style/detail/31981/detail_31981_1_500.jpg",
    ],
  },
  WHITE: {
    name: "WHITE",
    text: "화이트다",
  },
  GRAY: {
    name: "GRAY",
  },
  NAVY: {
    name: "NAVY",
  },
  KAKI: {
    name: "KAKI",
  },
  BEIGE: {
    name: "BEIGE",
  },
  BROWN: {
    name: "BROWN",
  },
  BLUE: {
    name: "BLUE",
  },
  GREEN: {
    name: "GREEN",
  },
  BURGUNDY: {
    name: "BURGUNDY",
  },
};

const Colormatch = () => {
  const [userSelect, setUserSelect] = useState(null);

  const color = [
    "BLACK",
    "WHITE",
    "GRAY",
    "NAVY",
    "KAKI",
    "BEIGE",
    "BROWN",
    "BLUE",
    "GREEN",
    "BURGUNDY",
  ];

  const colorPoint = (userChoice) => {
    setUserSelect(choice[userChoice.item]);
  };

  return (
    <>
      <div className="colormatch">
        <Container>
          <div className="colormatch-text">
            <h3>Color Match | 컬러 매치</h3>
            <p>
              아직도 컬러 매치가 어려우신가요? <br /> 지금 바로 팔레트에서
              원하는 색상을 선택해 보세요! <br /> 스타일리스트가 그 색과
              어울리는 색을 추천해드립니다.
            </p>
            <p>
              ※ 팔레트에 있는 색상은 옷감에 많이 사용되는 10가지 색상입니다.
            </p>
          </div>

          <div className="palette">
            {color.map((item) => (
              <div className="palette-color">
                <div className="color-border">
                  <div
                    className={item}
                    onClick={() => colorPoint({ item })}
                  ></div>
                </div>
                <h6>{item}</h6>
              </div>
            ))}
          </div>

          <Colors userSelect={userSelect} />
        </Container>
      </div>
      <Container>
        <ShoppingMall />
      </Container>
    </>
  );
};

export default Colormatch
