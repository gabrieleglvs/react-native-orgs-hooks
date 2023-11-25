import React, { useEffect, useState } from "react";
import { FlatList, Text } from 'react-native';

import { carregaProdutores } from "../../../servicos/carregaDados";

export default function Produtores() {
    const [titulo, setTitulo] = useState('');
    //[estado, método que altera o estado]
    const [lista, setLista] = useState([]);
    
    useEffect(() => {
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
        console.log(retorno);
    }, []);

    const TopoLista = () => {
        return <Text>{ titulo }</Text>
    }

    return <FlatList
        data={lista}
        renderItem={({item: { nome }}) => <Text>{ nome }</Text>}
        ListHeaderComponent={TopoLista}
    />
}