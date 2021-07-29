import { Form, Formik } from 'formik';
import * as Yup from "yup";
import { Link, useHistory } from 'react-router-dom';
import { Campo } from '../../components/Campo';
import { ErroMensagem } from '../../components/Mensagem';
import { Botao, BotaoContainer } from '../../components/Botao';
import { FormularioContainer } from '../../components/Formulario';
import { Titulo } from '../../components/Titulo';
// import IndexedDb from '../../utils/IndexedDb';
import { useDispatch } from 'react-redux';
import { setUsuario } from '../../features/usuario/usuarioSlice';

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

  const dispatch = useDispatch();

  async function handleSubmitForm(values: FormTypes) {
    // const indexedDb = new IndexedDb('api_app-bolsa-valores-reactjs');
    // await indexedDb.createObjectStore(['usuarios']);
    // await indexedDb.putValue('usuarios', {
    //   nome: values.nome,
    //   email: values.nome,
    //   senha: values.senha
    // });

    dispatch(setUsuario({
      id: `${Math.floor(Math.floor(Math.random() * 1000))}`,
      nome: values.nome,
      email: values.email,
      senha: values.senha
    }));

    alert(`Dados cadastrados`);
    history.push('/');
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