import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IonIcons from "react-native-vector-icons/Ionicons";

export default function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.button}>
          <IonIcons name="person" size={50} color="#DDDDDD" />
        </TouchableOpacity>
        <Text style={styles.welcomeText}>Seja bem-vindo</Text>
        <Text style={styles.welcomeText2}>Telinha de perfil</Text>
      </View>
    </View>
  );
}
const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: "purple",
    padding: 10,
    margin: 30,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText:{
    color: "purple",
    fontWeight: "bold",
    fontSize: 36,
  },
  welcomeText2: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
  }
};
