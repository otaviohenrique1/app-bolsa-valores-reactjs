import * as actionTypes from "./actionTypes";

export function addEmpresaRecente(empresaRecente: IEmpresasRecentes) {
  const action: EmpresasRecentesAction = {
    type: actionTypes.ADD_EMPRESA_RECENTE,
    empresaRecente,
  };

  return action;
}

export function removeEmpresaRecente(empresaRecente: IEmpresasRecentes) {
  const action: EmpresasRecentesAction = {
    type: actionTypes.REMOVE_EMPRESA_RECENTE,
    empresaRecente,
  };
  
  return action;
}