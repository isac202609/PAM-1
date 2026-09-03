import React from 'react';
import { View, Text } from 'react-native';
import estilo from './estilo';

export default function Noticia() {
  return (
    <View style={estilo.box}>
      <Text style={estilo.subtitulo}>FUTEBOL / CHAMPIONS LEAGUE</Text>
      <Text style={estilo.titulo}>Virada Histórica nos Acréscimos</Text>
       
      <Text style={estilo.texto}>
        Em uma partida pela fase de grupos, o time do Real Madrid buscou o resultado após estar perdendo por dois gols de diferença até os 40 minutos do segundo tempo. Com dois gols de cabeça em jogadas ensaiadas de escanteio, a equipe garantiu a vitória por 3 a 2 diante de sua torcida lotada no estádio. O resultado deixa o grupo totalmente pronto para a última rodada da competição.
      </Text>
    </View>
  );
}