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
            // headerLeft: false,
            drawerIcon: ({ size, color }) => (
              <IonIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="calc"
          options={{
            title: "Calculadora",
            drawerLabel: "Calculadora", 
            headerShown: false,
            // headerLeft: false,
            drawerIcon: ({ size, color }) => (
              <IonIcons name="person" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
        name="contador"
        options={{
          title: "Contador",
          drawerLabel: "Contador",
          headerShown: false,
          headerLeft: false,
          drawerIcon: ({ size, color }) => (
            <IonIcons name="logo-android" size={size} color={color} />
          ),
        }}
      />

        <Drawer.Screen
          name="passwordGenerator"
          options={{
            title: "Gerador de senha",
            drawerLabel: "Gerador de senha",
            headerShown: false,
            headerLeft: false,
            drawerIcon: ({ size, color }) => (
              <IonIcons name="key" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
