import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  box: {
    padding: 20,
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 8,
    elevation: 2
  },
  subtitulo: {
    fontSize: 12,
    color: '#0045d0',
    fontWeight: 'bold',
    marginBottom: 5,
    textTransform: 'uppercase'
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#172B4D',
    marginBottom: 15
  },
  texto: {
    fontSize: 15,
    lineHeight: 22,
    color: '#333',
    textAlign: 'justify'
  }
});

export default estilo;