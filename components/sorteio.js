import React from "react";
import { View, Text } from "react-native";
import { estiloSorteio } from "../components/estilo";

export default function Sorteio({ numeroSorteado, ultimoNumero }) {
  return (
    <View style={estiloSorteio.areaSorteio}>
      <View style={estiloSorteio.visorNumero}>
        <Text style={estiloSorteio.rotuloVisor}>Número sorteado</Text>
        <Text style={estiloSorteio.numeroSorteadoTexto}>
          {numeroSorteado === null ? "?" : numeroSorteado}
        </Text>
      </View>
      <Text style={estiloSorteio.ultimoNumero}>
        {ultimoNumero === "--"
          ? "Último número sorteado: --"
          : ultimoNumero}
      </Text>
    </View>
  );
}