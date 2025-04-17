import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(23); 

  // Função para gerar a senha
  const generatePassword = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }
    setPassword(newPassword);
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.openDrawer()}
        >
        <IonIcons name="menu" size={24} color="purple" />
      </TouchableOpacity>
        <View style={styles.content}>

      <Text style={styles.title}>Gerador de Senha</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Tamanho da senha (ex: 12)"
        value={String(length)}
        onChangeText={(text) => {
            const num = Number(text);
            if (num > 0 && num <= 50) {
                setLength(num);
            } else if (text === "") {
                setLength("");
            }
        }}
        />

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      {password ? (
          <View style={{ marginTop: 20 }}>
        <Text style={styles.passwordTitle}>Senha Gerada: </Text>
        <Text style={styles.password}>{password}</Text>
        </View>
      ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
    width: "100%",
    height: 270,
  },
  menuButton: {
    padding: 20,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "purple",
    marginBottom: 20,
  },
  input: {
    width: 220,
    height: 40,
    borderColor: "purple",
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  passwordTitle: {
    marginTop: 20,
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  password: {
    marginTop: 20,
    fontSize: 16,
    color: "purple",
    textAlign: "center",
  },
});