import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import Cabecalho from "./components/cabecalho";
import Sorteio from "./components/sorteio";
import Formulario from "./components/formulario";
import Placar from "./components/pontuacao";
import ResultadoFinal from "./components/resultado";

import { estiloGlobal } from "./components/estilo";



const TOTAL_RODADAS = 5;
const PONTUACAO_MAXIMA = TOTAL_RODADAS * 100;

function sortearNumero() {
  return Math.floor(Math.random() * 100);
}

function calcularPontuacao(numeroEscolhido, numeroGerado) {
  return 100 - Math.abs(numeroEscolhido - numeroGerado);
}

function validarEntrada(valorBruto) {
  const valor = valorBruto.trim();

  if (valor === "") {
    return { valido: false, mensagem: "Informe um número entre 0 e 99." };
  }

  const numeroEscolhido = Number(valor);
  const eInteiroValido =
    Number.isInteger(numeroEscolhido) &&
    numeroEscolhido >= 0 &&
    numeroEscolhido <= 99;

  if (!eInteiroValido) {
    return { valido: false, mensagem: "Use apenas números inteiros de 0 a 99." };
  }

  return { valido: true, numeroEscolhido };
}

export default function App() {
  const [rodadaAtual, setRodadaAtual] = useState(1);
  const [pontuacaoTotal, setPontuacaoTotal] = useState(0);
  const [numeroDigitado, setNumeroDigitado] = useState("");
  const [numeroSorteado, setNumeroSorteado] = useState(null);
  const [ultimoNumero, setUltimoNumero] = useState("--");
  const [pontosRodada, setPontosRodada] = useState("--");
  const [mensagemValidacao, setMensagemValidacao] = useState("");
  const [mensagemResultado, setMensagemResultado] = useState(
    "Escolha um número para começar."
  );
  const [acertou, setAcertou] = useState(false);
  const [jogoFinalizado, setJogoFinalizado] = useState(false);

  function realizarRodada() {
    if (jogoFinalizado) return;

    const entrada = validarEntrada(numeroDigitado);
    if (!entrada.valido) {
      setMensagemValidacao(entrada.mensagem);
      setMensagemResultado("");
      return;
    }

    setMensagemValidacao("");

    const numeroGerado = sortearNumero();
    const pontuacaoDaRodada = calcularPontuacao(
      entrada.numeroEscolhido,
      numeroGerado
    );

    const novaPontuacaoTotal = Math.min(
      PONTUACAO_MAXIMA,
      pontuacaoTotal + pontuacaoDaRodada
    );

    setNumeroSorteado(numeroGerado);
    setUltimoNumero(`Último número sorteado: ${numeroGerado}`);
    setPontosRodada(String(pontuacaoDaRodada));
    setPontuacaoTotal(novaPontuacaoTotal);

    if (entrada.numeroEscolhido === numeroGerado) {
      setMensagemResultado(`Acertou! Você fez ${pontuacaoDaRodada} pontos!`);
      setAcertou(true);
    } else {
      setMensagemResultado(
        `Você escolheu: ${entrada.numeroEscolhido}. Número sorteado: ${numeroGerado}. Você fez ${pontuacaoDaRodada} pontos!`
      );
      setAcertou(false);
    }

    if (rodadaAtual === TOTAL_RODADAS) {
      setJogoFinalizado(true);
      return;
    }

    setRodadaAtual((r) => r + 1);
    setNumeroDigitado("");
  }

  function reiniciarJogo() {
    setRodadaAtual(1);
    setPontuacaoTotal(0);
    setNumeroDigitado("");
    setNumeroSorteado(null);
    setUltimoNumero("--");
    setPontosRodada("--");
    setMensagemValidacao("");
    setMensagemResultado("Escolha um número para começar.");
    setAcertou(false);
    setJogoFinalizado(false);
  }

  return (
    <SafeAreaView style={estiloGlobal.pagina}>
      <Cabecalho rodadaAtual={rodadaAtual} jogoFinalizado={jogoFinalizado} />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={estiloGlobal.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={estiloGlobal.jogo}>
            <Sorteio
              numeroSorteado={numeroSorteado}
              ultimoNumero={ultimoNumero}
            />

            <Formulario
              numeroDigitado={numeroDigitado}
              onChangeNumero={setNumeroDigitado}
              onSortear={realizarRodada}
              mensagemValidacao={mensagemValidacao}
              mensagemResultado={mensagemResultado}
              acertou={acertou}
              jogoFinalizado={jogoFinalizado}
            />

            <Placar
              pontosRodada={pontosRodada}
              pontuacaoTotal={pontuacaoTotal}
            />

            <ResultadoFinal
              jogoFinalizado={jogoFinalizado}
              pontuacaoTotal={pontuacaoTotal}
              onReiniciar={reiniciarJogo}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}