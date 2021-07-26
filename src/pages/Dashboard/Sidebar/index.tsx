import styled from 'styled-components';
import logo from "../../../assets/images/monetus_logo.svg";
import Home from "../../../assets/images/icon-home.svg";
import { HTMLAttributes } from 'react';

const Aside = styled.nav`
  background-color: #F5F8FA;
  width: 100%;
`;

const Logo = styled.img`
  position: absolute;
  width: 46px;
  height: 46px;
  left: 25px;
  top: 20px;
`;

const BotaoHomeEstilizado = styled.button`
  position: absolute;
  left: 0;
  top: 112px;
  width: 96px;
  height: 48px;
  border-left: 4px solid #F06400;
  border-right: 0;
  border-top: 0;
  border-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;

  img {
    width: 32px;
    height: 32px;
  }
`;

function BotaoHome(props: HTMLAttributes<HTMLButtonElement>) {
  return (
    <BotaoHomeEstilizado type="button">
      <img src={Home} alt="Home" />
    </BotaoHomeEstilizado>
  );
}

export function Sidebar() {
  return (
    <Aside>
      <Logo src={logo} alt="Monetus Logo" />
      <BotaoHome />
    </Aside>
  );
}
