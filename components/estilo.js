import { StyleSheet } from "react-native";

export const CORES = {
  azulProfundo: "#102a43",
  azul: "#1677a8",
  turquesa: "#2cc9b4",
  amarelo: "#2cc9b4",
  coral: "#df6c4f",
  fundo: "#eaf5f1",
  texto: "#18334c",
  textoSuave: "#547085",
  branco: "#ffffff",
  erro: "#b33b2e",
  acertou: "#087f6c",
  cardFundo: "#edf8f5",
  rodadaFundo: "#d9f3ed",
  botaoFundo: "#9de3d8",
  botaoSombra: "#2cc9b4",
};

export const estiloGlobal = StyleSheet.create({
  pagina: {
    flex: 1,
    backgroundColor: CORES.fundo,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
    alignItems: "center",
  },
  jogo: {
    width: "100%",
    maxWidth: 680,
    backgroundColor: CORES.branco,
    borderRadius: 8,
    padding: 24,
    marginTop: 12,
    shadowColor: CORES.azulProfundo,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.14,
    shadowRadius: 20,
    elevation: 6,
    alignItems: "center",
  },
});

export const estiloCabecalho = StyleSheet.create({
  cabecalhoFixo: {
    backgroundColor: "#9de3d8",
    paddingVertical: 18,
    alignItems: "center",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "800",
    color: CORES.azulProfundo,
  },
  rodadaBadge: {
    alignSelf: "center",
    marginTop: 4,
    paddingVertical: 7,
    paddingHorizontal: 15,
    color: CORES.azulProfundo,
    backgroundColor: CORES.rodadaFundo,
    borderRadius: 999,
    fontWeight: "700",
    overflow: "hidden",
  },
});

export const estiloSorteio = StyleSheet.create({
  areaSorteio: {
    alignItems: "center",
    marginVertical: 24,
  },
  visorNumero: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: CORES.azulProfundo,
    borderWidth: 9,
    borderColor: CORES.turquesa,
    alignItems: "center",
    justifyContent: "center",
  },
  rotuloVisor: {
    color: CORES.branco,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  numeroSorteadoTexto: {
    color: CORES.branco,
    fontSize: 64,
    fontWeight: "800",
    marginTop: 3,
  },
  ultimoNumero: {
    marginTop: 20,
    color: CORES.textoSuave,
    fontSize: 14,
  },
});

export const estiloFormulario = StyleSheet.create({
  formulario: {
    width: "100%",
    marginTop: 4,
  },
  label: {
    marginBottom: 10,
    fontWeight: "700",
    color: CORES.texto,
  },
  campoAcao: {
    flexDirection: "row",
    gap: 10,
  },
  input: {
    flex: 1,
    minWidth: 0,
    paddingVertical: 14,
    paddingHorizontal: 16,
    color: CORES.texto,
    borderWidth: 2,
    borderColor: "#b9d4cf",
    borderRadius: 5,
    textAlign: "center",
    backgroundColor: CORES.branco,
    fontSize: 16,
  },
  botao: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: CORES.botaoFundo,
    borderRadius: 5,
    borderBottomWidth: 4,
    borderBottomColor: CORES.botaoSombra,
    alignItems: "center",
    justifyContent: "center",
  },
  botaoTexto: {
    color: CORES.azulProfundo,
    fontWeight: "800",
  },
  mensagemErro: {
    marginTop: 11,
    textAlign: "center",
    color: CORES.erro,
    fontSize: 14,
  },
  mensagemResultado: {
    marginTop: 16,
    textAlign: "center",
    color: CORES.azulProfundo,
    fontWeight: "700",
  },
  mensagemAcertou: {
    color: CORES.acertou,
  },
});

export const estiloPlacar = StyleSheet.create({
  placar: {
    flexDirection: "row",
    width: "100%",
    gap: 12,
    marginTop: 28,
  },
  pontoCard: {
    flex: 1,
    padding: 18,
    backgroundColor: CORES.cardFundo,
    borderLeftWidth: 5,
    borderLeftColor: CORES.turquesa,
  },
  pontoTotal: {
    borderLeftColor: CORES.amarelo,
  },
  pontoCardLabel: {
    color: CORES.textoSuave,
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.7,
    textTransform: "uppercase",
  },
  pontoCardValor: {
    marginTop: 5,
    color: CORES.azulProfundo,
    fontSize: 28,
    fontWeight: "800",
  },
  pontoCardPequeno: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export const estiloResultadoFinal = StyleSheet.create({
  resultadoFinal: {
    width: "100%",
    marginTop: 28,
    padding: 27,
    alignItems: "center",
    backgroundColor: CORES.azulProfundo,
    borderRadius: 6,
  },
  sobretitulo: {
    marginBottom: 8,
    color: "#9de3d8",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },
  tituloFinal: {
    color: CORES.branco,
    fontSize: 26,
    fontWeight: "800",
  },
  pontuacaoFinalLabel: {
    marginTop: 17,
    color: "#dcecf2",
  },
  pontuacaoFinalValor: {
    marginTop: 4,
    color: CORES.amarelo,
    fontSize: 30,
    fontWeight: "800",
  },
  mensagemFinal: {
    marginVertical: 15,
    color: CORES.branco,
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center",
  },
  botao: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: CORES.botaoFundo,
    borderRadius: 5,
    borderBottomWidth: 4,
    borderBottomColor: CORES.botaoSombra,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
  },
  botaoTexto: {
    color: CORES.azulProfundo,
    fontWeight: "800",
  },
});