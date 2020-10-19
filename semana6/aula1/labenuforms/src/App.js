import React from "react";
import Etapa1 from "./components/Etapa1.js";
import Etapa2 from "./components/Etapa2.js";
import Etapa3 from "./components/Etapa3.js";
import Final from "./components/Final.js";

const AppContainer = styled.div`
font-family: sans-serif;
text-align: center;
`;

class App extends React.Component {
  state = {
    cadastroInicio: ""
  };

  onClickProximo = () => {
    this.setState ({
      cadastroInicio: "Etapa2"
    })
  }

  render() {
    const paginaRenderizada = () => {
      if (this.state.cadastroInicio){

      }
    };

    return <AppContainer>{paginaRenderizada}</AppContainer>;
  }
}

export default App;

