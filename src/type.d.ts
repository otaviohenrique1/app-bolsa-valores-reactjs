interface ILogin {
  id: string;
  nome: string;
  email: string;
}

type LoginState = { 
  id: string;
  nome: string;
  email: string;
}

type LoginState2 = { 
  login: ILogin[];
}

type LoginState3 = { 
  login: ILogin;
}

type LoginAction = { 
  type: string;
  login: ILogin;
}

type DispatchTypeLogin = (args: LoginAction) => LoginAction;

/* --------------------------------------------------------- */
interface IEmpresas {
  id: number;
  favorito: boolean;
  src: string;
  alt: string;
  nome_empresa: string;
  codigo_empresa: string;
  porcentagem: number;
}

/* --------------------------------------------------------- */

interface IFavorito extends IEmpresas {}

type FavoritoState = { 
  favoritos: IFavorito[];
}

type FavoritoAction = { 
  type: string;
  favorito: IFavorito;
}

type DispatchTypeFavorito = (args: FavoritoAction) => FavoritoAction;

/* --------------------------------------------------------- */

interface IEmpresasRecentes extends IEmpresas {}

type EmpresasRecentesState = { 
  empresasRecentes: IEmpresasRecentes[];
}

type EmpresasRecentesAction = { 
  type: string;
  empresaRecente: IEmpresasRecentes;
}

type DispatchTypeEmpresasRecentes = (args: EmpresasRecentesAction) => EmpresasRecentesAction;
