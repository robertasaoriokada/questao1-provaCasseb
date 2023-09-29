import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [frase, setFrase] = useState();
  const [fraseTrocada, setFraseTrocada] = useState();
  const vogais = ["A", "E", "I", "O", "U"];
  const consoantes = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const trocarEspacoPorConsoante = (frase) => {
    frase = frase.toLocaleLowerCase();
    frase = frase.split("");
    for (let i = 0; i < frase.length; i++) {
      for (let j = 0; j < consoantes.length; j++) {
        if (frase[i] === consoantes[j]) {
          frase[i] = " ";
        }
      }
    }
    console.log(frase);
    return vogaisEmCaixaAlta(frase);
  };

  const vogaisEmCaixaAlta = (frase) => {
    for (let i = 0; i < frase.length; i++) {
      for (let j = 0; j < vogais.length; j++) {
        if (frase[i].toLocaleUpperCase() === vogais[j].toLocaleUpperCase()) {
          frase[i] = vogais[j];
        }
      }
    }
    return frase;
  };

  return (
    <View style={styles.container}>
      <Text>Escreva uma frase</Text>
      <TextInput onChangeText={setFrase} style={styles.input}></TextInput>
      <Button
        title="Fazer a troca das letras"
        onPress={() => setFraseTrocada(trocarEspacoPorConsoante(frase))}
      ></Button>
      <Text>{fraseTrocada}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
  },
});
