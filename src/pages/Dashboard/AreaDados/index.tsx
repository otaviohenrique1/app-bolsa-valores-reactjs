import { Form, Formik } from "formik";
import styled from "styled-components";
import { CampoBusca } from "../../../components/Campo";
import * as Yup from "yup";

const Container = styled.div`
  background-color: #C4C4C4;
  width: 100%;
`;

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

interface FormTypes {
  empresa_buscada: string;
}

const initialValues = {
  empresa_buscada: '',
};

export function AreaDados() {
  const validationSchema = Yup.object().shape({
    empresa_buscada: Yup
      .string()
      .required('O campo é obrigatorio'),
  });

  async function handleSubmitForm(values: FormTypes) {
    alert(`Empresa: ${values.empresa_buscada}`);
  }

  return (
    <Container>
      <TituloContainer>
        <h1>Dashboard</h1>
      </TituloContainer>
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
    </Container>
  );
}