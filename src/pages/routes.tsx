import { BrowserRouter, Switch, Route } from "react-router-dom";
import Teste from "../utils/Teste1";
import { CadastroUsuario } from "./CadastroUsuario";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";

export function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/novo_usuario" component={CadastroUsuario} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/teste" component={Teste} />
        </Switch>
      </BrowserRouter>
    </>
  );
}