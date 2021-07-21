import { Form, Formik } from 'formik';
import * as Yup from "yup";
import { Link, useHistory } from 'react-router-dom';
import { Campo } from '../../components/Campo';
import { ErroMensagem } from '../../components/Mensagem';
import { Botao, BotaoContainer } from '../../components/Botao';
import { FormularioContainer } from '../../components/Formulario';
import { Titulo } from '../../components/Titulo';
import {  } from "module";

interface FormTypes {
  nome: string;
  email: string;
  senha: string;
}

const initialValues = {
  nome: '',
  email: '',
  senha: '',
};

export function CadastroUsuario() {
  const history = useHistory();
  
  const validationSchema = Yup.object().shape({
    nome: Yup
      .string()
      .required('O campo nome é obrigatorio'),
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
    // alert(`Nome: ${values.nome}
    // Email: ${values.email}`);
    // let db;
    // let request = indexedDB.open("api_usuario_cadastro");
    // request.onerror = function(event) {
    //   alert("Erro");
    //   // alert("Database error: " + event.target.errorCode);
    // };
    // request.onsuccess = function(event) {
    //   db = request.result;
    // }
    // request.onupgradeneeded = function(event) {
    //   console.log('Criando ou atualizando o banco');
    //   let connection = event.target.result;
    //   connection.createObjectStore('usuarios');
    // }
    alert(`Dados cadastrados`);
    history.push('/home');
  }

  return (
    <FormularioContainer>
      <Titulo titulo="Cadastro Usuario" />
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmitForm}
      >
        {({errors, touched}) => (
          <Form>
            <Campo
              htmlFor="nome"
              labelCampo="Nome"
              type="text"
              name="nome"
              id="nome"
              placeholder="Digite o nome"
              erro={(errors.nome && touched.nome) ? (
                <ErroMensagem>{errors.nome}</ErroMensagem>
              ) : null}
            />
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
              <Link to='/'>
                <Botao secondary type="button">Voltar</Botao>
              </Link>
            </BotaoContainer>
          </Form>
        )}
      </Formik>
    </FormularioContainer>
  );
}