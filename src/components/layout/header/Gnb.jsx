import styled from "styled-components";

const Gnb = () => {
  return (
    <GnbWrapper>
      <ul>
        <li>
          <a href="/" className="active">Main</a>
        </li>
        <li>
          <a href="/">Main2</a>
        </li>
        <li>
          <a href="/">Main3</a>
        </li>
        <li>
          <a href="/">Main4</a>
        </li>
      </ul>
    </GnbWrapper>
  );
};

export default Gnb;

const GnbWrapper = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    li {
      a { 
        text-decoration: none;
        color: #151515;
        font-size: 20px;
      }
      .active {
        font-weight: bold;
      }
    }
  }
`;
