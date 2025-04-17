import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IonIcons from "react-native-vector-icons/Ionicons";

export default function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.openDrawer()}
      >
        <IonIcons name="menu" size={24} color="purple" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Calculadora</Text>
        <View style={styles.buttonsGrid}>
          <TouchableOpacity style={styles.numberButton} value={1} id="numberButton"></TouchableOpacity>
          <TouchableOpacity style={styles.numberButton} value={2} id="numberButton"></TouchableOpacity>
          <TouchableOpacity style={styles.numberButton} value={3} id="numberButton"></TouchableOpacity>
          <TouchableOpacity style={styles.numberButton} value={4} id="numberButton"></TouchableOpacity>
          <TouchableOpacity style={styles.numberButton} value={5} id="numberButton"></TouchableOpacity>
          <TouchableOpacity style={styles.numberButton} value={6} id="numberButton"></TouchableOpacity>
          <TouchableOpacity style={styles.numberButton} value={7} id="numberButton"></TouchableOpacity>
          <TouchableOpacity style={styles.numberButton} value={8} id="numberButton"></TouchableOpacity>
          <TouchableOpacity style={styles.numberButton} value={9} id="numberButton"></TouchableOpacity>
          <TouchableOpacity style={styles.numberButton} value={0} id="numberButton"></TouchableOpacity>
        </View>
        <Text style={styles.welcomeText2}>Telinha de home</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "purple",
    marginTop: 50,
  },
  button: {
    padding: 20,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  numberInput: {
    width: 100,
    height: 40,
    borderColor: "purple",
    borderWidth: 5,
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 18,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ffff",
    width: "100%",
    height: 200,
  },
  welcomeText: {
    color: "purple",
    fontWeight: "bold",
    fontSize: 36,
  },
  welcomeText2: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
  },
});
