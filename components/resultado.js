import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { estiloResultadoFinal } from "../components/estilo";

const TOTAL_RODADAS = 5;
const PONTUACAO_MAXIMA = TOTAL_RODADAS * 100;

function obterMensagemFinal(pontuacaoTotal) {
  if (pontuacaoTotal === 500) return "Perfeito! Você acertou todos!";
  if (pontuacaoTotal >= 400) return "Quase perfeito!";
  if (pontuacaoTotal >= 300) return "Excelente!";
  if (pontuacaoTotal >= 200) return "Muito bem!";
  if (pontuacaoTotal >= 100) return "Bom começo!";
  return "Continue tentando!";
}

export default function ResultadoFinal({
  jogoFinalizado,
  pontuacaoTotal,
  onReiniciar,
}) {
  if (!jogoFinalizado) return null;

  return (
    <View style={estiloResultadoFinal.resultadoFinal}>
      <Text style={estiloResultadoFinal.sobretitulo}>Partida concluída</Text>
      <Text style={estiloResultadoFinal.tituloFinal}>Fim de jogo!</Text>
      <Text style={estiloResultadoFinal.pontuacaoFinalLabel}>
        Pontuação final:
      </Text>
      <Text style={estiloResultadoFinal.pontuacaoFinalValor}>
        {pontuacaoTotal} / {PONTUACAO_MAXIMA}
      </Text>
      <Text style={estiloResultadoFinal.mensagemFinal}>
        {obterMensagemFinal(pontuacaoTotal)}
      </Text>
      <TouchableOpacity
        style={estiloResultadoFinal.botao}
        onPress={onReiniciar}
        activeOpacity={0.8}
      >
        <Text style={estiloResultadoFinal.botaoTexto}>Jogar Novamente</Text>
      </TouchableOpacity>
    </View>
  );
}