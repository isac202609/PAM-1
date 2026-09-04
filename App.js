import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

const TOTAL_RODADAS = 5;
const PONTUACAO_MAXIMA = TOTAL_RODADAS * 100;

function sortearNumero() {
  return Math.floor(Math.random() * 100);
}

function calcularPontuacao(numeroEscolhido, numeroGerado) {
  return 100 - Math.abs(numeroEscolhido - numeroGerado);
}

function obterMensagemFinal(pontuacaoTotal) {
  if (pontuacaoTotal === 500) return "Perfeito! Você acertou todos!";
  if (pontuacaoTotal >= 400) return "Quase perfeito!";
  if (pontuacaoTotal >= 300) return "Excelente!";
  if (pontuacaoTotal >= 200) return "Muito bem!";
  if (pontuacaoTotal >= 100) return "Bom começo!";
  return "Continue tentando!";
}

export default function JogoDosNumeros() {
  const [rodadaAtual, setRodadaAtual] = useState(1);
  const [pontuacaoTotal, setPontuacaoTotal] = useState(0);
  const [numeroEscolhidoTexto, setNumeroEscolhidoTexto] = useState("");
  const [numeroSorteado, setNumeroSorteado] = useState(null);
  const [pontosRodada, setPontosRodada] = useState(null);
  const [mensagemValidacao, setMensagemValidacao] = useState("");
  const [mensagemResultado, setMensagemResultado] = useState(
    "Escolha um número para começar."
  );
  const [acertou, setAcertou] = useState(false);
  const [jogoConcluido, setJogoConcluido] = useState(false);

  function validarEntrada() {
    const valor = numeroEscolhidoTexto.trim();

    if (valor === "") {
      return { valido: false, mensagem: "Informe um número entre 0 e 99." };
    }

    const numeroEscolhido = Number(valor);
    const eInteiroValido =
      Number.isInteger(numeroEscolhido) &&
      numeroEscolhido >= 0 &&
      numeroEscolhido <= 99;

    if (!eInteiroValido) {
      return {
        valido: false,
        mensagem: "Use apenas números inteiros de 0 a 99.",
      };
    }

    return { valido: true, numeroEscolhido };
  }

  function realizarRodada() {
    const entrada = validarEntrada();
    if (!entrada.valido) {
      setMensagemValidacao(entrada.mensagem);
      setMensagemResultado("");
      return;
    }

    setMensagemValidacao("");
    const novoNumeroSorteado = sortearNumero();
    const pontuacaoDaRodada = calcularPontuacao(
      entrada.numeroEscolhido,
      novoNumeroSorteado
    );

    const novaPontuacaoTotal = Math.min(
      PONTUACAO_MAXIMA,
      pontuacaoTotal + pontuacaoDaRodada
    );

    setNumeroSorteado(novoNumeroSorteado);
    setPontosRodada(pontuacaoDaRodada);
    setPontuacaoTotal(novaPontuacaoTotal);

    if (entrada.numeroEscolhido === novoNumeroSorteado) {
      setMensagemResultado(
        `Acertou! Você fez ${pontuacaoDaRodada} pontos!`
      );
      setAcertou(true);
    } else {
      setMensagemResultado(
        `Você escolheu: ${entrada.numeroEscolhido}. Número sorteado: ${novoNumeroSorteado}. Você fez ${pontuacaoDaRodada} pontos!`
      );
      setAcertou(false);
    }

    if (rodadaAtual === TOTAL_RODADAS) {
      setJogoConcluido(true);
      return;
    }

    setRodadaAtual(rodadaAtual + 1);
    setNumeroEscolhidoTexto("");
  }

  function reiniciarJogo() {
    setRodadaAtual(1);
    setPontuacaoTotal(0);
    setNumeroEscolhidoTexto("");
    setNumeroSorteado(null);
    setPontosRodada(null);
    setMensagemValidacao("");
    setMensagemResultado("Escolha um número para começar.");
    setAcertou(false);
    setJogoConcluido(false);
  }

  return (
    <View style={styles.pagina}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Jogo dos Números</Text>
      </View>

      <View style={styles.jogo}>
        <View style={styles.rodadaBadge}>
          <Text style={styles.rodadaTexto}>
            {jogoConcluido
              ? "Jogo concluído"
              : `Rodada ${rodadaAtual} de ${TOTAL_RODADAS}`}
          </Text>
        </View>

        <View style={styles.areaSorteio}>
          <View style={styles.visorNumero}>
            <Text style={styles.rotuloVisor}>NÚMERO SORTEADO</Text>
            <Text style={styles.numeroSorteado}>
              {numeroSorteado === null ? "?" : numeroSorteado}
            </Text>
          </View>
          <Text style={styles.ultimoNumero}>
            Último número sorteado:{" "}
            {numeroSorteado === null ? "--" : numeroSorteado}
          </Text>
        </View>

        <View style={styles.formulario}>
          <Text style={styles.label}>Qual número será sorteado?</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite um número de 0 a 99"
            keyboardType="numeric"
            value={numeroEscolhidoTexto}
            onChangeText={setNumeroEscolhidoTexto}
            editable={!jogoConcluido}
          />
          {mensagemValidacao !== "" && (
            <Text style={styles.mensagemErro}>{mensagemValidacao}</Text>
          )}
          <View style={styles.botaoWrapper}>
            <Button
              title="Sortear Número"
              onPress={realizarRodada}
              disabled={jogoConcluido}
            />
          </View>
        </View>

        <View style={styles.placar}>
          <View style={styles.pontoCard}>
            <Text style={styles.pontoLabel}>PONTOS DA RODADA</Text>
            <Text style={styles.pontoValor}>
              {pontosRodada === null ? "--" : pontosRodada}
            </Text>
          </View>
          <View style={styles.pontoCard}>
            <Text style={styles.pontoLabel}>PONTUAÇÃO TOTAL</Text>
            <Text style={styles.pontoValor}>{pontuacaoTotal}</Text>
            <Text style={styles.pontoMaximo}>/ {PONTUACAO_MAXIMA}</Text>
          </View>
        </View>

        {mensagemResultado !== "" && (
          <Text
            style={[
              styles.mensagemResultado,
              acertou && styles.mensagemAcertou,
            ]}
          >
            {mensagemResultado}
          </Text>
        )}

        {jogoConcluido && (
          <View style={styles.resultadoFinal}>
            <Text style={styles.resultadoTitulo}>Resultado Final</Text>
            <Text style={styles.pontuacaoFinal}>
              {pontuacaoTotal} / {PONTUACAO_MAXIMA}
            </Text>
            <Text style={styles.mensagemFinal}>
              {obterMensagemFinal(pontuacaoTotal)}
            </Text>
            <Button title="Jogar Novamente" onPress={reiniciarJogo} />
          </View>
        )}

        {!jogoConcluido && (
          <View style={styles.botaoWrapper}>
            <Button title="Reiniciar" onPress={reiniciarJogo} color="#547085" />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
   pagina: {
    flex: 1,
    backgroundColor: "#eaf5f1",
  },
  cabecalho: {
    backgroundColor: "#9de3d8",
    paddingVertical: 20,
    alignItems: "center",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#102a43",
  },
  jogo: {
    margin: 16,
    padding: 24,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    boxShadow: "0 20px 55px rgba(16, 42, 67, 0.14)",
    elevation: 4,
  },
  rodadaBadge: {
    alignSelf: "center",
    backgroundColor: "#d9f3ed",
    borderRadius: 999,
    paddingHorizontal: 15,
    paddingVertical: 7,
    marginBottom: 20,
  },
  rodadaTexto: {
    color: "#102a43",
    fontWeight: "bold",
  },
  areaSorteio: {
    alignItems: "center",
    marginBottom: 24,
  },
  visorNumero: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "#102a43",
    borderWidth: 9,
    borderColor: "#2cc9b4",
    alignItems: "center",
    justifyContent: "center",
  },
  rotuloVisor: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  numeroSorteado: {
    color: "#ffffff",
    fontSize: 64,
    fontWeight: "bold",
    marginTop: 3,
  },
  ultimoNumero: {
    marginTop: 20,
    color: "#547085",
  },
  formulario: {
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 10,
    color: "#18334c",
  },
  input: {
    borderWidth: 2,
    borderColor: "#b9d4cf",
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  mensagemErro: {
    color: "#b33b2e",
    fontSize: 13,
    marginBottom: 10,
    textAlign: "center",
  },
  botaoWrapper: {
    marginTop: 6,
  },
  placar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  pontoCard: {
    flex: 1,
    backgroundColor: "#edf8f5",
    borderLeftWidth: 5,
    borderLeftColor: "#2cc9b4",
    padding: 16,
    marginHorizontal: 4,
  },
  pontoLabel: {
    color: "#547085",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  pontoValor: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#102a43",
    marginTop: 4,
  },
  pontoMaximo: {
    fontSize: 12,
    color: "#547085",
  },
  mensagemResultado: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#102a43",
    marginBottom: 16,
  },
  mensagemAcertou: {
    color: "#087f6c",
  },
  resultadoFinal: {
    marginTop: 12,
    padding: 24,
    backgroundColor: "#102a43",
    borderRadius: 6,
    alignItems: "center",
  },
  resultadoTitulo: {
    color: "#9de3d8",
    fontWeight: "bold",
    fontSize: 13,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  pontuacaoFinal: {
    color: "#ffe28a",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 12,
  },
  mensagemFinal: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
