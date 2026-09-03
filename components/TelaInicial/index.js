import React from 'react';
import { View } from 'react-native';
import Titulo from '../Titulo';
import Noticia from '../Noticia';

export default function TelaInicial() {
  return (
    <View style={{ flex: 1, backgroundColor: '#F4F5F7' }}>
      <Titulo />
      <Noticia />
    </View>
  );
}