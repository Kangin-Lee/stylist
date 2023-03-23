import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom'


const Navbar = ({weather}) => {
    console.log(weather);
    const navigate = useNavigate()
    const Login=()=>{
        navigate("/login")
    }

    let weatherIcon = `/images/icons/${weather?.weather[0].icon}.png`;

    return (
      <Container>
        <div className="header">
          <div className="logo">
            <Link to="/" className="logo-text">
              Stylist
            </Link>
          </div>
          <div className="header-right">
            <div className="search-bar">
              <input type="text" placeholder="검색어를 입력헤주세요." />
              <button>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
            <button className="login" onClick={Login}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />
              <div className="login-text">로그인</div>
            </button>
            <div className="weather">
              <img width={35} src={weatherIcon} />
              <div>
                {weather?.name}/{weather?.main.temp.toFixed()}℃
              </div>
            </div>
          </div>
        </div>

        {/* Nav========================================================================= */}
        <ul className="menu">
          <li className="menu-list">
            <Link to="/" className="menu-detail">
              HOME
            </Link>
          </li>
          <li className="menu-list">
            <Link to="/ootd" className="menu-detail">
              OOTD
            </Link>
          </li>
          <li className="menu-list">
            <Link to="/tpo" className="menu-detail">
              TPO
            </Link>
          </li>
          <li className="menu-list">
            <Link to="/outfit" className="menu-detail">
              오늘의 착장
            </Link>
          </li>
          <li className="menu-list">
            <Link to="/survey" className="menu-detail">
              체질 분석
            </Link>
          </li>
          <li className="menu-list">
            <Link to="/weather" className="menu-detail">
              날씨
            </Link>
          </li>
          <li className="menu-list">
            <Link to="/colormatch" className="menu-detail">
              컬러매치
            </Link>
          </li>
          <li className="menu-list">
            <Link to="/washing" className="menu-detail">
              세탁 방법
            </Link>
          </li>
        </ul>
      </Container>
    );
}

export default Navbar
