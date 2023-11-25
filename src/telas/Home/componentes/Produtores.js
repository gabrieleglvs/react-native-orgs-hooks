import React, { useEffect } from "react";
import { Text } from 'react-native';

import { carregaProdutores } from "../../../servicos/carregaDados";

export default function Produtores() {
    useEffect(() => {
        const retorno = carregaProdutores();
        console.log(retorno);
    }, []); //quando temos um arrays vazio a função carrega assim o que o componente é carregado
    
    return <Text>Produtores</Text>
}