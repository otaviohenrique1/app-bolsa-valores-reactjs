import { Form, Formik } from "formik";
import styled from "styled-components";
import { CampoBusca } from "../../../components/Campo";
import * as Yup from "yup";
import { TituloDashboard } from "../../../components/Titulo";
import { Grafico, GraficoContainer } from "../../../components/Grafico";
import { EmpresasRecentes } from "../EmpresasRecentes";
import { favoritos } from "../../../utils/apis/api_favoritos";
import { FormEvent, useState } from "react";
import { ContainerMensagemSemDados } from "../../../components/Mensagem";
import { useDispatch, useSelector } from "react-redux";
import { setFavorito, removeFavorito } from "../../../features/favorito/favoritoSlice";
import { RootState } from "../../../app/store";

const Container = styled.div`
  background-color: #C4C4C4;
  width: 100%;
`;

interface DataProps {
  id: number;
  favorito: boolean;
  src: string;
  alt: string;
  nome_empresa: string;
  codigo_empresa: string;
  porcentagem: number;
  valor_acao: number;
  valor_variacao_dinheiro: number;
  data: {
    name: string;
    uv: number;
    pv: number;
    amt: number;
  }[];
}

interface FormTypes {
  empresa_buscada: string;
}

const initialValues = {
  empresa_buscada: '',
};

export function AreaDados() {
  const [data, setData] = useState<DataProps>();
  const [favoritado, setFavoritado] = useState<boolean>(false);
  const dispatch = useDispatch();
  
  const favoritoDados = useSelector((state: RootState) => state);

  async function handleSubmitFavorito(event: FormEvent) {
    event.preventDefault();
    if (data) {
      const validaSeFavoritoJaExiste = favoritoDados.favorito.favoritos.find((item) => {
        return data.codigo_empresa === item.codigo_empresa;
      });

      if (validaSeFavoritoJaExiste) {
        dispatch(removeFavorito(data));
        setFavoritado(true);
        dispatch(setFavorito({
          id: data.id,
          favorito: favoritado,
          src: data.src,
          alt: data.alt,
          nome_empresa: data.nome_empresa,
          codigo_empresa: data.codigo_empresa,
          porcentagem: data.porcentagem,
        }));
      } else {
        setFavoritado(true);
        dispatch(setFavorito({
          id: data.id,
          favorito: favoritado,
          src: data.src,
          alt: data.alt,
          nome_empresa: data.nome_empresa,
          codigo_empresa: data.codigo_empresa,
          porcentagem: data.porcentagem,
        }));
      }
    } else {
      return;
    }
    // alert(favoritado);
  }

  const validationSchema = Yup.object().shape({
    empresa_buscada: Yup
      .string()
      .required('O campo é obrigatorio'),
  });

  async function handleSubmitForm(values: FormTypes) {
    let empresaBuscada = favoritos.find((item) => {
      return item.codigo_empresa === values.empresa_buscada;
    });
    
    if (empresaBuscada) {
      setData(empresaBuscada);
    } else {
      alert('Item não encontrado');
    }
  }

  return (
    <Container>
      <TituloDashboard
        titulo="Dashboard"
      />
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmitForm}
      >
        {({errors, touched}) => (
          <Form>
            <CampoBusca
              name="empresa_buscada"
              erro={(errors.empresa_buscada && touched.empresa_buscada) ? (<p>{errors.empresa_buscada}</p>) : null}
            />
          </Form>
        )}
      </Formik>
      {(data) ? (
        <Grafico
          data={data}
          favoritado={favoritado}
          handleSubmitFavorito={handleSubmitFavorito}
        />
      ) : (
        <GraficoContainer>
          <ContainerMensagemSemDados>
            <h1>Sem dados</h1>
          </ContainerMensagemSemDados>
        </GraficoContainer>
      )}
      <EmpresasRecentes />
    </Container>
  );
}
