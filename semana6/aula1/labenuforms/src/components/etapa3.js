import React from "react";

class Etapa3 extends React.Component {
    render() {
        return (
            <div>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

                <ol>
                    <label for="graduacao">
                        <li>Por que você não terminou um curso de graduação?</li>
                    </label>
                    <input type="text" name="graduacao" id="graduacao"/>

                    <li>Você fez algum curso complementar?</li>
                    <select name="tipoDeCursu"/>
                    <option>Nenhum</option>
                    <option>Curso técnico</option>
                    <option>Curso de inglês</option>
                </ol>
            </div>
        );
    }
}

export default Etapa3;