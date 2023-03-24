import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleRight,
  faFire,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Video from "./Video";
import { Container, Card } from "react-bootstrap";
import ShoppingMall from "./ShoppingMall";

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
          <div className="trend-text">
            <span className="trend-title">
              2023년! S/S시즌 <br /> Fashion
            </span>
            <span className="trend-hot">
              HOT
              <FontAwesomeIcon icon={faFire} />
            </span>
            <span className="trend-title">Trend</span>
          </div>
          <div className="trend-second-text">
            <div className="quote-left">
              <FontAwesomeIcon icon={faQuoteLeft} />
            </div>
            2023년 S/S 시즌을 4가지 키워드로 정리해 보았습니다.
            <br /> 이번 2023 S/S 런웨이 패션은 특히 'Y2K' 패션의 강세가
            지속되었습니다.
            <br />
            그럼 2023 S/S 패션 트렌드에 대해 알아볼까요?
          </div>

          <div className="trend-card-1">
            <div className="trend-card-text">
              <h3 className="cargo">카고 (Cargo)</h3>
              <p>
                지난해에 이어 올해도 카고팬츠의 인기는 이어질 것으로 보입니다.
              </p>
              <p>
                포켓이 많은 유틸리티 감성을 살린 카고팬츠가 뉴욕, 밀라노에 이어
              </p>
              <p>
                2023 S/S 파리 패션위크에서도 두드러지게 보여 올해도 Y2K의 강세가
                지속될 전망입니다.
              </p>
              <p>이 외에도 지방시, 코페르니 등의 브랜드에서 </p>
              <p>다채로운 소재 카고 팬츠를 선보이며 Y2K 미학을 선사했습니다.</p>
              <p>
                올해는 다양한 핏, 소재, 디자인의 카고 바지가 출시되며 힙하고
                세련된 느낌이 더 강해졌습니다.
              </p>
              <p>
                더불어 유명 셀럽들까지 카고 바지를 활용한 스타일링을 선보이며
                유행에 불을 지피고 있습니다.
              </p>
            </div>
            <img
              className="trend-img"
              width={300}
              src="/images/trend/cargo.png"
            />
          </div>

          <div className="trend-card-2">
            <img
              className="trend-img"
              width={300}
              src="/images/trend/denim.jpg"
            />
            <div className="trend-card-text-2">
              <h3 className="Denim">데님(Denim)</h3>
              <p>Y2K하면 빠질 수 없는 것이 데님이죠.</p>
              <p>
                데님은 자신의 개성을 잘 표현할 수 있는 소재로 청춘, 자유로움의
                상징입니다.
              </p>
              <p>
                2023 S/S 밀라노 패션위크에서는 데님 셋업, 부츠컷 데님팬츠 등
              </p>
              <p>다양한 형태의 데님패션이 눈에 띄었습니다. </p>
              <p>
                이들의 공통된 특징은 빈티지 느낌의 워싱과 풍성한 와이드
                실루엣입니다.
              </p>
            </div>
          </div>

          <div className="trend-card-1">
            <div className="trend-card-text">
              <h3>레더(Leather)</h3>
              <p>올해 가장 돋보이는 소재는 가죽입니다.</p>
              <p>
                레더는 매 시즌마다 아우터, 팬츠, 스커트, 드레스 등 다양한
                스타일로 전개되고 있습니다.
              </p>
              <p>
                가죽은 더 이상 계절감에 구애받지 않고 매 시즌 등장하는 스테디
                아이템입니다.
              </p>
              <p>또한 리얼레더와 함께 개성과 포인트를 줄 수 있는 </p>
              <p>친환경소재인 비건레더도 각광받고 있습니다.</p>
              <p>
                뉴욕에 이어 밀라노 2023 S/S 패션위크에서도 구찌, 프라다,
                베르사체 등의 브랜드에서
              </p>
              <p>스쿼트, 팬츠 등 다양한 옷들에 가죽을 사용했으며</p>
              <p>여러 형태의 가죽 셋업도 소개되었습니다.</p>
            </div>
            <img
              className="trend-img"
              width={300}
              src="/images/trend/leather.jpg"
            />
          </div>

          <div className="trend-card-2">
            <img
              className="trend-img"
              width={300}
              src="/images/trend/magenta.jpg"
            />
            <div className="trend-card-text-2">
              <h3 className="magenta">비바 마젠타(Viva Magenta)</h3>
              <p>
                미국 색채 연구소 PANTONE은 올해의 컬러로 레드 계열의 ‘비바
                마젠타’를 선정했습니다.
              </p>
              <p>
                PANTONE에서는 ‘비바 마젠타는 가장 밝은 천연염료 중 하나인
                코치닐의 레드에서 영감을 받은
              </p>
              <p>
                색이며 용감하고 두려움 없는 활기찬 색상‘이라고 설명했습니다.
              </p>
              <p>
                마젠타 색상 뿐만 아니라 비슷한 색감을 이용해 셋업, 상의, 하의로
                입거나 가방, 신발, 쥬얼리 등의
              </p>
              <p>악세서리에 트렌디한 포인트를 줄 수 있습니다.</p>
              <p>
                2023 S/S컬렉션에서 마젠타빛의 파워 수트 룩을 선보인 끌로에,
                마젠타의 매력을{" "}
              </p>
              <p>
                트위드 셋업으로 풀어낸 샤넬 등 다양한 브랜드에서 비바마젠타
                색상을 이용한 룩을 선보였습니다.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* 쇼핑몰 바로가기 */}
      <ShoppingMall />
    </div>
  );
};

export default Home
