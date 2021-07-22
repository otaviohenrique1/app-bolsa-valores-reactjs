import { Form, Formik } from 'formik';
import { Link, useHistory } from 'react-router-dom';
// import styled from 'styled-components';
import * as Yup from "yup";
import { Botao, BotaoContainer } from '../../components/Botao';
import { Campo } from '../../components/Campo';
import { FormularioContainer } from '../../components/Formulario';
import { ErroMensagem } from '../../components/Mensagem';
import { Titulo } from '../../components/Titulo';

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
      .required('O campo senha é obrigatorio'),
  });

  async function handleSubmitForm(values: FormTypes) {
    // alert(`Email: ${values.email}`);
    history.push('/home');
  }

  return (
    <FormularioContainer>
      <Titulo titulo={"Login"} />
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmitForm}
      >
        {({errors, touched}) => (
          <Form>
            <Campo
              htmlFor="email"
              labelCampo="Email"
              type="email"
              name="email"
              id="email"
              placeholder="Digite o email"
              erro={(errors.email && touched.email) ? (
                <ErroMensagem>{errors.email}</ErroMensagem>
              ) : null}
            />
            <Campo
              htmlFor="senha"
              labelCampo="Senha"
              type="password"
              name="senha"
              id="senha"
              placeholder="Digite a senha"
              erro={(errors.senha && touched.senha) ? (
                <ErroMensagem>{errors.senha}</ErroMensagem>
              ) : null}
            />
            <BotaoContainer>
              <Botao primary type="submit">Salvar</Botao>
              <Botao danger type="reset">Limpar</Botao>
              <Link to={'/novo_usuario'}>
                <Botao secondary type="button">Novo Usuario</Botao>
              </Link>
              <Link to={'/teste'}>
                <Botao type="button">Teste</Botao>
              </Link>
            </BotaoContainer>
          </Form>
        )}
      </Formik>
    </FormularioContainer>
  );
}

/*
  <CampoContainer>
    <label htmlFor="email">email</label>
    <div>
      <CampoFormulario
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
*/

/*
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
      .required('O campo senha é obrigatorio'),
  });

  async function handleSubmitForm(values: FormTypes) {
    alert(`Email: ${values.email}`);
    history.push('/home');
  }

  return (
    <FormularioContainer>
      <Titulo titulo={"Login"} />
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
                <CampoFormulario
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
            <BotaoContainer>
              <Botao primary type="submit">Salvar</Botao>
              <Botao danger type="reset">Limpar</Botao>
              <Botao secondary type="button">Novo Usuario</Botao>
              </BotaoContainer>
              </Form>
            )}
          </Formik>
        </FormularioContainer>
      );
    }
*/
