import * as actionTypes from "./actionTypes";

const initialStateEmpresasRecentes: EmpresasRecentesState = {
  empresasRecentes: [],
};

const reducerEmpresasRecentes = (
  state: EmpresasRecentesState = initialStateEmpresasRecentes,
  action: EmpresasRecentesAction
): EmpresasRecentesState => {
  switch (action.type) {
    case actionTypes.ADD_EMPRESA_RECENTE:
      const novaEmpresaRecente: IEmpresasRecentes = {
        id: action.empresaRecente.id,
        favorito: action.empresaRecente.favorito,
        src: action.empresaRecente.src,
        alt: action.empresaRecente.alt,
        nome_empresa: action.empresaRecente.nome_empresa,
        codigo_empresa: action.empresaRecente.codigo_empresa,
        porcentagem: action.empresaRecente.porcentagem,
      };
      return {
        ...state,
        empresasRecentes: state.empresasRecentes.concat(novaEmpresaRecente)
      };
    case actionTypes.REMOVE_EMPRESA_RECENTE:
      const empresaRecenteRemovida: IEmpresasRecentes[] = state.empresasRecentes.filter(empresaRecente => empresaRecente.id !== action.empresaRecente.id);
      return {
        ...state,
        empresasRecentes: empresaRecenteRemovida
      };
  
    default:
      break;
  }
  return state;
};

export default reducerEmpresasRecentes;