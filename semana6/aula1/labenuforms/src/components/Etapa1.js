import React from "react";

class Etapa1 extends React.Component {
    render() {
        return (
        <div>
            <h1> ETAPA 1 - DADOS GERAIS </h1>

            <ol>
            <label for="nome">
                <li>Qual o seu nome?</li>
            </label>
            <input type="name" name="nome" id="nome" />

            <label for="idade">
                <li>Qual sua idade?</li>
            </label>
            <input type="nunber" name="idade" id="idade" />

            <label for="email">
                <li>Qual seu email?</li>
            </label>
            <input type="email" name="email" id="email" />

            <li>Qual a sua escolaridade?</li>
            <select name="tipoDeEnsino" size="1" />
            <option>Ensino médio incompleto</option>
            <option>Ensino médio completo</option>
            <option>Ensino superior incompleto</option>
            <option>Ensino superior completo</option>
            </ol>
        </div>
        );
    }
}

export default Etapa1;
