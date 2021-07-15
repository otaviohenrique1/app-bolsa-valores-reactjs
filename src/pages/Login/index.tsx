import { Field, Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components';
import * as Yup from "yup";
import { Button, ButtonContainer } from '../../components/Botao';
import { ErroMensagem } from '../../components/Mensagem';

interface FormTypes {
  email: string;
  senha: string;
}

const initialValues = {
  email: '',
  senha: '',
};

export function Login() {
  const history = useHistory();
  
  const validationSchema = Yup.object().shape({
    email: Yup
      .string()
      .email()
      .required('O campo email é obrigatorio'),
    senha: Yup
      .string()
      .min(8)
      .max(32)
      // .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$")
      .required('O campo senha é obrigatorio'),
  });

  async function handleSubmitForm(values: FormTypes) {
    alert(`Email: ${values.email}`);
    history.push('/home');
  }

  return (
    <FormularioContainer>
      <div className="titulo-container">
        <h1>Login</h1>
      </div>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmitForm}
      >
        {({errors, touched}) => (
          <Form>
            <CampoContainer>
              <label htmlFor="email">email</label>
              <div>
                <Field
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              {(errors.email && touched.email) ? (<ErroMensagem>{errors.email}</ErroMensagem>) : null}
            </CampoContainer>
            <CampoContainer>
              <label htmlFor="senha">senha</label>
              <div>
                <CampoFormulario
                  type="password"
                  name="senha"
                  id="senha"
                />
              </div>
              {(errors.senha && touched.senha) ? (<ErroMensagem>{errors.senha}</ErroMensagem>) : null}
            </CampoContainer>
            <ButtonContainer>
              <Button primary type="submit">Salvar</Button>
              <Button danger type="reset">Limpar</Button>
              <Button secondary type="button">Voltar</Button>
              <Button type="button">Teste</Button>
            </ButtonContainer>
          </Form>
        )}
      </Formik>
    </FormularioContainer>
  );
}

const FormularioContainer = styled.div`
  margin: 20px;
`;

const CampoFormulario = styled(Field)`
  margin-right: 15px;
  margin-left: 15px;
`;

const CampoContainer = styled.div`
  margin-top: 10px;
  div {
    width: 100%;
  }
`;

css`
  .titulo-container {
    width: 100%;
    background-color: aliceblue;
  }

  .titulo-container h1 {
    text-align: center;
  }
`;
