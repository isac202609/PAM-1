import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { estiloFormulario } from "../components/estilo";

export default function Formulario({
  numeroDigitado,
  onChangeNumero,
  onSortear,
  mensagemValidacao,
  mensagemResultado,
  acertou,
  jogoFinalizado,
}) {
  if (jogoFinalizado) return null;

  return (
    <View style={estiloFormulario.formulario}>
      <Text style={estiloFormulario.label}>Qual número será sorteado?</Text>
      <View style={estiloFormulario.campoAcao}>
        <TextInput
          style={estiloFormulario.input}
          value={numeroDigitado}
          onChangeText={onChangeNumero}
          keyboardType="number-pad"
          placeholder="0 a 99"
          placeholderTextColor="#789298"
          maxLength={2}
        />
        <TouchableOpacity
          style={estiloFormulario.botao}
          onPress={onSortear}
          activeOpacity={0.8}
        >
          <Text style={estiloFormulario.botaoTexto}>Sortear Número</Text>
        </TouchableOpacity>
      </View>

      {!!mensagemValidacao && (
        <Text style={estiloFormulario.mensagemErro}>{mensagemValidacao}</Text>
      )}

      {!!mensagemResultado && (
        <Text
          style={[
            estiloFormulario.mensagemResultado,
            acertou && estiloFormulario.mensagemAcertou,
          ]}
        >
          {mensagemResultado}
        </Text>
      )}
    </View>
  );
}