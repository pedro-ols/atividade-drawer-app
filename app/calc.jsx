import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IonIcons from "react-native-vector-icons/Ionicons";

export default function Calculator() {
  const navigation = useNavigation();
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Erro");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.openDrawer()}
      >
        <IonIcons name="menu" size={24} color="purple" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Calculadora do Vitor</Text>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.result}>{result}</Text>

        <View style={styles.buttonsGrid}>
          {/* Números organizados em 3 colunas */}
          <View style={styles.numbersColumn}>
            {["7", "4", "1", "0"].map((btn) => (
              <TouchableOpacity
                key={btn}
                style={styles.numberButton}
                onPress={() => handlePress(btn)}
              >
                <Text style={styles.buttonText}>{btn}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.numbersColumn}>
            {["8", "5", "2", "."].map((btn) => (
              <TouchableOpacity
                key={btn}
                style={styles.numberButton}
                onPress={() => handlePress(btn)}
              >
                <Text style={styles.buttonText}>{btn}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.numbersColumn}>
            {["9", "6", "3", "="].map((btn) => (
              <TouchableOpacity
                key={btn}
                style={styles.numberButton}
                onPress={() => (btn === "=" ? calculateResult() : handlePress(btn))}
              >
                <Text style={styles.buttonText}>{btn}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Operações alinhadas à direita */}
          <View style={styles.operationsColumn}>
            {["/", "*", "-", "+"].map((btn) => (
              <TouchableOpacity
                key={btn}
                style={styles.operationButton}
                onPress={() => handlePress(btn)}
              >
                <Text style={styles.buttonText}>{btn}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.clearButton} onPress={clearInput}>
              <Text style={styles.buttonText}>C</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "purple",
    marginTop: 50,
  },
  input: {
    fontSize: 30,
    color: "black",
    marginVertical: 10,
  },
  result: {
    fontSize: 24,
    color: "green",
    marginBottom: 20,
  },
  buttonsGrid: {
    flexDirection: "row",
    justifyContent: "center",
  },
  numbersColumn: {
    flexDirection: "column",
    marginHorizontal: 5,
  },
  operationsColumn: {
    flexDirection: "column",
    marginHorizontal: 5,
  },
  numberButton: {
    width: 60,
    height: 60,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
  },
  operationButton: {
    width: 60,
    height: 60,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  clearButton: {
    width: 60,
    height: 60,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
  },
  button: {
    padding: 20,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ffff",
    width: "100%",
  },
});