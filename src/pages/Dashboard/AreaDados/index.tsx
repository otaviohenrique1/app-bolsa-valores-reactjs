import { Form, Formik } from "formik";
import styled from "styled-components";
import { CampoBusca } from "../../../components/Campo";
import * as Yup from "yup";
import { TituloDashboard } from "../../../components/Titulo";
import { Grafico } from "../../../components/Grafico";
import { EmpresasRecentes } from "../EmpresasRecentes";

const Container = styled.div`
  background-color: #C4C4C4;
  width: 100%;
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
      <Grafico />
      <EmpresasRecentes />
    </Container>
  );
}