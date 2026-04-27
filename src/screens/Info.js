import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

const Info = () => {
  const integrantes = [
    {
      nome: "Gustavo Barbosa Portela",
      ra: "1137640",
    },
    {
      nome: "Bruno Galvagni",
      ra: "1137862",
    },
    {
      nome: "João Gabriel Wink Mendes",
      ra: "1137652",
    },
    {
      nome: "Francisco Volpato",
      ra: "1137688",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.titulo}>Informações do Grupo</Text>

        <Text style={styles.descricao}>
          Somos um grupo de desenvolvedores iniciantes
          explorando React Native, criando aplicações
          mobile com consumo de API.
        </Text>

        <Text style={styles.descricao}>
          Este projeto foi desenvolvido com foco em
          aprendizado, criatividade e organização de código.
        </Text>
      </View>

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
    backgroundColor: "#dbeafe",
    padding: 20,
    alignItems: "center",
  },

  headerBox: {
    width: "100%",
    backgroundColor: "#ffffff",
    padding: 25,
    borderRadius: 20,
    marginBottom: 25,
    alignItems: "center",

    shadowColor: "#2563eb",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 5,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1d4ed8",
    marginBottom: 15,
    textAlign: "center",
  },

  descricao: {
    fontSize: 16,
    textAlign: "center",
    color: "#475569",
    lineHeight: 24,
    marginBottom: 10,
  },

  card: {
    width: "100%",
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 18,
    marginBottom: 15,

    shadowColor: "#2563eb",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e3a8a",
    marginBottom: 8,
  },

  ra: {
    fontSize: 16,
    color: "#2563eb",
    fontWeight: "600",
  },
});

export default Info;