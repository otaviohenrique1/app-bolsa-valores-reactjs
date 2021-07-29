import styled from "styled-components";
import { Sidebar } from "./Sidebar";
import { AreaUsuario } from "./AreaUsuario";
import { AreaDados } from "./AreaDados";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 801px;
  display: grid;
  grid-template-columns: 0.5fr 4.5fr 2fr;
  /* grid-template-columns: 0.5fr 6.5fr; */
  background-color: #C4C4C4;
`;


export function Dashboard() {
  const favoritoDados = useSelector((state: RootState) => state);
  console.log(favoritoDados.favorito.favoritos);
  
  return (
    <Container>
      <Sidebar />
      <AreaDados />
      <AreaUsuario />
    </Container>
  );
}
