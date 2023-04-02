import React from 'react'
import { Container } from "react-bootstrap";
import Colors from "./Colors";
import ShoppingMall from "./ShoppingMall";
import { useState } from "react";

const choice = {
  BLACK: {
    name: "black",
    text: "블랙 색상은 무채색으로 대부분의 색상과 잘 어울립니다. 무채색은 포인트 컬러를 이용해 그 색을 더욱 돋보이게 하여 개성이나 매력을 어필하는 역할도 합니다. 또한 화이트가 어떤 색상과도 잘 녹아든다면 블랙은 어떤 색상이든 잡아먹는 성질이 있다는걸 이해한다면 코디가 쉬워지실 것입니다. 그럼 블랙과 잘 어울리는 몇 가지 색상을 추천해 드리겠습니다.",
    combination: ["BLACK", "WHITE", "KHAKI", "BLUE", "GREEN"],
    img: [
      "https://image.msscdn.net/mfile_s01/_street_images/89661/street_64228088abd12.jpg?20230328152943",
      "https://image.msscdn.net/mfile_s01/_street_images/88972/street_6406a34b6a277.jpg?20230307180446",
      "https://image.msscdn.net/mfile_s01/_street_images/89563/street_641a99c3db4d8.jpg?20230322164101",
      "https://image.msscdn.net/mfile_s01/_street_images/89813/street_642644d2bd280.jpg?20230331114554",
      "https://image.msscdn.net/mfile_s01/_street_images/89541/street_641a585bc5da5.jpg?20230321164156",
    ],
  },
  WHITE: {
    name: "white",
    text: "화이트 색상은 무채색으로 대부분의 색상과 잘 어울립니다. 무채색은 포인트 컬러를 이용해 그 색을 더욱 돋보이게 하여 개성이나 매력을 어필하는 역할도 합니다. 화이트와 잘 어울리는 몇 가지 색상을 추천해 드리겠습니다.",
    combination: ["BLACK", "BLUE", "BEIGE", "KHAKI", "GRAY"],
    img: [
      "https://image.msscdn.net/mfile_s01/_street_images/62702/street_5f16af8a1dd54.jpg?20200721173732",
      "https://image.msscdn.net/mfile_s01/_street_images/88633/street_63f2cb4d5ab91.jpg?20230220111422",
      "https://image.msscdn.net/mfile_s01/_street_images/88630/street_63f2cb718bb4b.jpg?20230220112327",
      "https://image.msscdn.net/mfile_s01/_street_images/87804/street_63c5dcc8392e3.jpg?",
      "https://image.msscdn.net/mfile_s01/_street_images/87299/street_63b3aca85280e.jpg?",
    ],
  },
  GRAY: {
    name: "gray",
    text: "그레이 색상은 누가 입어도 잘 어울리는 매력적인 색상입니다. 얼굴빛에 맞추어 밝은 톤을 선택하면 세련된 느낌을 살리 수 있고, 블랙에 가까운 어두운 톤을 선택하면 그 어떤 서브 아이템과 매치해도 자연스럽게 녹아드는 특징을 가졌습니다. 그럼 그레이와 잘 어울리는 몇 가지 색상을 추천해 드리겠습니다.",
    combination: ["GRAY", "NAVY", "BEIGE", "BLUE", "KHAKI"],
    img: [
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_602cdba8c7499.jpg?20210218101843",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_60778451189ae.jpg?20210415104456",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_6424d4602b2d1.jpg?20230330091800",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_62a9535893256.jpg?20220615131103",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_627c6c76eab15.jpg?20220512112204",
    ],
  },
  NAVY: {
    name: "navy",
    text: "네이비 색상은 쿨톤에 속하며 겨울이나 여름을 대표하는 색상입니다. 블루 계열의 특성인 '차분한 이미지'는 코디를 무난하게 연출할 수 있게 도와줘 호불호없이 남녀노소 즐겨입는 색상입니다. 그럼 네이비와 잘 어울리는 몇 가지 색상을 추천해 드리겠습니다.",
    combination: ["GRAY", "BLUE", "BEIGE", "CREAM", "KHAKI"],
    img: [
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_6423efff6dbe5.jpg?20230329170029",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_642134029b966.jpg?20230327152344",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_61024bdcd7dd6.jpg?20210729162853",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_6419643b693e9.jpg?20230322080010",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_625e744ab30b5.jpg?20220419175240",
    ],
  },
  KHAKI: {
    name: "khaki",
    text: "카키",
    combination: ["GRAY", "BLUE", "BEIGE", "BLACK", "BROWN"],
    img: [
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_636865d7d34ac.jpg?20221107105827",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_5db24e2975ef2.png?20200807083343",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_622b075e452bb.jpg?20220311175923",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_62382b61df3a2.jpg?20220321170205",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_64017233f1c38.jpg?20230303135701",
    ],
  },
  BEIGE: {
    name: "beige",
    text: "베이지",
    combination: ["BROWN", "NAVY", "CREAM", "BLACK", "BLUE"],
    img: [
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_64263006019be.jpg?20230331100026",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_641b97d735db9.jpg?20230323091344",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_64085e686693b.jpg?20230309094209",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_641177b173985.jpg?20230315164703",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_640eea4b8f570.jpg?20230314084259",
    ],
  },
  BROWN: {
    name: "brown",
    text: "브라운",
    combination: ["BEIGE", "BLUE", "CREAM", "BLACK", "KHAKI"],
    img: [
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_613ff3267be21.jpg?20210914102353",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_6369c710c0f9d.jpg?20221109141831",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_632a6969f12c9.jpg?20220921103818",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_6422394c0ee83.jpg?20230328095633",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_636c8ff4e8cfc.jpg?20221110145034",
    ],
  },
  BLUE: {
    name: "blue",
    text: "블루",
    combination: ["BEIGE", "WHITE", "GRAY", "BLACK", "KHAKI"],
    img: [
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_63854fa89b144.jpg?20221129091812",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_63f43d872e728.jpg?20230221131038",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_638d6f8021a84.jpg?20221205131240",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_63450f73b563c.jpg?20221011155047",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_6425463659349.jpg?20230330213730",
    ],
  },
  GREEN: {
    name: "green",
    text: "그린",
    combination: ["BEIGE", "BLUE", "WHITE", "BLACK", "GRAY"],
    img: [
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_61f34772f0cd5.jpg?20220128132155",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_6423983490a6a.jpg?20230329105652",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_628d81d04cfc1.jpg?20220525101226",
      "https://image.msscdn.net/mfile_s01/_street_images/75408/street_616788dd4e7a7.jpg?20211014103926",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_62427f31b04c7.jpg?20220329133823",
    ],
  },
  BURGUNDY: {
    name: "burgundy",
    text: "버건디",
    combination: ["BEIGE", "NAVY", "KHAKI", "BLACK", "GRAY"],
    img: [
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_6319745e44027.jpg?20220913143355",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_633e51766b29a.jpg?20221006131717",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_63e5bb44845a4.jpg?20230210130149",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_61adac999e0b5.jpg?20211206174508",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_633cfee70580d.jpg?20221005132658",
    ],
  },
};

const Colormatch = () => {
  const [userSelect, setUserSelect] = useState(null);

  const color = [
    "BLACK",
    "WHITE",
    "GRAY",
    "NAVY",
    "KHAKI",
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
