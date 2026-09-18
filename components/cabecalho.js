import React from "react";
import { View, Text } from "react-native";
import { estiloCabecalho } from "../components/estilo";

const TOTAL_RODADAS = 5;

export default function Cabecalho({ rodadaAtual, jogoFinalizado }) {
  return (
    <>
      <View style={estiloCabecalho.cabecalhoFixo}>
        <Text style={estiloCabecalho.titulo}>Jogo dos Números</Text>
      </View>

      <Text style={estiloCabecalho.rodadaBadge}>
        {jogoFinalizado
          ? "Jogo concluído"
          : `Rodada ${rodadaAtual} de ${TOTAL_RODADAS}`}
      </Text>
    </>
  );
}