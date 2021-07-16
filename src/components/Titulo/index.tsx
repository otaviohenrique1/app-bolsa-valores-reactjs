import styled from "styled-components";

const TituloContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 157px;
  left: calc(50% - 157px/2 - 446px);
  top: 4%;
  bottom: 92.51%;
  
  h1 {
    color: #14171A;
    position: static;
    left: 20.38%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    font-family: Graphik;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.0075em;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 8px;
  }
`;

interface TituloProps {
  titulo: string;
}

export function Titulo(props: TituloProps) {
  return (
    <TituloContainer>
      <h1>{props.titulo}</h1>
    </TituloContainer>
  );
}