import styled from "styled-components";
import Article from "./header/Article";
import Header from "./header/Header";

const Layout = () => {
  return (
    <Wrap>
      <Header />
      <Article />
    </Wrap>
  );
};

export default Layout;

const Wrap = styled.div`
  font-family: "pretendard";
  width: 100%;
  height: 100%;
`;
