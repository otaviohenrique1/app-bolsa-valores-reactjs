interface ILogin {
  id: string;
  nome: string;
  email: string;
}

interface IEmpresas {
  id: number;
  favorito: boolean;
  src: string;
  alt: string;
  nome_empresa: string;
  codigo_empresa: string;
  porcentagem: number;
}

interface IFavorito extends IEmpresas {}

interface IEmpresasRecentes extends IEmpresas {}

type LoginState = { 
  login: ILogin[];
}

type LoginAction = { 
  type: string;
  login: ILogin;
}

type FavoritoState = { 
  favoritos: IFavorito[];
}

type FavoritoAction = { 
  type: string;
  favorito: IFavorito;
}

type EmpresasRecentesState = { 
  empresasRecentes: IEmpresasRecentes[];
}

type EmpresasRecentesAction = { 
  type: string;
  empresaRecente: IEmpresasRecentes;
}

type DispatchTypeLogin = (args: LoginAction) => LoginAction;

type DispatchTypeFavorito = (args: FavoritoAction) => FavoritoAction;

type DispatchTypeEmpresasRecentes = (args: EmpresasRecentesAction) => EmpresasRecentesAction;
