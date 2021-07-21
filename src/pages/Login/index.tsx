import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import * as Yup from "yup";
import { Botao, BotaoContainer } from '../../components/Botao';
import { Campo } from '../../components/Campo';
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
            <Campo
              htmlFor="email"
              labelCampo="Email"
              // props={{
              //   type: "email",
              //   name: "email",
              //   id: "email"
              // }}
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
              // props={{
              //   type: "password",
              //   name: "senha",
              //   id: "senha"
              // }}
              type="password"
              name="senha"
              id="senha"
              placeholder="Digite a senha"
              erro={(errors.email && touched.email) ? (
                <ErroMensagem>{errors.email}</ErroMensagem>
              ) : null}
            />
            {/* <CampoContainer>
              <label htmlFor="email">email</label>
              <div>
                <CampoFormulario
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              {(errors.email && touched.email) ? (<ErroMensagem>{errors.email}</ErroMensagem>) : null}
            </CampoContainer> */}
            {/* <CampoContainer>
              <label htmlFor="senha">senha</label>
              <div>
                <CampoFormulario
                  type="password"
                  name="senha"
                  id="senha"
                />
              </div>
              {(errors.senha && touched.senha) ? (<ErroMensagem>{errors.senha}</ErroMensagem>) : null}
            </CampoContainer> */}
            <BotaoContainer>
              <Botao primary type="submit">Salvar</Botao>
              <Botao danger type="reset">Limpar</Botao>
              <Botao secondary type="button">Novo Usuario</Botao>
              {/* <Botao type="button">Teste</Botao> */}
            </BotaoContainer>
          </Form>
        )}
      </Formik>
    </FormularioContainer>
  );
}


const FormularioContainer = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TituloEstilizado = styled.h1`
  width: 100%;
  background-color: aliceblue;
  text-align: center;
`;

interface TituloProps {
  titulo: string;
}

function Titulo(props: TituloProps) {
  return (
    <TituloEstilizado>
      {props.titulo}
    </TituloEstilizado>
  );
}

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
