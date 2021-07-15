import styled from 'styled-components';
import logo from "../../../assets/images/monetus_logo.png";

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

export function Sidebar() {
  return (
    <Aside>
      <Logo src={logo} alt="Monetus Logo" />
    </Aside>
  );
}
