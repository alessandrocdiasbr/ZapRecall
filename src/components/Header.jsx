import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <HeaderContent>
      <img src={logo} alt="ZapRecall Logo" />
      <h1>ZapRecall</h1>
    </HeaderContent>
  );
}

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10%;

  img {
    height: 60px;
    width: 52px;
  }

  h1 {
    font-family: "Righteous", sans-serif;
    font-size: 36px;
    color: #ffffff;
    margin: 20px;
  }
`;
