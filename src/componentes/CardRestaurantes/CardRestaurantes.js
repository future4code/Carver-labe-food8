import React from "react";
// import { useHistory } from "react-router-dom";
// import { irParaRestaurante } from "../../routes/cordinator";
import { ContainerCardRestaurante, ContainerImagem,ContainerTextoNome, ContainerTextos} from "./estilo";

const CardRestaurante = (props) => {

    // const history = useHistory()

return (
      <ContainerCardRestaurante>
          <ContainerImagem alt="Imagem Restaurante">
          </ContainerImagem><ContainerTextoNome>Nome Restaurante</ContainerTextoNome>
          <ContainerTextos>
              <p>Tempo de Entrega:</p>
              <p>Frete:</p>
          </ContainerTextos>
      </ContainerCardRestaurante>
)
}

export default CardRestaurante