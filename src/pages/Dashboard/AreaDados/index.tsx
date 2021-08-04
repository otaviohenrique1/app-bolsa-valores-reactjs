import { Form, Formik } from "formik";
import styled from "styled-components";
import { CampoBusca } from "../../../components/Campo";
import * as Yup from "yup";
import { TituloDashboard } from "../../../components/Titulo";
import { Grafico, GraficoContainer } from "../../../components/Grafico";
import { EmpresasRecentes } from "../EmpresasRecentes";
// import { favoritos } from "../../../utils/apis/api_favoritos";
import { FormEvent, useState } from "react";
import { ContainerMensagemSemDados } from "../../../components/Mensagem";
import { useDispatch, useSelector } from "react-redux";
import { setFavorito, removeFavorito } from "../../../features/favorito/favoritoSlice";
import { removeEmpresaRecente, setEmpresaRecente } from "../../../features/empresa_recente/empresaRecenteSlice";
import { RootState } from "../../../app/store";
import { BuscaEmpresa, DataHistoricalPrice, DataProps, DataPropsInitialData } from "../../../services/api";
// import { Api, DataCompany, DataCompanyInitialData, DataHistoricalPrice, DataHistoricalPricesInitialData, DataQuote, DataQuoteInitialData } from "../../../services/api";

const Container = styled.div`
  background-color: #C4C4C4;
  width: 100%;
`;

// interface DataProps {
//   id: number;
//   favorito: boolean;
//   src: string;
//   alt: string;
//   nome_empresa: string;
//   codigo_empresa: string;
//   porcentagem: number;
//   valor_acao: number;
//   valor_variacao_dinheiro: number;
//   data: {
//     name: string;
//     uv: number;
//     pv: number;
//     amt: number;
//   }[];
// }

interface DataEmpresaFavorito {
  favorito: boolean;
  nome_empresa: string;
  codigo_empresa: string;
  porcentagem: number;
}

const DataEmpresaFavoritoInitialData = {
  favorito: false,
  nome_empresa: '',
  codigo_empresa: '',
  porcentagem: 0
}

interface FormTypes {
  empresa_buscada: string;
}

const initialValues = {
  empresa_buscada: '',
};

export function AreaDados() {
  const [data, setData] = useState<DataProps>(DataPropsInitialData);
  const [dataGrafico, setDataGrafico] = useState<DataHistoricalPrice[]>([]);
  const [dataEmpresa, setDataEmpresa] = useState<DataEmpresaFavorito>(DataEmpresaFavoritoInitialData);
  const [favoritado, setFavoritado] = useState<boolean>(false);
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state);

  async function handleSubmitFormFavoritaEmpresa(event: FormEvent) {
    event.preventDefault();
    if (data){
      if (dataEmpresa) {
        const validaSeFavoritoJaExiste = selector.favorito.favoritos.find((item) => {
          return dataEmpresa.codigo_empresa === item.codigo_empresa;
        });
  
        const novaEmpresaFavoritada = {
          favorito: favoritado,
          nome_empresa: dataEmpresa.nome_empresa,
          codigo_empresa: dataEmpresa.codigo_empresa,
          porcentagem: dataEmpresa.porcentagem
        };
  
        if (validaSeFavoritoJaExiste) {
          dispatch(removeFavorito(dataEmpresa));
          setFavoritado(true);
          dispatch(setFavorito(novaEmpresaFavoritada));
        } else {
          setFavoritado(true);
          dispatch(setFavorito(novaEmpresaFavoritada));
        }
      } else {
        return;
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

  async function handleSubmitFormBuscaEmpresa(values: FormTypes) {
    // let seEmpresaBuscadaExiste = favoritos.find((item) => {
    //   return item.codigo_empresa === values.empresa_buscada;
    // });
    
    let seEmpresaBuscadaExiste = BuscaEmpresa(values.empresa_buscada);

    if (seEmpresaBuscadaExiste) {
      if (!seEmpresaBuscadaExiste.data) {
        return;
      }
      
      setData(seEmpresaBuscadaExiste.data);

      if (data) {
        setDataEmpresa({
          codigo_empresa: data.nome_empresa,
          nome_empresa: data.nome_empresa,
          favorito: false,
          porcentagem: data.porcentagem
        });
        setDataGrafico(data.data);

        const validaSeEmpresaEstaNaLista = selector.empresaRecente.empresas_recentes.find((item) => {
          return data.codigo_empresa === item.codigo_empresa;
        });

        const buscaSeItemFoiFavoritado = selector.favorito.favoritos.find((item) => {
          return data.codigo_empresa === item.codigo_empresa;
        });
        
        const novaEmpresaRecente = {
          favorito: buscaSeItemFoiFavoritado?.favorito || false,
          nome_empresa: data.nome_empresa,
          codigo_empresa: data.codigo_empresa,
          porcentagem: data.porcentagem,
        };

        if (validaSeEmpresaEstaNaLista) {
          dispatch(removeEmpresaRecente(novaEmpresaRecente));
          setFavoritado(true);
          dispatch(setEmpresaRecente(novaEmpresaRecente));
        } else {
          setFavoritado(true);
          dispatch(setEmpresaRecente(novaEmpresaRecente));
        }
      } else {
        return;
      }
    } else {
      alert('Item não encontrado');
    }
  }

  return (
    <Container>
      <TituloDashboard titulo="Dashboard" />
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmitFormBuscaEmpresa}
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
          dataEmpresa={dataEmpresa}
          dataGrafico={dataGrafico}
          favoritado={favoritado}
          handleSubmitFavorito={handleSubmitFormFavoritaEmpresa}
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

/*
async function handleSubmitFormBuscaEmpresa(values: FormTypes) {
  let seEmpresaBuscadaExiste = favoritos.find((item) => {
    return item.codigo_empresa === values.empresa_buscada;
  });
  
  if (seEmpresaBuscadaExiste) {
    setData(seEmpresaBuscadaExiste);

    if (data) {
      const validaSeEmpresaEstaNalista = selector.empresaRecente.empresas_recentes.find((item) => {
        return data.codigo_empresa === item.codigo_empresa;
      });

      const buscaSeItemFoiFavoritado = selector.favorito.favoritos.find((item) => {
        return data.codigo_empresa === item.codigo_empresa;
      });
      
      const novaEmpresaRecente = {
        id: data.id,
        favorito: buscaSeItemFoiFavoritado?.favorito || false,
        src: data.src,
        alt: data.alt,
        nome_empresa: data.nome_empresa,
        codigo_empresa: data.codigo_empresa,
        porcentagem: data.porcentagem,
      };

      if (validaSeEmpresaEstaNalista) {
        dispatch(removeEmpresaRecente(novaEmpresaRecente));
        setFavoritado(true);
        dispatch(setEmpresaRecente(novaEmpresaRecente));
      } else {
        setFavoritado(true);
        dispatch(setEmpresaRecente(novaEmpresaRecente));
      }
    }
  } else {
    alert('Item não encontrado');
  }
}
*/

/*
async function handleSubmitFormBuscaEmpresa(values: FormTypes) {
  let seEmpresaBuscadaExiste = favoritos.find((item) => {
    return item.codigo_empresa === values.empresa_buscada;
  });
  
  Api({
    symbol: values.empresa_buscada,
    type: 'company'
  }).then((data) => {
    setDataCompany(data.data)
  }).catch((error) => {
    console.log(error);
  });

  Api({
    symbol: values.empresa_buscada,
    type: 'quote'
  }).then((data) => {
    setDataQuote(data.data)
  }).catch((error) => {
    console.log(error);
  });

  Api({
    symbol: values.empresa_buscada,
    type: 'chart',
    conteudo: '/date/5d'
  }).then((data) => {
    setHistoricalPricesGrafico(data.data)
  }).catch((error) => {
    console.log(error);
  });

  if (seEmpresaBuscadaExiste) {
    setData(seEmpresaBuscadaExiste);

    if (data) {
      const validaSeEmpresaEstaNalista = selector.empresaRecente.empresas_recentes.find((item) => {
        return data.codigo_empresa === item.codigo_empresa;
      });

      const buscaSeItemFoiFavoritado = selector.favorito.favoritos.find((item) => {
        return data.codigo_empresa === item.codigo_empresa;
      });
      
      const novaEmpresaRecente = {
        id: data.id,
        favorito: buscaSeItemFoiFavoritado?.favorito || false,
        src: data.src,
        alt: data.alt,
        nome_empresa: data.nome_empresa,
        codigo_empresa: data.codigo_empresa,
        porcentagem: data.porcentagem,
      };

      if (validaSeEmpresaEstaNalista) {
        dispatch(removeEmpresaRecente(novaEmpresaRecente));
        setFavoritado(true);
        dispatch(setEmpresaRecente(novaEmpresaRecente));
      } else {
        setFavoritado(true);
        dispatch(setEmpresaRecente(novaEmpresaRecente));
      }
    }
  } else {
    alert('Item não encontrado');
  }
}
*/
