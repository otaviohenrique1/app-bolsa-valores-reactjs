interface ILogin {
  id: string;
  nome: string;
  email: string;
}

type LoginState = { 
  login: ILogin[];
}

type LoginAction = { 
  type: string;
  login: ILogin;
}

interface IFavorito {
  id: number;
  favorito: boolean;
  src: string;
  alt: string;
  nome_empresa: string;
  codigo_empresa: string;
  porcentagem: number;
}

type FavoritoState = { 
  favoritos: IFavorito[];
}

type FavoritoAction = { 
  type: string;
  favorito: IFavorito;
}

type DispatchTypeLogin = (args: LoginAction) => LoginAction;
type DispatchType = (args: FavoritoAction) => FavoritoAction;
