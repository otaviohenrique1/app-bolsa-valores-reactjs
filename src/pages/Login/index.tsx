import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// import styled from 'styled-components';
import * as Yup from "yup";
import { Botao, BotaoContainer } from '../../components/Botao';
import { Campo } from '../../components/Campo';
import { FormularioContainer } from '../../components/Formulario';
import { ErroMensagem } from '../../components/Mensagem';
import { Titulo } from '../../components/Titulo';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../features/login/loginSlice';
import { RootState } from '../../features/app/store';
import { useSelector } from 'react-redux';


// import { Dispatch } from "redux";
// import { useCallback } from 'react';
// import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { getLogin } from '../../features/login/loginSlice';
// import { addLogin, getLogin } from '../../features/login/loginSlice';
// import { useState } from 'react';
// import { addLogin } from '../../store/actionCreators';

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

  // const loginDados: ILogin = useSelector(
  //   (state: LoginState) => state,
  //   shallowEqual
  // )

  // const dispatch: Dispatch<any> = useDispatch();
  
  // const saveLogin = useCallback((login: ILogin) => dispatch(addLogin(login)), [dispatch]);
  
  // const [dataLogin, setDataLogin] = useState<{
  //   id: string;
  //   nome: string;
  // }>({
  //   id: "",
  //   nome: ""
  // });

  // const loginDados = useSelector((state: RootState) => {
  //   return [state.login.login.id, state.login.login.nome]
  // });

  // const loginDados2 = useSelector((state: RootState) => state);

  const dispatch = useDispatch();

  const loginDados = useSelector((state: RootState) => state);

  
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
    // saveLogin({
    //   id: '1',
    //   nome: 'Juca',
    //   email: 'juca@email.com'
    // });

    const email = loginDados.usuario.email;
    const senha = loginDados.usuario.senha;
    
    const validaEmail = email === values.email;
    const validaSenha = senha === values.senha;
    const validaLogin = validaEmail || validaSenha;
    
    if (!validaLogin) {
      alert('Email ou senha estao invalidos');
      return;
    } else {
      dispatch(setLogin({
        id: `${loginDados.usuario.id}`,
        nome: loginDados.usuario.nome,
      }));
      history.push('/dashboard');
    }
    // console.log(`Email => ${values.email}`);
    // console.log(`Senha => ${values.senha}`);
    // loginDados.map((item) => console.log(item));
    // for (const item in loginDados2) {
    //   console.log(item);
    // }
    // console.log(loginDados2);
    // console.log(`ID => ${loginDados[0]}`);
    // console.log(`Nome => ${loginDados[1]}`);
    // console.log(dispatch(getLogin()));
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
              <Botao primary type="submit">Entrar</Botao>
              <Botao danger type="reset">Limpar</Botao>
              <Link to={'/novo_usuario'}>
                <Botao secondary type="button">Novo Usuario</Botao>
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
