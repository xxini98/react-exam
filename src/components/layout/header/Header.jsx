import React from "react";
import styled from "styled-components";
import logo from "../../../img/JiN_HEE.svg";
import Gnb from "./Gnb";

const Header = () => {
  return (
    <HeaderWarp>
      <div>
        <h1>
          <img src={logo} alt="로고" className="jinhee" />
        </h1>
        <Gnb />
      </div>
    </HeaderWarp>
  );
};

export default Header;

const HeaderWarp = styled.header`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    height: 100px;
  }
  .jinhee {
    width: 150px;
    object-fit: cover;
  }
`;
