import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { Field } from 'formik';
import search from "../../assets/images/search.svg";

const ContainerCampoBusca = styled.div``;

const BotaoBusca = styled.button`
  display: flex;
  /* flex-direction: row; */
  /* align-items: flex-start; */
  align-items: center;
  justify-content: center;
  /* align-self: center; */
  padding: 8px;

  position: absolute;
  width: 40px;
  height: 40px;
  left: 460px;
  top: 100px;

  background: #0047BB;
  border-radius: 8px;
`;

const FieldBusca = styled(Field)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 16px;

  position: absolute;
  width: 364px;
  height: 40px;
  left: 116px;
  top: 92px;

  background: #FFFFFF;
  border: 1px solid #E1E0E7;
  border-radius: 8px;
`;

// const Img = styled.img`
  /* position: static; */
  /* height: 24px; */
  /* left: 20%;
  right: 20%;
  top: calc(50% - 24px/2); */

  /* flex: none; */
  /* order: 0; */
  /* flex-grow: 0; */
  /* margin: 0px 10px; */
// `;

const Mensagem = styled.div`
  position: absolute;
  left: 125px;
  top: 150px;
  background: #ff5050;
  color: white;
  line-height: 5px;
  width: 28%;
  text-align: center;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

interface CampoBuscaProps {
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  name?: string;
  erro?: any;
}

export function CampoBusca(props: CampoBuscaProps) {
  return (
    <>
      <ContainerCampoBusca>
        <FieldBusca
          type="text"
          placeholder="Buscar empresa"
          name={props.name}
        />
        <BotaoBusca
          type="button"
          {...props.buttonProps}
        >
          <img src={search} alt="search" />
        </BotaoBusca>
        <Mensagem>{props.erro}</Mensagem>
      </ContainerCampoBusca>
    </>
  );
}
