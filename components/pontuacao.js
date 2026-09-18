import React from "react";
import { View, Text } from "react-native";
import { estiloPlacar } from "../components/estilo";

export default function Placar({ pontosRodada, pontuacaoTotal }) {
  return (
    <View style={estiloPlacar.placar}>
      <View style={estiloPlacar.pontoCard}>
        <Text style={estiloPlacar.pontoCardLabel}>Pontos da rodada</Text>
        <Text style={estiloPlacar.pontoCardValor}>{pontosRodada}</Text>
      </View>
      <View style={[estiloPlacar.pontoCard, estiloPlacar.pontoTotal]}>
        <Text style={estiloPlacar.pontoCardLabel}>Pontuação total</Text>
        <Text style={estiloPlacar.pontoCardValor}>
          {pontuacaoTotal}
          <Text style={estiloPlacar.pontoCardPequeno}> / 500</Text>
        </Text>
      </View>
    </View>
  );
}