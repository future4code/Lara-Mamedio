import React from "resct";

class Etapa2 extends React.Component {
    render() {
        return (
        <div>
            <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

            <ol>
            <label for="curso">
                <li>Qual o curso?</li>
            </label>
            <input type="text" name="curso" id="curso" />

            <label for="unidade">
                <li>Qual a unidade de ensino?</li>
            </label>
            <input type="text" name="unidade" id="unidade" />
            </ol>
        </div>
        );
    }
}

export default Etapa2;