import Drawer from "expo-router/drawer";
import IonIcons from "react-native-vector-icons/Ionicons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout({}) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            title: "Início",
            drawerLabel: "Início",
            headerShown: false,
            headerLeft: false,
            drawerIcon: ({ size, color }) => (
              <IonIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            title: "Profile",
            drawerLabel: "Seu Perfil", 
            headerLeft: false,
            drawerIcon: ({ size, color }) => (
              <IonIcons name="person" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
