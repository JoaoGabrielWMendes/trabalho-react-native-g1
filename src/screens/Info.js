import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Info = () => {
  const integrantes = [
    {
      nome: 'Gustavo Barbosa Portela',
      ra: '1137640',
    },
    {
      nome: 'Bruno Galvagni',
      ra: '1137862',
    },
    {
      nome: 'João Gabriel Wink Mendes',
      ra: '1137652',
    },
    {
      nome: 'Francisco Volpato',
      ra: '1137688',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Informações do Grupo</Text>
      <Text style={styles.descricao}>
        Somos um grupo de desenvolvedores iniciantes explorando React Native,
        criando aplicações mobile com consumo de API. Este projeto foi feito
        com foco em aprendizado, criatividade e organização de código.
      </Text>
      {integrantes.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.ra}>RA: {item.ra}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  descricao: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: 'rgba(0, 0, 0, .5)',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
});

export default Info;