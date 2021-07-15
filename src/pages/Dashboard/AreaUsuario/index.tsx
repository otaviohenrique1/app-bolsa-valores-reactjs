import styled from "styled-components";
import avatar from "../../../assets/images/avatar.png";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { useState } from "react";

const Div = styled.div`
  background-color: #FFFFFF;
  width: 100%;
`;

const UsuarioDropdown = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;

  position: static;
  width: 354px;
  height: 40px;
  left: 20px;
  top: 32px;

  border: 1px solid rgba(0, 71, 187, 0.2);
  box-sizing: border-box;
  border-radius: 120px;

  /* Inside Auto Layout */

  /* flex: none;
  order: 0;
  flex-grow: 0; */
  margin: 32px 20px;
`;

const UsuarioDropdownAvatar = styled.img`
  /* position: absolute; */
  width: 32px;
  height: 32px;
  /* left: 0px;
  top: 0px; */
  border-radius: 100px;
`;

const UsuarioNome = styled.p`
  /* position: static; */
  width: 274px;
  height: 19px;
  /* left: 40px;
  top: 6.5px; */

  font-family: Graphik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  /* or 125% */

  text-align: center;
  letter-spacing: -0.005em;

  color: #0047BB;
`;

const Span = styled.span`
  width: 16px;
  height: 16px;
`;

export function AreaUsuario() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Div>
      <UsuarioDropdown>
        <UsuarioDropdownAvatar src={avatar} alt="Avatar usuario" />
        <UsuarioNome>João da Silva Almeida Magalhães</UsuarioNome>
        <Span onClick={() => setOpen(!open)}>
          {(open) ? (
            <TiArrowSortedUp width={12} height={6} color="#F06400" />
          ) : (
            <TiArrowSortedDown width={12} height={6} color="#F06400" />
          )}
        </Span>
      </UsuarioDropdown>
    </Div>
  );
}