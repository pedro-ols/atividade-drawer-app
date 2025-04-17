import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";

import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import IonIcons from "react-native-vector-icons/Ionicons";

const Contador = () => {
    const [count, setCount] = useState(0);
    const navigation = useNavigation();

    return (
        <View style={[styles.container, { backgroundColor: 'white' }]}>
            <TouchableOpacity
                style={{ position: 'absolute', top: 10, left: 10 }}
                onPress={() => navigation.openDrawer()}
            >
                <IonIcons name="menu" size={24} color="purple" />
            </TouchableOpacity>
            <Text style={styles.counterText}>Contador: {count}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Incrementar"
                    onPress={() => setCount(count + 1)}
                    color="purple"
                />
                <Button
                    title="Zerar"
                    onPress={() => setCount(0)}
                    color="purple"
                />
                <Button
                    title="Diminuir"
                    onPress={() => setCount(count - 1)}
                    color="purple"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterText: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
});

export default Contador;