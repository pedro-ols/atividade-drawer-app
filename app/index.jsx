import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IonIcons from "react-native-vector-icons/Ionicons";

export default function HomeScreen() {
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
        <Text style={styles.title}>Seja bem-vindo</Text>
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
