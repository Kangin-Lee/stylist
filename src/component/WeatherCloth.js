import React from "react";

const cloth = [
  {
    name: "롱패딩",
    img: "https://image.msscdn.net/images/goods_img/20221004/2835863/2835863_1_500.jpg",
    category: "OUTER",
    weather: 4,
  },
  {
    name: "숏패딩",
    img: "https://image.msscdn.net/images/goods_img/20210930/2156412/2156412_2_500.jpg",
    category: "OUTER",
    weather: 4,
  },
  {
    name: "더플코트",
    img: "https://image.msscdn.net/images/goods_img/20211117/2238440/2238440_1_500.jpg",
    category: "OUTER",
    weather: 4,
  },
  {
    name: "발마칸코트",
    img: "https://image.msscdn.net/images/goods_img/20221012/2854367/2854367_4_500.jpg",
    category: "OUTER",
    weather: 4,
  },
  {
    name: "싱글코트",
    img: "https://image.msscdn.net/images/goods_img/20221007/2848683/2848683_1_500.jpg",
    category: "OUTER",
    weather: 4,
  },
  {
    name: "코듀로이 팬츠",
    img: "https://image.msscdn.net/images/goods_img/20220916/2799977/2799977_1_500.jpg",
    category: "PANTS",
    weather: 4,
  },
  {
    name: "목도리",
    img: "https://image.msscdn.net/images/goods_img/20210108/1740379/1740379_3_500.jpg",
    category: "ACCESSORIES",
    weather: 4,
  },
  {
    name: "데님 팬츠",
    img: "https://image.msscdn.net/images/goods_img/20200921/1613078/1613078_16734848888239_500.jpg",
    category: "PANTS",
    weather: 4,
  },
  {
    name: "더블코트",
    img: "https://image.msscdn.net/images/goods_img/20200804/1536412/1536412_1_500.jpg",
    category: "OUTER",
    weather: 4,
  },
  {
    name: "가죽자켓",
    img: "https://image.msscdn.net/images/goods_img/20210825/2086731/2086731_1_500.jpg",
    category: "OUTER",
    weather: 8,
  },
  {
    name: "플리스자켓",
    img: "https://image.msscdn.net/images/goods_img/20220831/2757395/2757395_1_500.jpg",
    category: "OUTER",
    weather: 8,
  },
  {
    name: "퀼팅자켓",
    img: "https://image.msscdn.net/images/goods_img/20221116/2946443/2946443_1_500.jpg",
    category: "OUTER",
    weather: 8,
  },
  {
    name: "히트텍",
    img: "https://image.msscdn.net/images/goods_img/20230216/3088457/3088457_16765325789642_500.jpg",
    category: "",
    weather: 8,
  },
  {
    name: "니트",
    img: "https://image.msscdn.net/images/goods_img/20230126/3039670/3039670_16748008818342_500.jpg",
    category: "TOP",
    weather: 8,
  },
  {
    name: "블루종",
    img: "https://image.msscdn.net/images/goods_img/20220307/2403203/2403203_3_500.jpg",
    category: "OUTER",
    weather: 8,
  },
  {
    name: "바람막이",
    img: "https://image.msscdn.net/images/goods_img/20220224/2383079/2383079_1_500.jpg",
    category: "OUTER",
    weather: 8,
  },
  {
    name: "M65파카",
    img: "https://image.msscdn.net/images/goods_img/20190129/942911/942911_1_500.jpg",
    category: "OUTER",
    weather: 8,
  },
  {
    name: "Ma-1",
    img: "https://image.msscdn.net/images/goods_img/20200205/1291016/1291016_1_500.jpg",
    category: "OUTER",
    weather: 8,
  },
  {
    name: "바시티자켓",
    img: "https://image.msscdn.net/images/goods_img/20220818/2724701/2724701_3_500.jpg",
    category: "OUTER",
    weather: 8,
  },
  {
    name: "트렌치코트",
    img: "https://image.msscdn.net/images/goods_img/20200915/1604644/1604644_1_500.jpg",
    category: "OUTER",
    weather: 11,
  },
  {
    name: "후드집업",
    img: "https://image.msscdn.net/images/goods_img/20230130/3046690/3046690_16759242185174_500.jpg",
    category: "OUTER",
    weather: 11,
  },
  {
    name: "데님자켓",
    img: "https://image.msscdn.net/images/goods_img/20210210/1790383/1790383_2_500.jpg",
    category: "OUTER",
    weather: 11,
  },
  {
    name: "코튼 팬츠",
    img: "https://image.msscdn.net/images/goods_img/20150826/241111/241111_4_500.jpg",
    category: "PANTS",
    weather: 11,
  },
  {
    name: "스웻팬츠",
    img: "https://image.msscdn.net/images/goods_img/20230202/3055863/3055863_16754107168091_500.jpg",
    category: "PANTS",
    weather: 20,
  },
];

const WeatherCloth = ({ weather }) => {
  cloth.map((item) =>
    weather?.main.temp.toFixed() > 11 && weather?.main.temp.toFixed() < 20
      ? item.weather > 11 && item.weather < 20
        ? console.log(item.weather)
        : ""
      : ""
  );

  return (
    <div>
      <div>현재 기온: {weather?.main.temp.toFixed()}℃</div>
      <div>
        {cloth.map((item) => (
          <div>
            <img width={200} src={item.img} />
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCloth;
